
var submit = document.getElementById("submit");

//GETS UV INDEX
var getLocationUV = function (lat, lon) {
  var newApiUrl = `http://api.openweathermap.org/data/2.5/uvi?appid=d0f4ff36139913f4de0b35a854f44600&lat=${lat}&lon=${lon}`;

  fetch(newApiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayUV(data);
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
        displayForcast(data);
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
            var currentWeather = data
            console.log(currentWeather);
            displayCurrent(currentWeather);

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

// FILLS TEXT CURRENT CONTENT
var displayCurrent = function (currentWeather) {
  console.log(currentWeather);

  var cityNameEl = document.getElementById("cityName");
  cityNameEl.textContent = currentWeather.name;

  var tempEl = document.getElementById("temp");
  tempEl.textContent = "Temp: " + currentWeather.main.temp;

  var humidityEl = document.getElementById("humidity");
  humidityEl.textContent = "Humidity: " + currentWeather.main.humidity;

  var windSpeedEl = document.getElementById("wind");
  windSpeedEl.textContent = "Wind Speed: " + currentWeather.wind.speed;
};

// // FILLS TEXT CURRENT CONTENT 
var displayUV = function (data) {
  console.log("this is the UV", data);
  var uvIndexEl = document.getElementById("uv-index");
  uvIndexEl.textContent = "UV Index: " + data.value;
};

// DISPLAYS FORCAST
var displayForcast = function (data) {
  console.log(data);
  console.log("this is the forcast", data);

  // THEN I am presented with a 5-day forecast that displays the date, 
  // an icon representation of weather conditions, the temperature, and 
  // the humidity
  
  var oneDay = document.createElement("div");
  oneDay.textContent = data.list[0].weather[0].description;
  var Day1DateEl = document.createElement("h5");
  Day1DateEl.textContent = data.list[0].dt_txt;
  var Day1listEL = document.createElement("ul");
  console.log(data.list[0].main.temp)
  var day1ListItemTemp = "Temp: " + data.list[0].main.temp;
  var day1Card = document.getElementById("day1");
  day1Card.appendChild(Day1DateEl);
  day1Card.appendChild(Day1listEL);
  Day1listEL.innerHTML = "Temp: " + day1ListItemTemp
 
  day1Card.appendChild(oneDay);
  console.log(oneDay);


  var twoDay = document.createElement("div");
  twoDay.textContent = data.list[8].weather[0].description;
  var Day2DateEl = document.createElement("h5");
  Day2DateEl.textContent = data.list[8].dt_txt;
  var Day2listEL = document.createElement("ul");
  var day2ListItemTemp = "Temp: "+ data.list[8].main.temp;
  var day2Card = document.getElementById("day2");
  day2Card.appendChild(Day2DateEl);
  day2Card.appendChild(Day2listEL);
  Day2listEL.innerHTML = day2ListItemTemp;

  day2Card.appendChild(twoDay);
  console.log(twoDay);

  var threeDay = document.createElement("div");
  threeDay.textContent = data.list[16].weather[0].description;
  var Day3DateEl = document.createElement("h5");
  Day3DateEl.textContent = data.list[16].dt_txt;
  var Day3listEL = document.createElement("ul");
  var day3ListItemTemp = "Temp: "+ data.list[16].main.temp;
  var day3Card = document.getElementById("day3");
  day3Card.appendChild(Day3DateEl);
  day3Card.appendChild(Day3listEL);
  Day3listEL.innerHTML = day3ListItemTemp;
  
  day3Card.appendChild(threeDay);
  console.log(threeDay);
  
  var fourDay = document.createElement("div");
  fourDay.textContent = data.list[24].weather[0].description;
  var Day4DateEl = document.createElement("h5");
  Day4DateEl.textContent = data.list[24].dt_txt;
  var Day4listEL = document.createElement("ul");
  var day4ListItemTemp = "Temp: "+ data.list[24].main.temp;
  var day4Card = document.getElementById("day4");
  day4Card.appendChild(Day4DateEl);
  day4Card.appendChild(Day4listEL);
  Day4listEL.innerHTML = day4ListItemTemp;

  day4Card.appendChild(fourDay);
  console.log(fourDay);
  
  var fiveDay = document.createElement("div");
  fiveDay.textContent = data.list[32].weather[0].description;
  var Day5DateEl = document.createElement("h5");
  Day5DateEl.textContent = data.list[32].dt_txt;
  var Day5listEL = document.createElement("ul");
  var day5ListItemTemp = "Temp: "+ data.list[32].main.temp;
  var day5Card = document.getElementById("day5");
  day5Card.appendChild(Day5DateEl);
  day5Card.appendChild(Day5listEL);
  Day5listEL.innerHTML = day5ListItemTemp;
  
  day5Card.appendChild(fiveDay);
  console.log(fiveDay);

};

submit.addEventListener("submit", searchEventHandler);

// getCoordinates("Austin, TX");
