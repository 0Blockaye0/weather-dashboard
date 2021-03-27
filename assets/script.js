
var submit = document.getElementById("submit");

//GETS UV INDEX
var getLocationUV = function (lat, lon) {
  var newApiUrl = `http://api.openweathermap.org/data/2.5/uvi?appid=d0f4ff36139913f4de0b35a854f44600&lat=${lat}&lon=${lon}`;

  fetch(newApiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    }
  });
};

// GETS 5 DAY FORCAST
var getForcast = function (lat, lon) {
  var newApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=d0f4ff36139913f4de0b35a854f44600`;

  fetch(newApiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
      });
    }
  });
};

// GETS CITY COORDINATES AND CALLS OTHER API REQUESTS
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
          getLocationUV(lat, lon);
          getForcast(lat, lon);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to Open Weather");
    });
};

// HANDLES SEARCH EVENT
var searchEventHandler = function (event) {
  event.preventDefault();
  console.log("evnt handler is called");

  var searchInputEl = document.getElementById("search");
  console.log(searchInputEl);

  var searchInput = searchInputEl.value.trim();
  console.log(searchInput);

  if (searchInput) {
    getCoordinates(searchInput);
    searchInputEl.value = "";
  } else {
    alert("please enter a city and state like 'Austin,TX'");
  }
};

// CREATES AND APPEHNDS ELEMENTS
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

submit.addEventListener("submit", searchEventHandler);

// getCoordinates("Austin, TX");
