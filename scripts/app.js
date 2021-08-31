//import './accuweather';

const searchForm = document.querySelector('.weather-search');

const updateCity = async (city) => {
    const cityKey = await getCityKey(city);
    const weather = await getWeather(cityKey);
    
    return weather[0];
}


searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const city = searchForm.location.value.trim();
    searchForm.reset();

    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
})