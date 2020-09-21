function WRequest() {
    var loc = document.getElementById("location");
    var long = document.getElementById("long");
    var lati = document.getElementById("lati");
    var temp = document.getElementById("temp");
    var humidity = document.getElementById("humidity");
    var description = document.getElementById("desc");

    var select = document.getElementById("states").value;
    loc.innerHTML = "Selected State is " + select;
    console.log(select);
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${select}&appid=d05c1cf90a5133faa1ede98df3d1c5af`);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            lati.innerHTML = "Selected location latitude is " + data.coord.lat;
            long.innerHTML = "Selected location longitude is " + data.coord.lon;
            temp.innerHTML = "Temperature of " + select + " is " + data.main.temp;
            humidity.innerHTML = "Humidity of " + select + " is " + data.main.humidity;
            description.innerHTML = "Description of " + select + " is " + data.weather[0].description;
        } else {
            console.log("error");
        }
    };

    request.send();
}

function W1Request() {
    var loc = document.getElementById("location1");
    var long = document.getElementById("long1");
    var lati = document.getElementById("lati1");
    var temp = document.getElementById("temp1");
    var humidity = document.getElementById("humidity1");
    var description = document.getElementById("desc1");

    var select = document.getElementById("states1").value;
    loc.innerHTML = "Selected Country is " + select;
    console.log(select);
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${select}&appid=d05c1cf90a5133faa1ede98df3d1c5af`);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            console.log(data);
            lati.innerHTML = "Selected location latitude is " + data.coord.lat;
            long.innerHTML = "Selected location longitude is " + data.coord.lon;
            temp.innerHTML = "Temperature of " + select + " is " + data.main.temp;
            humidity.innerHTML = "Humidity of " + select + " is " + data.main.humidity;
            description.innerHTML = "Description of " + select + " is " + data.weather[0].description;
        } else {
            console.log("error");
        }
    };
    request.send();
}
