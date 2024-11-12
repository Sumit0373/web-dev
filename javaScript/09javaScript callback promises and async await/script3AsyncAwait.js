
// Async-Await  betten than promise 



/*  Async-Await 
  
     async function alway return a promise.

      syntex
        async function myFunction() {......}    


     Await pause the execution of it's surrounding async function until the promsie is setteld */


     //Async fuction alawys return a promise 
     async function hello(){
        
     }
     console.log(hello());     //you can see the console.log it's return a promise;



     // await stop all the execution until the execution of promise is setteled .
     // and await always work in async function ...


     function api(){
        return new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Weather data");
                resolve("success");
            },2000);
        });
     }

   //  now we call await 
     async function getWeatherData() {
        await api();
        await api();
        await api();  
        // you can call this api multiple time by using await keyword in async function

     }
     getWeatherData();



     // same example for get data

     function getData(dataid){
        return new Promise((resolve , reject) =>{
            setTimeout(() => {
                console.log("data=>",dataid);
                 resolve("success2");
              }, 2000);
        })
      }
    
async function gettingData(){
    await getData(1);
    await getData(2);
    await getData(3);
}
     
gettingData(); // calling the getting data funtion give intermix result with weather and data


async function gettingDataNewWay(){
    await api();
    await api();
    await api();  
    await getData(1);
    await getData(2);
    await getData(3);
}

gettingDataNewWay(); // This call call the await saprately;







/* you can observed every time you have to call the async fuction to activate
   so you can use 

    IIFE : Immediately Invoked Function Expression  it can only use for one time;

    it's can be declare with three type;

   1: (fuction(){
      })();

    2: (()=>{
        })();

    3: (async()=>{
        })(); */


// this can execute automatically without any call of async function....
      (  async () =>{
            await api();
            await api();
            await api();  
            await getData(1);
            await getData(2);
            await getData(3);
        })();