
const KEY = 'xwOeLNda1DJnlbWyyH4jAFYGSVGAcD1l';
const forecastSearch = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
const citySearch = 'http://dataservice.accuweather.com/locations/v1/cities/search';
const currentSearch = 'http://dataservice.accuweather.com/currentconditions/v1/';

const getCityKey = async () => {
    const response = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/search', {
        params: {
            apikey: KEY,
            q: 'fortaleza'
        }
    })
    const cityKey = await response.data[0].Key;
    return cityKey;
}

const getWeather = async key => {
    const response = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${KEY}`);
    const weather = await response.data;
    return weather;
}

getCityKey()
    .then( key => getWeather(key).then( weather => console.log(weather[0].WeatherText)) )