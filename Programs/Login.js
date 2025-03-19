const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function login() {
    let driver = new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://test-login-app.vercel.app/');

        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('Password@12345');

        await driver.findElement(By.name('login')).click();

        await driver.wait(until.titleIs('Welcomepage'),5000);
    }
    finally{
        await driver.quit();
    }
})()