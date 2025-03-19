const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function scrollWebpage(){
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://yourgpt.ai/chatbot');

        //1. Scroll to the Bottom of the Page
        // await driver.executeScript('window.scroll(0,document.body.scrollHeight);');

        //2. Scroll to a Specific Element
        // let element = await driver.findElement(By.xpath('/html/body/div[1]/div[14]/div/h4'));
        // await driver.executeScript('arguments[0].scrollIntoView(true);', element);

        //3. Scroll by a Specific Amount
        await driver.executeScript('window.scrollBy(0,1000)');


    } catch (error) {
        console.log('Something wrong');
    }
})()