
var cityCurrent = { };

var getCurrentWeather = function (zip) {

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "&appid=d0f4ff36139913f4de0b35a854f44600";

    fetch(apiUrl)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                displayWeather(data, zip);
            });
        } else {
            alert("Error: " + response.statusText);
        }
    })
        .catch(function (error) {
        alert("Unable to connect to Open Weather");
    });
};

var cityNameEl = document.getElementById("cityName");
var tempEl = document.getElementById("temp");



var searchHandler = function(event) {
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


//////////////
var displayWeather = function (currentWeather) {



};
//////////////



getCurrentWeather(78748);

