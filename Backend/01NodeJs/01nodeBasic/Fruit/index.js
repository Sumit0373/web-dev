const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");
let arr = [apple , banana, orange];

/*
Here this fruit which contain multiple js file if you want to transfer all the data in fruit file 
than we have to create a index.js it a main file of javaScript import all data in this and 
send this data to different diactory 

index.js is a main file of js like a other programming language main function is starting function 
like wise index.js is main of js */

module.exports = arr;