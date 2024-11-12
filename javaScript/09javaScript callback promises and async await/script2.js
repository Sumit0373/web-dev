/* Promise chain */

function AsynFunction(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("data");
        resolve("success");
      },3000); 
    })
}

//this is success than we can handled by....




 //******uncomment******
 //let p1=AsynFunction();
// p1.then((res) => {
//     console.log(res);
// });



/* if there is two asynchronous function if we call the  
          
 p1.then((res) => {
    console.log(res);
});   


 p2.then((res) => {
    console.log(res);
});  
so both function run simultanously and give same ouptut at same time; */


function AsynFunction2(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("data2");
        resolve("success");
      },3000); 
    })
}

//******uncomment******
// let p2 = AsynFunction2();
// p2.then((res)=>{
//     console.log(res);
// })    // so both data and success msg come togeather



// to avoid this use promise chain inside then other then; to avoid call backhell


AsynFunction().then((res)=>{
console.log(res);
AsynFunction2().then((res)=>{
    console.log(res);
    AsynFunction().then((res)=>{
        console.log(res);
    })
})
});


//Another example of promise chain

function getData(dataid){
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            console.log("data=>",dataid);
             resolve("success2");
          }, 10000);
    })
  }


// // Acctual promise chain use by developer

getData(1).then((res)=>{
    return getData(2); //ye wala then return karega 2 jispe ham wapas pe then laga denge
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
})