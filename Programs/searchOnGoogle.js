const {Builder,By,until, Key} =  require ('selenium-webdriver');
require('chromedriver');

(async function searchOnGoogle(){
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get("https://www.google.co.in/");

        await driver.findElement(By.xpath('//*[@id="APjFqb"]')).sendKeys('manual testing',Key.RETURN);
        

    } catch (exception) {
        console.log('something wrong')
    }


}

)()