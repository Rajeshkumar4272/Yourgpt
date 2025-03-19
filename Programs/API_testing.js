const { Builder, By } = require('selenium-webdriver');
const axios = require('axios');

(async function test() {
    // Set up Selenium WebDriver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open a webpage
        await driver.get('https://yourgpt.ai/chatbot');

        const postData = {
            title: 'Testing',
            userId: '101'
        };

        const putData = {
            id : '21',
            title : 'Akitsuki',
            userId: '102'
        }

        // Fetch data from JSONPlaceholder API
        try {
            let response = await axios.post('https://fakestoreapi.com/products', postData);
            console.log('API response:', response.data);
        } catch (error) {
            console.error('API request failed:', error);
        }

        // put method 
        try {
            let response = await axios.put('https://fakestoreapi.com/products/21', putData);
            console.log('API response:', response.data);
        } catch (error) {
            console.error('API request failed:', error);
        }

        try {
            let response = await axios.delete('https://fakestoreapi.com/products/21');
            console.log('API response:', response.data);
        } catch (error) {
            console.error('API request failed:', error);
        }

       

        // Example Selenium interaction (you can modify or remove this part as needed)
        let element = await driver.findElement(By.tagName('h1')); // Assume there's an <h1> tag on the page
        let text = await element.getText();
        console.log('Text from <h1> element:', text);

    } finally {
        // Clean up and close the browser
        await driver.quit();
    }
})();
