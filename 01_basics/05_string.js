const name = "shubham";
const repoCount = 50;

// console.log(name + repoCount + " Value");  // Not recommended

// console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('Shubham');
// console.log(gameName[0]); // S
// console.log(gameName.__proto__); // {}

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('b'));



const newString = gameName.substring(0, 4);
console.log(newString);  // Shubh

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // Shubh



const newString1 = " shubham     ";
console.log(newString1.trim()); // shubham

const url = "https://shubham.com/shubham%20verma";
console.log(url.replace('%20', '-')); //https://shubham.com/shubhamverma

console.log(url.includes('shub'));  // true

console.log(gameName.split('-'));