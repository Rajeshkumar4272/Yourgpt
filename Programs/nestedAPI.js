const axios = require('axios');

(async function getRatings() {
    try {
        // Fetch the JSON data from the API
        let response = await axios.get('https://fakestoreapi.com/products?limit=5');

        if (response.status === 200) {
            // Iterate over each product in the response data
            response.data.forEach(product => {
                // Check if the product has a rating
                if (product.rating && product.rating.rate) {
                    console.log(`Product ID: ${product.id}, Rating: ${product.rating.rate}`);
                } else {
                    console.log(`Product ID: ${product.id} does not have a rating.`);
                }
            });
        } else {
            console.log('Response status is not 200.');
        }
    } catch (error) {
        console.log('An error occurred:', error);
    }
})();
