const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

(async function scrollWebpage() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://jqueryui.com/droppable/');

        await driver.switchTo().frame(0);

        let dragable = await driver.findElement(By.id('draggable'));
        let dropable = await driver.findElement(By.id('droppable'));

        let actions = driver.actions({async:true});

        await actions.dragAndDrop(dragable,dropable).perform();
        console.log("drag and drop completed");

    } catch (error) {
        console.log('error');
    }
})()