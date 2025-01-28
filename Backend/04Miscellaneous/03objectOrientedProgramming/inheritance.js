// Inheritance

// Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.


// this is a parent class
class Person{
    constructor(name , age){
        console.log("Parent class Constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is ${this.name}`);
    }
}

// this is the child class

class Student extends Person{
    constructor( name , age ,mark){
        console.log("Child class constructor is called");
        super(name,age); // parent class constructor is being called
        this.mark = mark;
    }
}
class Teacher extends Person{
    constructor( name , age ,subject){
        console.log("Child class constructor is called");
        super(name,age); // parent class constructor is being called
        this.subject = subject;
    }
}


// creating the object of student class 
let s1 = new Student("Sumit" ,21,100);
console.log(s1.name);
s1.talk();

// creating the object of the teacher class 
let t1 = new Teacher("Marufa", 25, "Biology" );
console.log(t1.name +" "+t1.age+" "+t1.subject);
console.log(t1);
// run by node inheritance.js