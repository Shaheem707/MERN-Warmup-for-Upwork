let name = "Shaheem";
// Let and const are not fully hoisted, they remain in the TDZ.
greet(name);
const test = 10;

// Following type of function is hoisted, Arrow Funcs are not.
function greet(name) {
  //   console.log(`Hi ${name}, How are you doing?`);
}

// These are function expressions and are not fully hoisted
const greet1 = function (name) {
  // console.log(`Hi ${name}, How are you doing?`);
};
greet1(name);

// Arrow functions
const greet2 = (name) => {
  // console.log(`Hi ${name}, How are you doing?`);
};
greet2(name);
const greet3 = (userName) => userName + " Awan";
// console.log(greet3("Kaka"));

// Anonymous Functions
setTimeout(() => {
  // console.log(`Tada ${name}`);
}, 0);
// setInterval(()=>{console.log(`Tada ${name}`)}, 2000)

// Named Function Expressions
const factorial = function calc(n) {
  return n === 0 ? 1 : n * calc(n - 1);
};

const res = factorial(5);
// console.log(res);

// IIFE
(function () {
  console.log("This is an IIFE");
})();

// Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age || 20;
  // console.log(this.name);
}
Person("Hamza");
const Shaheem = new Person("Shaheem", 21)
console.table([Shaheem.name, Shaheem.age]);

// Methods in objects, prototypes or classes
const obj = {
  greetObj: function (person_sName) {
    // console.log(`Person's name in the object: ${person_sName}`);
  },
};
obj.greetObj("Shaheem Awan");

// Async Functions:
async function asyncTest() {
  const response = await fetch("https://dummyjson.com/products");
  // console.log("Async Function Executed", printParameter);
  return response.json;
}
// asyncTest();

// Recursive Functions:
function factorial1(n) {
  return n <= 1 ? 1 : n * factorial1(n - 1);
}
// console.log(factorial1(10))

// Implicit return in Arrow function:
const double = num => num * 2;

// For double parameters:
const add = (a, b) => a + b;

// No parameter multiple statements in body:
const getRandom = () => {
  const num = Math.random();
  return num;
};
console.log(getRandom());

//Returning an Object Literal
const createUser = (name) => ({ name, active: true });

// Arrow functions can be nested:
const outer = (x) => (y) => x + y;
console.log(outer(2)(5));

// Getter and Setter Functions
const objj = {
  name_: "john",
  get nameofUser(){
    return this.name_;
  },
  set nameofUser(value){
    this.name_ = value;
  }
}
objj.nameofUser = "KAKa"
console.log(objj.name_);
