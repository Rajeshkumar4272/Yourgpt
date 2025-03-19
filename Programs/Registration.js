const { Builder, By, Key, until, WebElement, List, option } = require('selenium-webdriver');
require('chromedriver'); // If using Chrome

(
    async function fillForm() {
    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build(); // Use 'firefox' if using Firefox

    try {
        // Navigate to the URL
        await driver.get('https://demo.automationtesting.in/Register.html');

        // Fill out the form
        await driver.findElement(By.xpath('//*[@id="basicBootstrapForm"]/div[1]/div[1]/input')).sendKeys('John');
        await driver.findElement(By.xpath('//*[@id="basicBootstrapForm"]/div[1]/div[2]/input')).sendKeys('Doe');
        await driver.findElement(By.xpath('//*[@id="basicBootstrapForm"]/div[2]/div/textarea')).sendKeys('123 Main St, Anytown, USA');
        await driver.findElement(By.xpath('//*[@id="eid"]/input')).sendKeys('john.doe@example.com');
        await driver.findElement(By.xpath('//*[@id="basicBootstrapForm"]/div[4]/div/input')).sendKeys('1234567890');

        // Select gender
        await driver.findElement(By.xpath('//*[@id="basicBootstrapForm"]/div[5]/div/label[1]/input')).click();

        // Select hobbies
        await driver.findElement(By.xpath('//*[@id="checkbox1"]')).click();
        await driver.findElement(By.xpath('//*[@id="checkbox2"]')).click();

        //Select  language dropdown
        let dropdownTrigger = await driver.findElement(By.xpath('//*[@id="msdd"]'));
        await dropdownTrigger.click();
        await driver.wait(until.elementIsVisible(dropdownTrigger), 5000);

        // Wait for the dropdown list to be visible
        let dropdownList = await driver.findElement(By.xpath('/html/body/section/div/div/div[2]/form/div[7]/div/multi-select/div[2]/ul'));
        await driver.wait(until.elementIsVisible(dropdownList), 5000);

        // Locate the desired option
        let optionText = 'Spanish'; // Replace with the text of the option you want to select
        let option = await driver.findElement(By.xpath(`/html/body/section/div/div/div[2]/form/div[7]/div/multi-select/div[2]/ul/li[a[text()='${optionText}']]`));

        // Ensure the option is visible and clickable
        await driver.wait(until.elementIsVisible(option), 5000);
        await driver.wait(until.elementIsEnabled(option), 5000);
        await option.click();

       //select dropdown skills
        // await driver.findElement(By.id('Skills')).click();

    ////*[@id="Skills"]/option[2]


        
        // Select year
        await driver.findElement(By.xpath('//*[@id="yearbox"]')).sendKeys('1990');

        // Select month
        await driver.findElement(By.xpath('//*[@id="basicBootstrapForm"]/div[11]/div[2]/select')).sendKeys('January');

        // Select day
        await driver.findElement(By.xpath('//*[@id="daybox"]')).sendKeys('1');

        // Enter password
        await driver.findElement(By.xpath('//*[@id="firstpassword"]')).sendKeys('Password123');
        await driver.findElement(By.xpath('//*[@id="secondpassword"]')).sendKeys('Password123');

        // Click the submit button
        await driver.findElement(By.xpath('//*[@id="submitbtn"]')).click();

        // Wait for a while to see the result
        await driver.sleep(5000); // Wait for 5 seconds

    } catch(exception ){
        console.log("Problem start here :- " + exception)
    }
    
    // finally {                                                                                                                                                                                                    
    //     // Quit the WebDriver
    //     await driver.quit();
    // }
})();
