
console.log("                  object            ");
// creating a object in java
console.log("Learning object and class in javaScript");
const Student ={
    fullName : "Sumit Singh",
    mark:34,
    printMark : function () {
  console.log("Mark =>", this.mark);
    }
}
// object contain the fullName , mark and method and also prototype
// this prototype contain some perdefine method that is use to perform some task toString and so on

//creating a own prototype with method

console.log("                  prototype            ");
 const Employee = {  //employee is an order
    calculateTax () {
    console.log("10% tax");
    }
 }

 const sumit ={
    Salary : 250000,
    mark :20
 }

//  make employee prototype which contain the method calculateTax;

sumit.__proto__ = Employee; // we are linking employee object with sumit as prototype
console.log(sumit.calculateTax);

// if object and prototype has same method than object method is used..










console.log("                  introduction of class           ");
// introduction of class

// declaring a class

class ToyotaCar{
    // constructor are used to set the value of object during the runtime ..
    // if you not create a constuctor than compiler automatically create a by defautl constructor ..
    // when ever you create an object constructor automatically call
    // constructor are also used to set the value of the variable
    // here we try to set the value of milage
    constructor (milage){
      console.log("constructor automatically call when forturner object created");
          this.milage = milage; // this us used to set milage by using constructor;
    }

   start(){
      console.log("Start");
   }
   end(){
      console.log("End");
   }
   setbrand(brand){
      this.brand = brand;
   }
}
let fortuner = new  ToyotaCar(10); // if you not pass 10 here as milage than constructor set milage is undefine

fortuner.setbrand("fortuner"); // it is used set the value of the brand
console.log(fortuner.brand);  // it used to set the value of the brand  = fortuner;
console.log(fortuner.milage);








 // Learning Inheritance in javaScript 
    console.log("                  Inheritance                   ");
    // aquaring the property of the parent class is know as inheritance 
        // and using keyword extends 

        class Person{
         eat(){
             console.log("eating");
         }
         sleep(){
            console.log("sleeping");
         }
         work(){
            console.log("Do nothing");
         }
        }
    
         // creating a engineering class which accquired all the property of the person class
        class Engineering  extends Person{
        // here we doing method overriding 
        // if we have two method of the same name than child method calls first;
         work(){
            console.log("Solve problem and do inovation "); 
         }

         // if you are creating the consturctor of this child class than u should also called the 
         // constructor of parent class otherwise it will show an error;

         constructor(){
            //if you not call super class than it will show an error
            super(); // invoke the parent class
            super.eat(); // this keyword used to call any method of the parent call ;
            console.log("child consturctor of inheritance called ");
         }
         // if you want to access any method of parent you can do like that 
          

        }

         // creatiig a object of Engineering class
           let sumitSingh = new Engineering();

          // now we can access all the property and method of the person class
            sumitSingh.sleep();
            sumitSingh.eat();
            sumitSingh.work(); 











            console.log("                  practice set 1              ");
            data="secrete data";

            // create a class of user and and it have property name and email;
            class User{
               constructor (name , email){
                  this.name= name;
                  this.email=email;
               }
               viewData(){
               console.log(data);
               }
            }

            //creting a object
            let Student1 = new User("Sumit" , "sks@gmail.com");
            Student1.viewData();

            
            console.log("                  practice set 2              ");

       // create admin class which inherite the user  and contain extra method edit data 

       class Admin extends User{
         constructor(name, email){
             super(name,email);
         }
         editData(){
           data="new data";
         }
       }

       let newObj = new Admin("sumit" , "pk@gmail.com");













       console.log("                 try catch block             ");
       a =10;
       b=5;
       console.log("a = ",a);
       console.log("b = ",b);
       try{
       console.log("a+b = ",a+c); // this is an error but it can stop below two code try and catch block
       }
       catch(exe){
         console.log(exe); // it can handle error and run other code .
       }
       console.log("a-b = ",a-b);
       console.log("a*b = ",a*b);