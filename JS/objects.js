// Regular objects.
const user = {
  name_: "Shaheem",
  age: 22,
  married: false,
  officialDocuments: { CNIC_Number: "3520162974681454", validPassport: false },
  getInfo: function () {
    return user;
  },
};
// console.log(user.getInfo());

const obj = new Object();
obj.val1 = 21;
// console.log(obj.val1);

function Person(name_, age, maritalStatus) {
  this.name_ = name_;
  this.age = age;
  this.maritalStatus = maritalStatus;
}

const Shaheem = new Person("Shaheem", 22, "Single, To be married soon ;)");
// console.table(Shaheem);

// Classes are modern syntax for constructor functions.
class User {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  var1 = "test";
  var2 = "I Love cars";
  greet() {
    return `Hello! ${this.name}.`;
  }
}
const user1 = new User("Ibrahim", 12);
user1["car"] = ["Mercedes G-63", "BMW M5 CS"];

// To delete a key from an object.
delete user1["age"];

console.log(
  user1.greet(),
  user1?.var2,
  user1["age"],
  user1["car"],
  `User age: ${user1?.age}`
);

// Object Factory functions:
function createUser(name_, age) {
  return {
    name_,
    age,
    greet() {
      console.log(`Hello ${name_}!`);
    },
  };
}
const hamzaUser = createUser("Hamza", 21);
console.log(hamzaUser);

// Object.assign(), If properties are same it overwrites the first one by the latter.
const defaults = { theme: "light", notifications: true };
const userSettings = { theme: "dark" };
const settings = Object.assign({}, userSettings, defaults);
console.log(settings);

// Spread Operator
const updatedUser = { ...hamzaUser, school: "fazaia", uni: "RISE College" };
console.table(updatedUser);
console.table(hamzaUser);

const obj1 = {
  name_: "Hamza",
  greet: function () {
    console.log(`Hello ${this.name_}`);
  },
  getName: () => {
    console.log(obj1.name_);
  },
};
const greet = obj1.greet;
greet(); // Gives undefined as this loses its context because it depends on the function calling it.

const boundGreet = obj1.greet.bind(obj1);
boundGreet();

// Immutable objects. Value can't be changed
const user2 = {};
Object.defineProperty(user2, "secretKey", {
  value: "Your balance is $100B.",
  writable: false,
  enumerable: true,
  configurable: false,
});

user2.secretKey = "I've hacked your bank acc.";
// console.log(user2.secretKey);

// Object Iteration
for (const key in user1) {
  console.log(`${key} : ${user1[key]}`)
}

console.log(Object.keys(user1)); // ["name", "role", ...]
console.log(Object.values(user1)); // ["Alicia", "admin", ...]
console.log(Object.entries(user1)); // [["name", "Alicia"], ["role", "admin"], ...]


