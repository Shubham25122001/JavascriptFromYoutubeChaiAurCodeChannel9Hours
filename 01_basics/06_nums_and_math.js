const score = 400;
// console.log(score); // 400

const balance = new Number(100); 
// console.log(balance); // [Number: 100]

// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.0

const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(5));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));



//+++++++++++++++++++++++ Math +++++++++++++++


console.log(Math); // object 
console.log(Math.abs(-4)); // 4
console.log(Math.round(543.845)); // 544
console.log(Math.ceil(4.8)); // 4
console.log(Math.floor(4.9)); // 5
console.log(Math.min(10, 20, 5, 6)); // 5
console.log(Math.max(4, 7, 5, 9, 15)); //15
console.log(Math.random()*100 + 1); // 11.2955544845458
console.log(Math.random()*100 + 1); // 50.0515545544545

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min)) + min);   // to generate the randome number between min to max 