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
const updatedUser = {...hamzaUser, school: "fazaia", uni: "RISE College"}
console.table(updatedUser)
console.table(hamzaUser)