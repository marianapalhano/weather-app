
const KEY = 'xwOeLNda1DJnlbWyyH4jAFYGSVGAcD1l';
const weatherSearch = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const currentSearch = 'http://dataservice.accuweather.com/currentconditions/v1/';

// const axios = require('axios');

const getCity = async () => {
    const response = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/search', {
        params: {
            apikey: KEY,
            q: 'fortaleza'
        }
    })
    const cityKey = await response.data[0].Key;
    return cityKey;
}

getCity()
    .then( data => console.log('resolved', data))