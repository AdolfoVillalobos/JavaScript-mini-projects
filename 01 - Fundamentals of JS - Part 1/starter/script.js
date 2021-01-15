/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Adolf";
console.log(firstName);


let myFirstJob = "Programmer";
let myLastJob = "Teacher";

console.log(myFirstJob); console.log(myLastJob);
*/

/*
let jsIsFun = true;
console.log(jsIsFun);
console.log(typeof jsIsFun);

jsIsFun = "YES!";

console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

console.log(typeof null);
*/

// let age = 38;
// age = 31;

// const birthYear = 1991;
// //birthYear = 1990;

// const job;

// Falsy values: 0, "", undefined, null, NaN

// const age = "18";

// if (age === 18) console.log("Just became an adult (strict)");
// if (age == 18) console.log("Just became an adult (loose)");

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//     console.log("Cool! 23 is an amazing number");
// } else if (favourite == 7) {
//     console.log("7 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7")
// }


// if (favourite != 23) console.log("Why not 23?");

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sara is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// const isTired = true;
// console.log(hasDriversLicense || hasGoodVision || isTired);


// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sara is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }


const age = 23;
const drink = age >= 18 ? "wine" : "water";

console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);