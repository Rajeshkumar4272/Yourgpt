const {Builder} = require('selenium-webdriver');
const axios = require('axios');

(async function apiWithHeader(){
    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('https://www.google.com');

        let response = await axios.get('https://mangaverse-api.p.rapidapi.com/manga/fetch?page=1&genres=Harem%2CFantasy&nsfw=true&type=all',{
            headers: {
                'x-rapidapi-key': 'd7071096aamsh101991967767552p15f13cjsna07d210be8b7',
                'x-rapidapi-host': 'mangaverse-api.p.rapidapi.com'
            }
        });
        console.log('response data',await response.data);

    }
    catch(error){
        console.log('something wrong');
    }

})()
