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