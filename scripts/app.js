const searchForm = document.querySelector('.weather-search');
const details = document.querySelector('.weather-details');

const updateCity = async (city) => {
    const cityKey = await getCityKey(city);
    const weather = await getWeather(cityKey);
    
    return { city: city, weather: weather };
}

const updateUI = (data) => {
    console.log(data);
    //switch para imagem svg
    //cloud-rain
    //cloud
    //wind
    //sun
    //cloud-lightning
    let icon;

    switch(data.weather[0].WeatherText) {
        case "Sunny":
            icon = "sun";
            break;
        case "Partly sunny":
            icon = "sun";
            break;
        case "Cloudy":
            icon = "cloud";
            break;
        case "Showers":
            icon = "cloud-rain";
            break;
        case "Rain":
            icon = "cloud-rain";
            break;
        case "Windy":
            icon = "wind";
            break;
        default:
            icon = "cloud";
    }

    details.innerHTML = `        
        <i data-feather=${icon}></i>
        <h5>${data.city}</h5>     
        <div class="weather-condition">           
                <span>${data.weather[0].WeatherText}</span>
                <span>${data.weather[0].Temperature.Metric.Value}&deg;C</span>            
        </div>
    `;
    feather.replace();
    details.classList.remove('hide');
}

searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    const city = searchForm.location.value.trim();
    searchForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})

