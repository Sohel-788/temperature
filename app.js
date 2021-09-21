const API_KEY = `5ce28e1a9921f7430dbe2bf32ab54977`;
const searchTemperature = () => {
        const city = document.getElementById('cityName');
        const cityText = city.value;
        city.value = '';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${API_KEY}&units=metric`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => displayWether(data))
    }
    //set weather info 
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayWether = (temperature) => {
    console.log(temperature);
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    //set weather icon
    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('imgIcon');
    imgIcon.setAttribute('src', url);
}