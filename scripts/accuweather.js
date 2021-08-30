
const KEY = 'xwOeLNda1DJnlbWyyH4jAFYGSVGAcD1l';
const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const currentSearch = 'http://dataservice.accuweather.com/currentconditions/v1/';
const forecastSearch = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';

const getCityKey = async cityName => {
    const response = await axios.get(citySearch, {
        params: {
            apikey: KEY,
            q: cityName
        }
    })
    return await response.data[0].Key;
}

const getWeather = async key => {
    const response = await axios.get(`${currentSearch}${key}?apikey=${KEY}`);
    return await response.data;
}

getCityKey('fortaleza')
    .then( key => getWeather(key).then( weather => console.log(weather[0].WeatherText)) )
    .catch( err => console.log(err) );