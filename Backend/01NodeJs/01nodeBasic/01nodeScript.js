/* Node provide run time enviroment to javascript
  and it is for server side programming 
  Node.js is not language or library or framework

  Node Repel => Read , Evaluate , Print , Drop ;

*/

// Now we can directly run this js file with the help of node you can open git bash and 
// move to the diactory where this file exist and run command (node fileName);


for(let i=0 ; i<5 ; i++){
    console.log("Hello World");
}


//console.log(process) => this object give info about current node.js process

//console.log(process.argv) => this return an array containing the command line argument passed when the node.js was launched
// we can pass agrv from git bash


// if we can not pass any argurmnt it print the folder and path and node path
console.log(process.argv);


// passing argv like this => (node fileName argv1 argv2 agv2 )so on

console.log("PASSING THE ARGV ");

// IN LOOP WE CAN SKIP THE TWO DEFAULT ARGV

let n = process.argv;
for(let i=2 ; i< n.length ; i++){
    console.log("this is the argument "+(i-1)+" "+n[i]);
}
console.log();
console.log();
//module and require
// here we use (require) to catch the export coming from another file..
console.log("Module & Require");

const mathFun  = require("./02maths");
console.log(mathFun);
console.log(mathFun.sum(2,2));
console.log(mathFun.mul(2,5));
console.log(mathFun.pi);


console.log();
console.log();
console.log("Importing multiple file form different folder");
//Here we importing all file form the fruit folder
const multipleFile = require("./Fruit");
console.log(multipleFile);
// here in array there were three object.
console.log(multipleFile[0].name+" "+multipleFile[0].color);
console.log(multipleFile[1].name+" "+multipleFile[1].color);
console.log(multipleFile[2].name+" "+multipleFile[2].color);


console.log("EXCUTED Sucessfully");