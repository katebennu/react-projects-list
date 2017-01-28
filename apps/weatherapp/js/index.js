function setCity(city) {
    $("#city").html("<h4>" + city + "</h4>");
}

function setTemperature(temperature, cf) {
    var t = (temperature - 273.15).toFixed(0);
    if (cf == 'F') {
        t = (t * 1.8 + 32).toFixed(0);
    };
    $("#temp").html("<h1>" + t + "&deg;" + cf + "</h1>");
}

function setDescription(text) {
    $("#text").html("<h2>" + text + "</h2>");
}

function setImg(img) {
    $("#img").html("<img src='http://openweathermap.org/img/w/" + img + ".png'>");
}

function output(url) {
    $.getJSON(url, function(json) {
        setCity(json.name);
        setTemperature(json.main.temp, 'C');
        setDescription(json.weather[0].main);
        setImg(json.weather[0].icon);

        $('#switchC').click(function() {
            setTemperature(json.main.temp, 'C');
        });
        $('#switchF').click(function() {
            setTemperature(json.main.temp, 'F');
        });
    });
}

var options = {
    enableHighAccuracy: true,
    maximumAge: 100,
    timeout: 60000
};

function success(position) {
    var lat = (position.coords.latitude).toFixed(10);
    var lon = (position.coords.longitude).toFixed(10);
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=87703abe8c78fd2ec0117e25f494fa76";
    output(url);

}

function error(err) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=87703abe8c78fd2ec0117e25f494fa76";
    output(url);
}

function getCoords() {
    navigator.geolocation.getCurrentPosition(success, error, options);
}

getCoords();
