var locationCoordinates = [];


var getLocationWeather = function (lat, lon) {
    var newApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=&appid=d0f4ff36139913f4de0b35a854f44600`;

    fetch(newApiUrl).then(function (newRespone) {
    if (newRespone.ok) {
        newRespone.json().then(function (newData) {
        console.log(newData);
        });
        }
    }
)};

var getCoordinates = function (cityName, stateCode) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${stateCode}&appid=d0f4ff36139913f4de0b35a854f44600`;

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
            var lat = data.coord.lat;
            console.log(lat); 
            var lon = data.coord.lon;
            console.log(lon);
            getLocationWeather(lat, lon);
        })
      } else {
        alert("Error: " + response.statusText);
      }
    })
        .catch(function (error) {
        alert("Unable to connect to Open Weather");
        });

};

//console.log(locationCoordinates);











////////////////////
// var uvIndexEl = document.getElementById("uv-index");
// uvIndexEl.textContent = currentWeather.
/////////////////////////





var searchHandler = function (event) {
  event.preventDefualt();

  var searchInputEl = document.getElementById("search");
  console.log(searchInputEl);

  var searchInput = searchInputEl.value.trim();
  console.log(searchInput);

  if (searchInput) {
    getCurrentWeather(searchInput);
    searchInputEl.value = "";
  } else {
    alert("please enter a city.");
  }
};

var displayWeather = function (currentWeather, location) {
  console.log(currentWeather, location);

  var cityNameEl = document.getElementById("cityName");
  cityNameEl.textContent = currentWeather.name;

  var tempEl = document.getElementById("temp");
  tempEl.textContent = "Temp: " + currentWeather.main.temp;

  var humidityEl = document.getElementById("humidity");
  humidityEl.textContent = "Humidity: " + currentWeather.main.humidity;

  var windSpeedEl = document.getElementById("wind");
  windSpeedEl.textContent = "Wind Speed: " + currentWeather.wind.speed;
};
////////////



getCoordinates("Austin, TX")







    
//getLocationWeather();


