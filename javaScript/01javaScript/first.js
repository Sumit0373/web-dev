// let new method to declare a variable you can not declare more than one and local scope only you can updade  .
let fullName="Sumit singh";
let age=20;
let score=97;

// var is a old method and it's has global scope it can declare may this with same variable name you can redeclear.
var num=89;
var num=98;

// you can non updare the vale .
const gen='M';

// object in javaScript is use to store the colletion of varible like this and it alway use to declare with const 
const student={
    studentName:"Sumit singh",
    studentAge:20,
    studentCgpa:8.3,
};

console.log(student.studentCgpa);
console.log(student["studentCgpa"]);
console.log(fullName);
console.log(age);
console.log(gen);
console.log("Hello javascipt");
console.log("welcome javascrip");

// Arithmatic operator
let a=5;
let b=8;
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);

//unary operator
//++a
//a++

//Assignment operator =+,-=,/=

// comprasion ==,!=,===,!== 
//logical operator && || !
// condetional operator if else;

// input form the user 
let n = prompt("Enter the number ");
console.log("Your Enter number is =>",n);


//loop in js  print all even number between 0 to 100
for(let i=0 ; i<=100  ; i++){
   if(i%2===0){
    console.log(i);
   }
}
// templet literal  and it's symbol is `` 

let i=5;
let j=6;
console.log("The sum of i and j is",i+j);
let output=`the sum of i and j is ${i+j}`; // templet literal
console.log(output);
  

// string method 

let str="sumit";
let str2="SUMIT";
console.log(str.toUpperCase());
console.log(str2.toLowerCase());

// task  

let fullname = prompt("Enter the name");
     let nameLength = fullname.length;
     let result  = fullname.concat(nameLength);
     result = '@'+result;
     console.log(result);