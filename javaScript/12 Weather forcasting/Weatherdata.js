const cityName = localStorage.getItem("city");      // Retrieves city name
const cityLatitude = localStorage.getItem("cityLatitude"); // Retrieves latitude
const cityLongitude = localStorage.getItem("cityLongitude"); // Retrieves longitude 

let city = document.querySelector("#cityName");
city.innerText=cityName;

let data = document.querySelectorAll(".tempData");
data[3].innerText = cityLatitude;
data[4].innerText = cityLongitude;

(async()=>{
let weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${cityLongitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`;
  let responce = await fetch(weatherApi);
  let weatherData = await responce.json();
  document.querySelector(".temp").innerText=weatherData.current.temperature_2m+" °C";
  data[0].innerText=weatherData.current.temperature_2m+" °C";
  data[2].innerText=weatherData.current.wind_speed_10m+" K/hr";
   data[1].innerText=weatherData.current.relative_humidity_2m+" %";
})();