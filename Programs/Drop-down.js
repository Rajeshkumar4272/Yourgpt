const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function dropdown() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.bstackdemo.com/');

        // Click on the select element to open the options
        let selectElement = await driver.findElement(By.xpath('//*[@id="__next"]/div/div/main/div[2]/div[1]/div[1]/select'));
        await selectElement.click();

        // Wait for the options to be visible
        await driver.wait(until.elementsLocated(By.css('select option')), 5000);

        // Find all option elements
        let allOptions = await driver.findElements(By.css('select option'));

        let matchedText = "Highest to lowest";

        for (let option of allOptions) {
            let text = await option.getText();
            console.log(text);
            if (text.includes(matchedText)) {
                await option.click();
                console.log("clicked");
                break;
            }
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('close')
    }
})();
