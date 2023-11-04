// Primitive

// 7 types : String, Number, Boolean, null, undefined, Sybol, BigInt

// Javascript is a dynamic typed

// Reference Type(Non Primitive) 
// Array, Objects, Functions

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false;
const outsideTemp = null;
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId); // false

const bigNumber = 46546465464646n;
// console.log(bigNumber, typeof bigNumber);





//*********Reference type *******/
// Array, Objects, Functions

const heros = ["sahrukh", "salman", "akshay"];

let myObj = {
    name: "hitesh",
    age: 22,
}


function myFunction() {
    console.log("Hello world");
}

myFunction();