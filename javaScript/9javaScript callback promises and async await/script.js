// synchronous and Asynchrounous

/* synchounous means the code runs in a particular sequence of instrustion give in the program . 
Each instruction waits for the previous instruction to complete it's execution. */

/* Asynchronous => Due to synchronous programming sometimes imp instructions get blocked due to 
some previous instructions, which causeds a delay in the UI. Asynchronous code execution allows 
to execute next instructions immediately and doesn't block the flow. */


// synchronous programing behaviour it's can print in a flow how are you synchronously 
console.log("How");
console.log("Are");
console.log("You");



// asynchrounous programing behaviour
console.log("Task 1");
setTimeout(() => {
    console.log("this task take 2sec to execute so task 3 and 4 execute before task 2 ");
  console.log("Task 2");// this settimeout delay the execution for 5 sec so program not wait it execute the task3 and 4 and than 2;
}, 2000);
console.log("Task 3");
console.log("Task 4");



// callbacks function
/* call backs fuction are those function which pass into another function */

//callback synchronous 
function sum(a ,b){
    console.log(a+b);
}

function calculate(a,b,sumCallback){
    sumCallback(8,8);
    sumCallback(a,b);
}

// calling calculte function
calculate(2,4,sum);



//callback asynchronous
const hello = ()=>{
    console.log("asychronous fuction execute at last");
}   

setTimeout(hello,3000);


// this is also same
setTimeout(()=>{
    console.log("asychronous fuction execute at last 2");
},3000)




// callback Hell 

/* callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
this style of programming becomes difficut to understand & manage. */

// write a function which take data and return the data after delay
function getData1(dataid){
  setTimeout(() => {
    console.log("data=>",dataid);
  }, 3000);
}

//if you want to print and find 3 data  , data 1 and data 2 and data 3 after 6 sec delay how you can do that.

// first you can do like that 

getData1(0); // but here all three data come after 3 sec together not like that first data 1 come and after 3 sec data 2 come and so on
getData1(-1);
getData1(-2);


//second way you can create callback fucntion and inside callback function another callback function
function getData2(dataid , getDataByCallback){
    setTimeout(() => {
      console.log("data=>",dataid);
      if(getDataByCallback) getDataByCallback();
    }, 4000);
  }


//this is callback hell (inside callback another callback function present.)
getData2(1, () => {
    console.log("getting data 2");
    getData2(2,()=>{
        console.log("getting data 3"); 
        getData2(3);
    });
});
// promises come to avoid callback hell ......






// promises

/* Promise is for "eventual"completion of task . It is an object in JS
    it is a solution to callback hell.

    ** syntex of promise

    let promise = new Promise((resolve,reject)=>{})

        two handler resolve and reject and it is provided by js....
        

        three state of promise  1: resolve (fulfilld)
                                2: pending
                                3: reject      */



    
  // creating a promise  with no state 
  let promise = new Promise((resolve,reject)=>{
    //pending
  })
  console.log(promise);  // this can give promise pending state on console window 





  // creating a promise  with success this resolve and reject created by js by it's own 
  let promise2 = new Promise((resolve,reject)=>{
      resolve("SUCCESS");
  })
  console.log(promise2);  // this can give promise fulfilled or success state on console window 






  
  // creating a promise  with error this reject ; 
  let promise3 = new Promise((resolve,reject)=>{
   reject("this can be rejected");
})
console.log(promise3);  // this can give promise pending state on console window 




// In development mostly api give promises we only handle the pomise;

function getData3 (dataid  , getDataByCallback) {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Data => ",dataid);
            resolve("success");
            if(getDataByCallback) getDataByCallback();  
        },16000);
    });
}
console.log(getData3()); // return the promise as pending state if resolve("Succes") was not return after console.log

let result = getData3(666);
console.log(result);   // this will give promise and after 6 sec it's will show the state is complete 






// how to use the promise we generally not create a promise we mainly handle the promise when it's give by an api


/* .then() promise use when the you have success fulfilled quaries
  
**syntex of then
promise.then((res) => {...});


    .chatch() promise use when you have reject quaries
       
    syntex of catch
    promise.catch((err)=>{....});      */
 console.log("then and chatch in promise");     
const getPromise =()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am a promise");
      //  resolve("success");
        reject("error");  
    });
}

 let checkSuccess = getPromise();
// checkSuccess.then((res)=>{
//     console.log("Promise fulfilled",res);
// })

checkSuccess.catch((err)=>{
    console.log("rejected",err);
})


     