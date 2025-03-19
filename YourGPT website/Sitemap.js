const { Builder } = require('selenium-webdriver');
const axios = require('axios');
const xml2js = require('xml2js');

async function fetchSitemap(sitemapUrl) {
    try {
        const response = await axios.get(sitemapUrl);
        
        return response.data;

        
    } catch (error) {
        console.error('Error fetching sitemap:', error);
        return null;
    }
}

async function parseSitemap(xmlData) {
    const parser = new xml2js.Parser();
    return new Promise((resolve, reject) => {
        parser.parseString(xmlData, (err, result) => {
            if (err) reject(err);
            const urls = result.urlset.url.map(entry => entry.loc[0]);
            resolve(urls);
        });
    });
}

async function checkUrls(urls) {
    const driver = await new Builder().forBrowser('chrome').build();

    for (const url of urls) {
        try {
            await driver.get(url);
            console.log(`Successfully loaded: ${url}`);
            
        } catch (error) {
            console.error(`Error loading ${url}:`, error);
        }
    }

    await driver.quit();
}

(async function main() {
    const sitemapUrl = 'https://yourgpt.ai/sitemap.xml'; 
    const xmlData = await fetchSitemap(sitemapUrl);

    if (xmlData) {
        const urls = await parseSitemap(xmlData);
        console.log(`Found ${urls.length} URLs in sitemap.`);
        await checkUrls(urls);
    }
})();
