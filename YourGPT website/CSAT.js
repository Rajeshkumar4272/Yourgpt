const { Builder, By, until } = require("selenium-webdriver");

(async function verifySessionRatingAndCSAT() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        // Step 1: Open the web application
        await driver.get("https://yourgpt.ai/"); // Replace with actual URL
        await driver.manage().window().maximize();
        
        // Step 2: Navigate to session rating section
        let ratingElement = await driver.wait(
            until.elementLocated(By.id("session-rating")), 5000
        );
        await ratingElement.click(); // Click to open rating popup if required
        
        // Step 3: Submit a rating (e.g., selecting 4 stars)
        let starRating = await driver.wait(
            until.elementLocated(By.xpath("//input[@value='4']")), 5000
        );
        await starRating.click();
        
        // Step 4: Submit the rating
        let submitButton = await driver.findElement(By.id("submit-rating"));
        await submitButton.click();
        
        // Step 5: Verify success message
        let successMessage = await driver.wait(
            until.elementLocated(By.className("success-message")), 5000
        );
        let messageText = await successMessage.getText();
        console.log("Success Message:", messageText);
        
        // Step 6: Refresh the page to verify persistence
        await driver.navigate().refresh();
        await driver.sleep(3000); // Wait for elements to load

        // Step 7: Locate CSAT score section
        let csatElement = await driver.wait(
            until.elementLocated(By.id("csat-score")), 5000
        );
        await csatElement.click();

        // Step 8: Submit CSAT score (e.g., selecting 5)
        let csatScore = await driver.findElement(By.xpath("//input[@value='5']"));
        await csatScore.click();

        // Step 9: Submit CSAT score
        let submitCsatButton = await driver.findElement(By.id("submit-csat"));
        await submitCsatButton.click();

        // Step 10: Verify CSAT success message
        let csatSuccess = await driver.wait(
            until.elementLocated(By.className("csat-success")), 5000
        );
        let csatMessage = await csatSuccess.getText();
        console.log("CSAT Success Message:", csatMessage);

    } catch (error) {
        console.error("Test failed:", error);
    } finally {
        await driver.quit(); // Close the browser
    }
})();
