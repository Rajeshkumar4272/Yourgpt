const { Builder, By, until } = require('selenium-webdriver');
const { titleIs } = require('selenium-webdriver/lib/until');
require('chromedriver');

(async function testYourGpt() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open the website
        await driver.get('https://yourgpt.ai/');

        // Wait for the title to appear
        await driver.wait(titleIs('YourGPT - Next-Gen AI and GPT Suite for Your Needs'), 5000);

        // Scroll from top to bottom
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        await driver.sleep(2000);

        // Scroll from bottom to top
        await driver.executeScript('window.scrollTo(0, 0);');
        await driver.sleep(2000);

        // Click the "Get Started" button
        await driver.findElement(By.xpath('/html/body/div[1]/div[3]/div/div[3]/div/div/a[1]')).click();

        // Click the link to open the form
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[1]/div/div[1]/p/a')).click();

    } catch (error) {
        console.log(error);
    } finally {
        // Close the browser
        await driver.quit();
    }
})();
