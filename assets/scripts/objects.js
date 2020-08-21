// object literal notation
let person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
};

delete person.age;
// never assign undefined for any value
// person.age = undefined;
// use null to reset value
// person.age = null;
person.isAdmin = true;

console.log(person);
