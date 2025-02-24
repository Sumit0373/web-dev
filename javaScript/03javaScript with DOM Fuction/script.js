// this can use to select element by id;
let firstElement = document.getElementById("head1");
console.log(firstElement); // this can give me the  element



// tagName properties give the name of any tag where you use 

console.log(firstElement.tagName); // give h1 heading 


let elem = document.querySelector(".adiv");
console.dir(elem);

//inner text return all text and children nodes and it can also change the content 
console.log("innerText Give only the text content of the tag");
console.dir(elem.innerText);
//  elem.innerText="change to new content using inner div"; //try it chnange whole content of the screen

console.log("innerHTML it can give tag as well as the text both");
console.log(elem.innerHTML);   

// practice set 1 , take a h2 tag with hello java script and with help js appned apana   college

let ap= document.querySelector("h2");
 ap.innerText = ap.innerText+"from apana college";





 //pracitce second Create a 3 div with common class 

 let divs = document.querySelectorAll(".box");
 console.dir(divs);   
 
 // by using array to print div
 for(let div of divs){
    console.log(div);
 }
 console.log("try to change the content in div");
 //or we can change the value of div here by 

 let len=divs.length;
 for(let i =0 ; i<len ; i++){
    divs[i].innerText=`this is a new div of ${i+1}`;
 }

             
 

// get attribute is used to return  the attribute of the tag ..................
let attri=document.querySelector("div");
console.log(attri);
console.log(attri.getAttribute("class")); //this give adiv attribute of the class of fruit div
  
// set attrinbute is use to set the value of  the any attriute 
// if you want to change the vlaue of div  adiv to new_div you can do by this way

attri.setAttribute("class","newDiv"); //it can change the adiv to newDiv;
let i = document.querySelector("div");
console.log(i.getAttribute("class"));// this can give newdiv adiv removed

// style in js we can access and change the value of style
 let newD = document.querySelector(".box");
 newD.style.backgroundColor= "red";








 // Adding something in the tree so we can do it by this document.createElement("div");
 
 let btn = document.createElement("button");
 btn.innerText="click me!";
 console.log(btn);
// if you want to add new button at end use append it's 
//first accesss the div and than add the button at the end of the div
let addButton = document.querySelector(".newDiv");

addButton.append(btn);// adding button at end of div content
//addButton.prepend(btn) ; // top of div inside div;
//addButton.before(btn); // top out side the div;
//addButton.after(btn); // Add at the end of the div ,outside div






// to delete some thing use remove 

let rem= document.querySelector("#deleteme");
rem.remove();

