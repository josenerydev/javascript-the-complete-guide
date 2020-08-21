const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "blue";
movieList.style.display = "block";

// object literal notation
let person = {
  "first name": "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hi there!");
  },
  1.5: "hello",
};

delete person.age;
// never assign undefined for any value
// person.age = undefined;
// use null to reset value
// person.age = null;
person.isAdmin = true;

console.log(person[1.5]);
console.log(person)
