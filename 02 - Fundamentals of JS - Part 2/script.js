"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function logger() {
//     console.log("My name is Adolfo");
// }

// // calling / running / invoking function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// let juice = fruitProcessor(5, 0);
// console.log(juice)
// console.log(fruitProcessor(5, 10))

// function calcAge1(birthYear) {  // Function as Statement
//     return 2037 - birthYear;
// }

// console.log(calcAge1(1995));

// const calcAge2 = function (birthYear) { // Function as Expression
//     return 2037 - birthYear;
// }

// console.log(calcAge2(1995));

// const calcAge3 = birthYear => 2037 - birthYear;

// console.log(calcAge3(1995));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1987, "Adolfo"));
// console.log(yearsUntilRetirement(1995, "Adolfo"));

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// console.log(friends[2]);
// console.log(friends.length);

// friends[2] = "Jay";

// console.log(friends);

// const firstName = "Adolfo";
// const adolfo = [firstName, "Villalobos", 2030 - 1995, "data scientist", friends];

// console.log(adolfo);
// console.log(adolfo.length);

// // Excercise

// const calcAge = function (birthYear) {
//     return 2020 - birthYear;
// }

// const years = [1991, 1984, 2008, 2020];

// console.log(calcAge(years));

// const friends = ["Matias", "Constanza", "Frane", "Ignacio"];

// // Add element
// const newLength = friends.push("Felipe");
// console.log(friends);
// console.log(newLength);

// // Add at the begining
// friends.unshift("John");
// console.log(friends);

// // Remove element
// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Frane"));

// friends.push(23);
// console.log(friends.includes("Frane"));
// console.log(friends.includes("23"));
// console.log(friends.includes(23));

// const adolfo = {
//     firstName: "Adolfo",
//     lastName: "Villalobos",
//     birthYear: 1995,
//     job: "data scientist",
//     friends: ["Matias", "Peter", "Steven"],
//     hasDriversLicense: false,

//     calcAge: function () {
//         this.age = 2020 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old
//                 ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"}
//                 driver´s licence.`
//     }

// };

// console.log(adolfo.lastName);
// console.log(adolfo.getSummary())

const adolfoArray = [
  "Adolfo",
  "Villalobos",
  25,
  "data scientist",
  ["matias", "ignacio", "constanza", "frane"],
];

for (let i = 0; i < adolfoArray.length; i++) {
  console.log(adolfoArray[i], typeof adolfoArray[i]);
}
