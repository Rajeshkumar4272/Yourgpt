const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function testGoogleSearchWithGeolocation() {
  // Setup Chrome options
  const options = new chrome.Options();
  options.excludeSwitches(['enable-logging']); // Suppress unnecessary logs

  // Initialize WebDriver
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Get the Chrome DevTools Protocol session
    const cdp = await driver.createCDPConnection('page');

    // Set geolocation to France (Paris)
    await setGeolocation(cdp);

    // Navigate to Google search page
    await driver.get('https://www.google.com');

    // Find the search input field by its 'name' attribute
    let searchBox = await driver.findElement(By.name('q'));

    // Enter the search word (e.g., "Netflix") and press ENTER
    await searchBox.sendKeys('Netflix', Key.RETURN);

    // Wait for a few seconds to allow the results to load
    await wait(3000); // Optional wait for 3 seconds

    // Fetch the page title after the search is complete
    let title = await driver.getTitle();
    console.log('Page Title:', title);

    // Fetch the first search result title (this is usually an <h3> element)
    let firstResult = await driver.findElement(By.css('h3')).getText();
    console.log('First Search Result:', firstResult);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Quit the driver
    await driver.quit();
  }
}

// Function to set geolocation to Paris, France
async function setGeolocation(cdp) {
  await cdp.send('Emulation.setGeolocationOverride', {
    latitude: 48.8566,  // Paris, France Latitude
    longitude: 2.3522,  // Paris, France Longitude
    accuracy: 1         // Accuracy in meters
  });
}

// Normal wait function (in milliseconds)
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

testGoogleSearchWithGeolocation();
