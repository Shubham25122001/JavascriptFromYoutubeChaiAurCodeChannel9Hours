// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName = "codinglook";
let anotherName = myYoutubeName;
anotherName = "chagethename";

console.log(myYoutubeName);
console.log(anotherName);



let userOne = {
    email: "shubham123@gmail.com",
    password: "**********"
}

let userTwo = userOne;

userTwo.email = "rohit123@gmail.com";

console.log(userOne);