// *See first nodeScript.js file
// here we learn about module.export

const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const G= 9.81;
const pi = 3.14;

//here we create a objet to pass all the function in the another file of js which is present in same diactory

let obj = {
    sum : sum,
    mul : mul,
    G : G,
    pi : pi
};

//sending this object to the file and in other file we recive the informaion using requred

module.exports.sub = (a,b) => a-b; // module.export is an object so here we can add sub;
module.exports = obj; //exported

/* you can also do like that 

module.exports = {
    sum : sum,
    mul : mul,
    G : G,
    pi : pi
};

if you don't want to create a object you can do this 
            module.exports.sum = (a,b) => a+b;
module.exports.mul = (a,b) => a*b;
module.exports.G= 9.81;
module.exports.pi = 3.14;


you can also do like that 
exports.mul = (a,b) => a*b; this is correct 

module.exports = 5; this is correct
 export =5 this is worng it treat like a variable

*/


//Now we will learn export the multiple file in js or direectories



