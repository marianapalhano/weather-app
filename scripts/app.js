import './accuweather';

const searchForm = document.querySelector('.weather-search');
let cityName;

searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    cityName = searchForm.location.value.trim();

    getCityKey(cityName)
    .then( key => getWeather(key).then( weather => console.log(weather[0].WeatherText)) )
})