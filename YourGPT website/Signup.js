const {Builder,By} = require('selenium-webdriver');
require('chromedriver');

(async function Signup_page() {
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://app.yourgpt.ai/create-account');
        //First name
        await driver.findElement(By.xpath('//*[@id=":r0:"]')).sendKeys('Tester1');
        //last name
        await driver.findElement(By.xpath('//*[@id=":r1:"]')).sendKeys('User');
        //Phone number
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div/form/div[2]/div/input')).sendKeys('1234567890');
        //Gmail address
        await driver.findElement(By.xpath('//*[@id=":r2:"]')).sendKeys('dixoh72526@operades.com');
        //password
        await driver.findElement(By.xpath('//*[@id=":r3:"]')).sendKeys('Password123@#');
        //checkbox btn
        await driver.findElement(By.xpath('//*[@id=":r4:"]')).click();
        //submit button
        await driver.findElement(By.xpath('/html/body/div[1]/div/div/div[2]/div[2]/div[1]/div/form/button')).click();
    }
    catch(error){
        await driver.sleep(4000);
        console.log(error);
    }
})()
