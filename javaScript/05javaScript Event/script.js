//change in the state of an object is know as event
console.log("Hello Event in js");

let btn1 = document.querySelector("#btn1");
  btn1.onclick = () => {
    console.log("button was clicked")
    let a=5; 
    console.log(++a);
  }

  //Event object contain all the information in objet like type,target , 
  // Better than inline js but you can only run one fuction
  let btn2 = document.querySelector("#btn2");
  btn2.onclick = (evt) => {
   console.log(evt);
   console.log(evt.type);
   console.log(evt.target);
  }


  //Event listner can used to run more than one fuction 

  let btn3 = document.querySelector("#btn3");
  btn3.addEventListener("click",() => {
    console.log("Button was click and - Handler 1");
  });


  const sumit =()=>{
    console.log("Button was clicked - handler 3")
  }; 
  btn3.addEventListener("click",sumit);                                                           

  btn3.addEventListener("click",()=>{
    console.log("Button was clicked - handler 4")
  });


  // IF YOU WANT TO DELETE THE EVENT HANDELER USE THIS TYPE
  btn3.removeEventListener("click", sumit);



  // paractice button on screen which change the screen into darkmode
  //switch between two state is know as togge button dark-to-light or ligth-to-dark;

  let changeMode = document.querySelector("#mode");
  let body = document.querySelector("body");
  let currentMode="light";

//   changeMode.addEventListener("click",()=> {
//     if(currentMode=="light"){
//     currentMode="dark";
//     body.style.backgroundColor="black";
//   }
//   else{
//     currentMode="light";
//     body.style.backgroundColor="white";
//   }
// });


// change mode using css 


changeMode.addEventListener("click",() => {
  if(currentMode==="light"){
     currentMode="black";
        body.classList.remove("light");
     body.classList.add("dark");
  }
   else{
    currentMode="light";
    body.classList.remove("dark");
    body.classList.add("light");
   }
});