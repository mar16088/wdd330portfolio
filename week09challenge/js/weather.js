// Global variables
const loc = document.getElementById('location');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const weatherIcon = document.getElementById('weatherIcon');
const tempF = document.getElementById('tempF');
const tempC = document.getElementById('tempC');
const tempHigh = document.getElementById('tempHigh');
const tempLow = document.getElementById('tempLow');
const city = document.getElementById('city');
const country = document.getElementById('country');
const windSpeed = document.getElementById('windSpeed');
const barometer = document.getElementById('barometer');
const humidity = document.getElementById('humidity');
const visibility = document.getElementById('visibility');

const status = document.getElementById('status');

// Weather Object
const weather = {};

// Api key
const key = "9d6fbabf33bf746143c497b6e1a5abe1";

// Geolocation browser support check
if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, displayError)
} else {
    status.innerHTML = "Browser doesn't support Geolocation";
}

// Functions
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function displayError(error) {
    status.innerHTML = `${error.message}`;
}

function getWeather(latitude, longitude) {
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${key}`;
    console.log(api);
    fetch(api)
    .then(function(response){
        if(response.ok) {
            return response.json();
        } throw new ERROR('Response not ok');
    })
    .then(function (data) {
        console.log('Json object from getWeather function:');
        console.log(data);
        weather.city = data.name;
        weather.country = data.sys.country;
        weather.temp = data.main.temp;
        weather.iconId = data.weather[0].icon;
        weather.description = data.weather[0].description;
        weather.lat = data.coord.lat;
        weather.long = data.coord.lon;
        weather.feelsLike = data.main.feels_like;
        weather.tempHigh = data.main.temp_max;
        weather.tempLow = data.main.temp_low;
        weather.humidity = data.main.humidity;
        weather.pressure = data.main.pressure;
        weather.visibility = data.visibility;
        weather.windDeg = data.wind.deg;
        weather.windSpeed = data.wind.speed;
    })
    .then(function(){
        displayWeather();
    });
}

// Temperature conversions
function convertToCelsius() {
    let celsius = weather.temp - 273;
    return Math.floor(celsius);
}
function convertToFahrenheit(celsius) {
    return Math.floor(celsius * 9/5 + 32);
}

function displayWeather() {
    loc.innerHTML = `${weather.city}, ${weather.country}`;
    latitude.innerHTML = `${weather.lat}`;
    longitude.innerHTML = `${weather.long}`;
    weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather.iconId}@2x.png" alt="weather icon">`;
    
    let celsius = convertToCelsius();
    let fahrenheit = convertToFahrenheit(celsius);
    tempF.innerHTML = `${fahrenheit}F°`;
    tempC.innerHTML = `${celsius}C°`;

    barometer.innerHTML = `${weather.pressure}hPa`;
    humidity.innerHTML = `${weather.humidity}%`;
    visibility.innerHTML = formatVisibility() + "km";
    windSpeed.innerHTML = `${weather.windSpeed}m/s`
    windDial(weather.windDeg);
}

function formatVisibility() {
    return weather.visibility / 1000;
}

function windDial(degrees){
    let dial = document.getElementById("dial");
    degrees = parseInt(degrees);
    dial.style.transform = "rotate(" + degrees + "deg)";

    let direction = document.getElementById("windDirection");

    if ((degrees >= 337.5 || (degrees >= 0 && degrees <= 22.5))) {
        direction.innerHTML = "N";
    }
    else if (degrees > 22.5 && degrees <= 67.5) {
        direction.innerHTML = "NE";
    }
    else if (degrees > 67.5 && degrees <= 112.5) {
        direction.innerHTML = "E";
    }
    else if (degrees > 112.5 && degrees <= 157.5) {
        direction.innerHTML = "SE";
    }
    else if (degrees > 157.5 && degrees <= 202.5) {
        direction.innerHTML = "S";
    }
    else if (degrees > 202.5 && degrees <= 247.5) {
        direction.innerHTML = "SW";
    }
    else if (degrees > 247.5 && degrees <= 292.5) {
        direction.innerHTML = "W";
    }
    else if (degrees > 292.5 && degrees < 337.5) {
        direction.innerHTML = "NW";
    }

    switch (direction){
        case "North":
        case "N":
        dial.setAttribute("class", "n");
        break;
        case "NE":
        case "NNE":
        case "ENE":
        dial.setAttribute("class", "ne");
        break;
        case "NW":
        case "NNW":
        case "WNW":
        dial.setAttribute("class", "nw");
        break;
        case "South":
        case "S":
        dial.setAttribute("class", "s");
        break;
        case "SE":
        case "SSE":
        case "ESE":
        dial.setAttribute("class", "se");
        break;
        case "SW":
        case "SSW":
        case "WSW":
        dial.setAttribute("class", "sw");
        break;
        case "East":
        case "E":
        dial.setAttribute("class", "e");
        break;
        case "West":
        case "W":
        dial.setAttribute("class", "w");
        break;
   }
}