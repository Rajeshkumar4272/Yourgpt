const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');
const baseUrl = "https://app.yourgpt.ai/login";

(async function testYourGpt() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open the login page
        await driver.get(baseUrl);

        // Enter email
        await driver.findElement(By.xpath('//*[@id=":r0:"]')).sendKeys('rohit@yourgpt.ai');
        
        // Enter password
        await driver.findElement(By.xpath('//*[@id=":r1:"]')).sendKeys('ae3c8ab6354');
        
        // Click the submit button
        await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/div[2]/div[1]/div/form/button')).click();
        //waiting 1
        await driver.manage().setTimeouts({ implicit: 5000 });
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div/main/div/div[1]/div[1]/div[2]/a')).click();

        //all windowhandles
        const windows = await driver.getAllWindowHandles();
        
        // Switch to the new tab
        await driver.switchTo().window(windows[1]);

        // Now on the new tab, access the chatbot element
        const xpath = '/html/body/div[1]/div/div[2]/div/main/div/div/div[2]/div/div[2]/div[22]';
        await driver.wait(until.elementLocated(By.xpath(xpath)), 15000); // Wait up to 15 seconds for element
        await driver.findElement(By.xpath(xpath)).click();
        
        // Perform actions on the chatbot dashboard as needed
        await driver.sleep(2000); // Wait to make sure the page has loaded fully

    } catch (error) {
        console.error(error);
    } finally {
        await driver.sleep(3000); // Adjust if you want to observe results before closing
        await driver.quit(); // Close the browser
    }
})();
