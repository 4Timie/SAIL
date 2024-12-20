let myFirstName = "Timilehin"
const myLastName = "Ojo"

// console.log(myFirstName);

// console.log(myLastName); 

let myFullName = myFirstName + myLastName;

// console.log(myFullName);

let firstNumber = 10;
let secondNumber = 2;

let differenceBetweenTheTwo = firstNumber - secondNumber

// console.log(differenceBetweenTheTwo);

let comp = firstNumber >= secondNumber;

// console.log(comp);

const firstOne = "Bayo";
const secondOne = "Tope";

if(typeof firstOne === "string" && typeof secondOne === "string")
    console.log("They are the same type")
else (
    console.log("There is an error")
);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// console.log(numbers);

console.log(numbers.indexOf(2));

// methods in JS 
// shift
// pop
// unshift
// push
// splice
// concat
// indexOf
// firstIndexof
// lastIndexof 

numbers.splice(6,3,2,2);

// console.log(numbers);

sayMyAge()


// function sayMyAge() {
//     console.log("My age is 80")
// }

// const sayMyName = (name) => {
//     console.log(`my name is: ${name} and I am ${age} years old`)
// }

//HOISTING 

//null is a primitive data typeof. when you return (typeof null), it brings object, not error, beccause null is a 