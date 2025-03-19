// index.js
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.google.com');
        let searchBox = await driver.findElement(By.name('q'));
        await searchBox.sendKeys('anime');
        await searchBox.submit();   
        await driver.wait(until.titleContains('anime'), 10000);
        console.log(await driver.getTitle());
    } 
    finally {
        await driver.quit();
    }
})();
