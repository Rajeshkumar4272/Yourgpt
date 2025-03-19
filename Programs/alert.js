const {Builder,By} = require ('selenium-webdriver');
require('chromedriver');
(async function test(){
        let driver = await new Builder().forBrowser('chrome').build();
        try {
           await driver.get('https://demo.automationtesting.in/Register.html');
    
        } catch (exception) {
            console.log('something wrong')
        }
    })()



