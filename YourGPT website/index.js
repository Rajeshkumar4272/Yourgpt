const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function testYourGpt() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Open the website
        await driver.get('https://yourgpt.ai/');

        // Wait for the title to appear
        await driver.wait(until.titleIs('YourGPT - Next-Gen AI and GPT Suite for Your Needs'), 5000);

        // Scroll from top to bottom
        await driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
        await driver.sleep(2000);

        // Scroll from bottom to top
        await driver.executeScript('window.scrollTo(0, 0);');
        await driver.sleep(2000);

        // Wait for "Get Started" button and click it
        let getStartedBtn = await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Get Started')]")), 5000);
        await getStartedBtn.click();

        // Wait for the form link and click it
        let formLink = await driver.wait(until.elementLocated(By.xpath("//p/a[contains(text(),'form')]")), 5000);
        await formLink.click();

    } catch (error) {
        console.error("Error encountered:", error);
    } finally {
        // Close the browser
        await driver.quit();
    }
})();
