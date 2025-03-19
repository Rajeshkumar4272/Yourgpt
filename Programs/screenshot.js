const { Builder, until } = require('selenium-webdriver');
require('chromedriver');
const fs = require('fs');
const path = require('path');

(async function screenshot() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://www.youtube.com/');

        await driver.wait(until.titleIs('YouTube'), 5000);

        let screenshot = await driver.takeScreenshot();


        const filepath = await path.join(__dirname, 'screenshot.png');
        console.log(filepath);
        
        fs.writeFileSync(filepath, screenshot, 'base64');

    } catch (error) {
        console.log('something wrong');
    }
    finally {
        await driver.quit();
    }

})()