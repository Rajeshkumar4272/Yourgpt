const { Builder, By, Action } = require('selenium-webdriver');
require('chromedriver');

(async function slider() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.w3schools.com/howto/howto_js_slideshow.asp');

        let slider = await driver.findElement(By.xpath('//*[@id="main"]/div[3]'));
        let sliderWidth = await slider.getSize().width;
        let moveBy = sliderWidth * 0.8;

        let action = driver.actions();

        await action.clickAndHold(slider).moveByOffset(moveBy, 0).release().perform();
        
        console.log('Slider moved successfully');


    } catch (error) {
        console.log('Something wrong');
    }

})()