let search = document.querySelector(".search input");
 let searchBtn = document.querySelector(".search button");
 let loadingBar = document.querySelector(".lodingBar");


 searchBtn.addEventListener("click" , async (evt)=>{

    evt.preventDefault();
    loadingBar.style.width = "20%"
    let city = search.value;
    city = city.toLowerCase();
    loadingBar.style.width = "20%"
     let cordinate = `https://geocode.maps.co/search?q=${city}&api_key=672eecc8cf311130537691oda7d5436`;
     let fetchCodinate = await fetch(cordinate); //fethching the cordinate
     loadingBar.style.width = "60%"
     let fetchCodianteData = await fetchCodinate.json(); //converting this jason file 
    localStorage.setItem("city",fetchCodianteData[0].display_name); //stroing at local storage
    loadingBar.style.width = "90%"
    localStorage.setItem("cityLatitude",fetchCodianteData[0].lat);
    localStorage.setItem("cityLongitude",fetchCodianteData[0].lon);
     window.location.href = `Weatherdata.html`;
     loadingBar.style.width = "100%"
 });


 
//alway recent search 
 (async()=>{
    let cityLatitude = localStorage.getItem("cityLatitude");
    let cityLongitude = localStorage.getItem("cityLongitude");
    let weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${cityLongitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`;
    let responce = await fetch(weatherApi);
    let weatherData = await responce.json();
    document.querySelector(".firstSearch  div p").innerText=weatherData.current.temperature_2m+" °C";
          let city=localStorage.getItem("city");
          document.querySelector(".firstSearch  h1").innerText="";
          for(let i of city){
            if(i===',' || i===' '|| i==='(')break;
            document.querySelector(".firstSearch  h1").innerText += i; 
          }


            // second city
            cityLatitude=19.0760;
            cityLongitude=72.8777;
             weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${cityLongitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`;
               responce = await fetch(weatherApi);
               weatherData = await responce.json();
             
             console.log(weatherData);
             document.querySelector(".secondSearch div p").innerText=weatherData.current.temperature_2m+" °C";

          // third city
          cityLatitude=28.7041;
            cityLongitude=77.1025;
             weatherApi = `https://api.open-meteo.com/v1/forecast?latitude=${cityLatitude}&longitude=${cityLongitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`;
               responce = await fetch(weatherApi);
               weatherData = await responce.json();
             
             console.log(weatherData);
             document.querySelector(".thirdSearch div p").innerText=weatherData.current.temperature_2m+" °C";   
             
             news();
 })()

 async function news (){
  let error = document.querySelectorAll(".card");
let url =`https://newsapi.org/v2/everything?q=weather&language=en&apiKey=efaddb22b2104a91888cc66348868482`;
let responce= await fetch(url);
let result =await responce.json();
console.log(result["articles"][0]); // give news at zero index;
console.log(result.articles[1].description);
console.log(result.articles[1].author);
 for(let i=1 ; i<=8; i++){
//if data were removed loop run this if statement
if(result.articles[i].title==="[Removed]"){
 error[i-1].querySelector("img").src=result.articles[i+10].urlToImage;
  error[i-1].querySelector(`.card-title${i}`).innerText=result.articles[i+11].source.name;
  error[i-1].querySelector(`.card-text${i}`).innerText=result.articles[i+11].title;
 error[i-1].querySelector(`.card-button${i}`).href=result.articles[i+11].url;
}
else{                             // here i am adding 11 because some news not work form 1 to 8
document.querySelector(`.card${i} img`).src=result.articles[i+1].urlToImage;
document.querySelector(`.card-title${i}`).innerText=result.articles[i+1].source.name;
document.querySelector(`.card-text${i}`).innerText=result.articles[i+1].title;
document.querySelector(`.card-button${i}`).href=result.articles[i+1].url;
} 

}

}