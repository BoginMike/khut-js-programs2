//Write Hello World
console.log("Hello World");


//Add 2 Numbers
var n = 6; 
var m = 22;
var s =  n + m;
console.log(s);

//Find a Square Root of a Number
var x = 48;
y = Math.sqrt(x);
console.log(y);

//Find the Area of a Triangle
var base = 10;
var height = 40;
var area = (base * height) /2;
console.log(area);

//Swap 2 Numbers
const prompt = require('prompt-sync')();

let a = prompt('Enter Input a');
let b = prompt('Enter Input b');
/*var a = 30;
var b = 25;*/
console.log("original a is", a);
console.log("original b is", b);
a = a + b;
b = a - b;
a = a - b;
console.log("now a is", a);
console.log("now b is", b);

