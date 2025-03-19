const { Builder, By } = require('selenium-webdriver');
const axios = require('axios');
const xml2js = require('xml2js');

async function getSitemapUrls(sitemapUrl) {
    try {
        const response = await axios.get(sitemapUrl);
        const result = await xml2js.parseStringPromise(response.data);
        return result.urlset.url.map(urlObj => urlObj.loc[0]);
    } catch (error) {
        console.error("Error fetching sitemap:", error);
        return [];
    }
}

async function extractHeadings(url) {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get(url);
        let h1 = await driver.findElements(By.tagName('h1'));
        let h2 = await driver.findElements(By.tagName('h2'));
        
        console.log("******");
        console.log("URL:", url);
        for (let element of h1) {
            console.log("Heading 1:", await element.getText());
        }
        for (let element of h2) {
            console.log("Heading 2:", await element.getText());
        }
        console.log("******");
    } finally {
        await driver.quit();
    }
}

(async function () {
    const sitemapUrl = 'https://yourgpt.ai/sitemap.xml';
    const urls = await getSitemapUrls(sitemapUrl);
    
    for (let url of urls) {
        await extractHeadings(url);
    }
})();