const { Builder, By, until } = require('selenium-webdriver');
const axios = require('axios');

(async function checkLinksAndButtons() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        const url = 'https://yourgpt.ai/chatbot/ecommerce'; // Change this to your target website
        await driver.get(url);
        
        let elements = await driver.findElements(By.css('a, button'));
        let results = [];
        
        for (let element of elements) {
            try {
                let tagName = await element.getTagName();
                let text = await element.getText();
                let link;
                
                if (tagName === 'a') {
                    link = await element.getAttribute('href');
                } else {
                    link = await element.getAttribute('onclick');
                }
                
                if (link) {
                    try {
                        let response = await axios.get(link);
                        if (response.status >= 400) {
                            results.push(`BROKEN: ${text} - ${link} (Status: ${response.status})`);
                        } else {
                            results.push(`OK: ${text} - ${link}`);
                        }
                    } catch (error) {
                        results.push(`BROKEN: ${text} - ${link} (Error: ${error.message})`);
                    }
                } else {
                    results.push(`NO LINK: ${text} (Button has no link)`);
                }
            } catch (err) {
                console.log(`Error processing element: ${err.message}`);
            }
        }
        
        console.log('Test Report:*********************************************************************************************************');
        console.log(results.join('\n'));
        
    } catch (error) {
        console.error('Error running script:', error);
    } finally {
        await driver.quit();
    }
})();
