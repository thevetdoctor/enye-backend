const express = require('express');
const router = express.Router();
// const apiResponse = require('../apiResponse.json');
const axios = require('axios');

// GET Endpoint to Exchange rate API
router.get('/rates', async(req, res) => {

    // Declare variables
    const { query } = req;
    const queryKeys =  Object.keys(query);
    const baseParams = query['base'];
    const currencyQuery = query['currency'];
    
    // Check if query parameters are provided in request & return appropriate error response
    if(!query || !queryKeys) return res.status(400).json({message: 'Query parameters are required in URL'});
    
    if(!baseParams) return res.status(400).json({message: 'Base currency parameter is required in URL'});
    
    if(!currencyQuery) return res.status(400).json({message: 'Currency parameter values are required in URL'});
    const currencyParams = query['currency'].split(',');
    
    // console.log(query, queryKeys, baseParams, currencyParams, currencyParams.length);
    
    // Fetch rates from Exchange rate API
    let apiResponse;

    try {
        await axios('https://api.exchangeratesapi.io/latest')
        .then(response => response)
        .then(data => {
            // console.log(data.data);
            if(data.statusText === 'OK') {
                apiResponse = data.data;
            }
        });
    } catch(e) {
        // if error in API response, return error
        console.log(e);
        return res.json({error: 'Error in fetching rates'});
    }

    // Generate body of rates object as required
    const rates = {};
    for(let key in apiResponse.rates) {
        if(currencyParams.indexOf(key) >= 0) {
            console.log(key);
            rates[key] = apiResponse.rates[key];
        }
    }

    // Generate date format as required
    const date = new Date();
    let month = date.getMonth() + 1;
    month = (`${month}`.length < 2) ? `0${month}` : `${month}`;
    let day = date.getDate();
    day = (`${day}`.length < 2) ? `0${day}` : `${day}`;
    const year = date.getFullYear();
    const currentDate = [year, month, day].join('-')
    console.log(currentDate);

    // Generate response format as required
    const rateResponse = {
        base: baseParams,
        date: currentDate,
        rates
    };

    // Return response
    return res.status(200)
    .json({results: rateResponse});
});



module.exports = router;