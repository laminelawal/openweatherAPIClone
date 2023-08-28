
// TEMP DATA API CONTAINERS
let apiKey = "383cb14d5884d28703457a69bdecabf6";
let XMLUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let input = document.querySelector(".search-wrap input");
let searcBtn = document.querySelector(".search-wrap button");
const cityname = document.querySelector(".city-name");
let tempnum = document.querySelector(".temp-num");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind-speed");
let windDeg = document.querySelector(".wind-deg");
let updateImg = document.querySelector(".temperature img");
// let getLocation = document.querySelector(".differentLocation i");



window.onload = ()=>{
// FACENDO DOMANDA DELLA API
async function checkWeather(city){
    // ABBREVIANDO LA API URL
    let request = await fetch (XMLUrl + input.value + "&appid=" + apiKey);
    var res  = await request.json();

        if(input.value  == ""){
            input.placeholder ="EMPTY TEXT";
        }
        if(input.value != ""){
            let citynamedata = res.name;
            cityname.innerHTML =citynamedata;
            input.value="";
            tempnum.innerHTML = Math.round(res.main.temp) + "°C";
            humidity.innerHTML = `Humidity: ${res.main.humidity}%`;
            windSpeed.innerHTML = `${res.wind.speed}m/s S`;
            windDeg.innerHTML = `${res.wind.deg}Pa`;
            //UPDATE WEATHER STATUS IMAGE


        if(res.weather[0].main == "Clear"){
            updateImg.src = "/openWeatherClone_1/img/sun.png";
        }else if(res.weather[0].main == "Rain"){
            updateImg.src = "/openWeatherClone_1/img/heavy-rain.png";
        }else if(res.weather[0].main == "Clouds"){
            updateImg.src = "/openWeatherClone_1/img/cloudy.png";
        }else if(res.weather[0].main == "Snow"){
            updateImg.src = "/openWeatherClone_1/img/snow.png";
        }else if(res.weather[0].main == "Thunderstorm"){
            updateImg.src = "/openWeatherClone_1/img/thunderstorm.png";
        }else if(res.weather[0].main == "Haze"){
            updateImg.src = "/openWeatherClone_1/img/drizzle.png";
        }
            //CREARE LA LOCAL STORAGE
            window.localStorage.setItem("temp-name", cityname.innerHTML);
            window.localStorage.setItem("temp-num", res.main.temp)
            window.localStorage.setItem("humidity",humidity.innerHTML)
            window.localStorage.setItem("wind-speed",windSpeed.innerHTML)
            window.localStorage.setItem("wind-deg",windDeg.innerHTML)
            window.localStorage.setItem("updateImg", updateImg.src)
        }
    
}

searcBtn.addEventListener("click",(e)=>{
    checkWeather(input.value);
})



//RICEVERE DATI DELLA LOCAL STORAGE
if(window.localStorage.getItem("temp-name")){
    cityname.innerHTML = window.localStorage.getItem("temp-name");
}
if(window.localStorage.getItem("temp-num")){
    tempnum.innerHTML = Math.round(window.localStorage.getItem("temp-num")) + "°C";
}
if(window.localStorage.getItem("humidity")){
    humidity.innerHTML = window.localStorage.getItem("humidity") + "%";
}
if(window.localStorage.getItem("humidity")){
    windSpeed.innerHTML = window.localStorage.getItem("wind-speed") + "%";
}
if(window.localStorage.getItem("humidity")){
    windDeg.innerHTML = window.localStorage.getItem("wind-deg") + "%";
}
if(window.localStorage.getItem("updateImg")){
    updateImg.src = window.localStorage.getItem("updateImg") ;
}


//LOCATION BY LOADING

// getLocation.onclick = ()=>{
//     navigator.geolocation.getCurrentPosition(succes,error)

//     function succes(pos){
//         res.coord.lat = pos.coords.latitude;
//         res.coord.lon = pos.coords.longitude;
//     }
//     function error(){
//         alert("Posizione non trovata!")
//     }
// };

} // FINE BARRA ONLOAD