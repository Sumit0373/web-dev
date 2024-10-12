let btn = document.createElement("button");
 btn.innerText="click me!";
 console.log(btn);
 btn.style.backgroundColor="red";
 btn.style.color="white";

 document.querySelector("body").prepend(btn); 


 // using js try to append this new class in paragraph

 let par = document.querySelector(".para");
par.setAttribute("class", "newClass");
 // if we apply one property other were removed so we can do its in different way
console.log(par.classList); // it can give all the class of tag
par.classList.add("para") // two class are joind by this ;
