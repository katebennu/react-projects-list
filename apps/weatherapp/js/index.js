function output(url) {
    $.getJSON(url, function(json) {
        var name = "<h4>" + json.name + "</h4>";
        var text = "<h2>" + json.weather[0].main + "</h2>";
        var t = (json.main.temp - 273.15).toFixed(0);
        // if (document.getElementById("option1").checked == false) t = t * 1.8 + 32;
        var temp = "<h1>" + t + "&deg;C</h1>";
        var img = "<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>"
        $("#city").html(name);
        $("#temp").html(temp);
        $("#text").html(text);
        $("#img").html(img);
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

navigator.geolocation.getCurrentPosition(success, error, options);
