let search = document.querySelector(".search input");
 let searchBtn = document.querySelector(".search button");


 searchBtn.addEventListener("click" , async (evt)=>{
    evt.preventDefault();
    let city = search.value;
    city = city.toLowerCase();
     let cordinate = `https://geocode.maps.co/search?q=${city}&api_key=672eecc8cf311130537691oda7d5436`;
     let fetchCodinate = await fetch(cordinate); //fethching the cordinate
     let fetchCodianteData = await fetchCodinate.json(); //converting this jason file 
    localStorage.setItem("city",fetchCodianteData[0].display_name); //stroing at local storage
    localStorage.setItem("cityLatitude",fetchCodianteData[0].lat);
    localStorage.setItem("cityLongitude",fetchCodianteData[0].lon);
     window.location.href = `Weatherdata.html`;
 });



 (async()=>{
    






 })()