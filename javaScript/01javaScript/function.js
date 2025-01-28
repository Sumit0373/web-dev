alert("Hello world");

function myFunction(){
    console.log("This is a funciton call ");
    console.log("this is funciton");
}
myFunction();


// sum funciton 

function sum(a,b){
    console.log(a+b);
}
sum(10,10);

// return keyword in fuction 

function sub(a,b){
    return (a-b);
}

console.log(sub(100,50));

let arrowSum=(a,b)=>{
    console.log(a+b);
}

arrowSum(10,20);

// practice question 
// function that take a string as input and return the number of vowel 

function returnVowel(a){
    let count=0;
    for(let i=0 ; i<a.length ; i++){
        let b= a.charAt(i);
        if(b==='a' || b==='e' || b==='i' || b==='o' || b==='u') {
                  count++;
        }
    }
    return count;
}

 console.log(returnVowel("sumit"));

 let countVowel = (a)=>{
    let count=0;
    for(let i=0 ; i<a.length ; i++){
        let b= a.charAt(i);
        if(b==='a' || b==='e' || b==='i' || b==='o' || b==='u') {
                  count++;
        }
    }
    return count;
}
console.log(countVowel("stoabc"));

//for each loop
let arr = ["pune","goa","delhi"];

//(this return the element , this return the index) if we write only one field (elem) it can return element
arr.forEach((element ,index)=> {
    console.log(element , index);
});
//for each not used for string ;

// for given array return the square of each value using for each loop

let num =[10,3,5,8,3];

num.forEach(element => {
    console.log(element*element);
});


//filter in javascript
let mark = [ 87,93,64,99,86,110];
// filter out mark greater than 90
let newMark = mark.filter((val)=>{
     return val>90;
});
console.log(` the mark is greater than 90 is ${newMark}`);


// TAKE A NUMBER FROM THE USER AND CREATER A ARRAY FROM 1 TO N ;
let inputArray =[];
let input = prompt("Enter a number");

for(let i=1 ; i<=input ; i++){
  inputArray.push(i);
}
console.log(inputArray);
 // use reduce method to find the sum of array and product
 //sum
  let output = inputArray.reduce ((result,current)=>{
    console.log(`the sum is ${result}`);
     return result+current;
  });
  console.log(output);

  //product
  let output2= inputArray.reduce ((result,current)=>{
    return result*current;
 });
 console.log(output2);