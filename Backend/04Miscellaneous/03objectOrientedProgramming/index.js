// when you see this console page on the you see 1,2,3,4 and
//  prototype inside prototype you can see clearly so many method like pop, push and so on ...
let arr = [1,2,3,4];
console.log(arr);

// each object has a prototype and it same for all for example every array object has prototype which is
// same for all array 


// we are adding extra function in an array
arr.sum = ()=>{
    console.log("I am a function");
}
//when you console the arr so you will see three thing arr values , sum function , prototype

console.log(arr);
let arr2= [5,6,7,8];

arr2.sum = ()=>{
    console.log("I am a function");
};



 // if you compare the  sum function on both arr you will find the both function is differen 

 if(arr.sum === arr2.sum) console.log(" sum is same for all 2 array object => true");
 else console.log("sum is same for all 2 array object => False");
// here both the sum function are different because they are store in different array ...
//ans is false

// prototype is same for two different fucntion or method.
// toUpperCase this is a prototype method of sting object it is is same for two different object..
  
if("abc".toUpperCase === "xyz".toUpperCase) console.log("string prototype is true");
else console.log("String prototype is false"); 
// ans is true



 console.log("Factory Function");

// Factory Function  type 1

// this is use to create an object 
function PersonMaker(name ,age){
    const person = {
        name : name,
        age : age,
        talk(){
            console.log(`Hi My name is ${this.name}`);
        }
    }
    return person;
}

// now we will can create an multiple object by using this

let obj1 = PersonMaker("Sumit",21);
let obj2 = PersonMaker("Ashutosh",21);
let obj3= PersonMaker("Divyansh" , 21);

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj1.talk());

// here is talk function is common for all the other function but still every object have own 
// copy of the talk function it is not like a prototype all are sharing the same funciton so this
// is quite older method to create an object..


if(obj1.talk===obj2.talk) console.log("both object sharing the same funtion talk funciton => true ");
else  console.log("both object sharing the same funtion talk funciton => false ");



console.log();
console.log();
console.log();
console.log("Constructor");

// type 2 Constructor
/*

New operator

The new operator lets developers create an instance of a user-defined object type or of one of
the built-in object types that has a constructor function.


*/


// Now we create a object with the help of constructor

//constructor is special type of function Which does'n return any thing and start with captial letter


function Person (name , age){
 this.name = name;
 this.age = age;
}
// here we create a protoype for the consturctor function of talk (createing a prototype for constructor);
Person.prototype.talk = () => {
    console.log(`My name is ${this.name}`)
};


// this is way we can create an object by new operator...
let p1 = new Person("Abhi",23);
let p2 = new Person ("karan",31);
console.log(p1.name+" "+p2.name);

/*
What is the work of the new keyword here

when you write a new keyword

1: Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.
2: p1 and p2 object prototype point to the constructor prototype .. 
3: p1 and p2 object send to the constructor by this help of this we can point to p1 and p2 object  ...
4 : all share share function because talk function inside object prototype ..
*/


// here talk function share with same variable to all........
if(p1.talk=== p2.talk) console.log("this is same ");
else console.log("this is not same");

// this give same because it show same prototype present in constructor

// when you print p1 show prototype inside prototype object( talk , constructor, prototype)
console.log(p1);




// type 3 classes .........

/*
Classes

Classes are a template for creating objects

The constructor method is a special method of a class for creating and initializing an
object instance of that class.
*/
console.log("Class");
class Person2{
constructor(name ,age){
    this.name = name;
    this.age = age;
}
  talk() {
    console.log(`My name is ${this.name}`);
};

}

let c1 = new Person2("Karan",25);
let c2 = new Person2("Arjun" ,25);
console.log(c1.name + " "+ c1.age);

//All object sharing same talk function 
if(c1.talk === c2.talk) console.log("this is same ");
else console.log("this is not same");

console.log(c1);