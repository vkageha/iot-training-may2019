//function definition

function sayHello() {
  console.log("Hello Paul");
}

sayHello();
// sayHello();
// sayHello();
// sayHello();

//Function expression

const sayHi = function() {
  console.log("Hi Paul");
};

sayHi();

//
function loopArrays(array) {
  for (let item of array) {
    console.log(item);
  }
}

loopArrays(["Eve", "Charles", "John", "Ann"]);
loopArrays([1, 2, 3]);

function subtract(number1, number2) {
  return number1 + number2;
}
let addnums = subtract(12, 23);
console.log(addnums);
console.log(subtract(12.3, 10));

const sleep = () => {
  //args
  //this keyword in arrow functions
  console.log("Please sleep");
};
sleep();

function multiply(a = 1, b = 1) {
  return a * b;
}

console.log(multiply(3,3));
