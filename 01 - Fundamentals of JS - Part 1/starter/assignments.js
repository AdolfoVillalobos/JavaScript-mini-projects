// Values and Variables

const country = "Chile";
const continent = "South America";
let population = 18;


// console.log("I live in ", country);
// console.log("a country located in ", continent);
// console.log("with a population of %d million", population);

// Data types

const isIsland = false;
let language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);


// Lecture: let, const and var

language = "spanish";
// console.log(language);

// Lecture: Basic Operators

let halfPopulation = population / 2;
console.log(halfPopulation)

population++;

console.log(population);

let finlandPopulation = 6;

console.log(population > finlandPopulation);
console.log(population > 33);


//let description = country + " is in " + continent + ", and its " + population + " million people speak " + language;
//console.log(description);


// Lecture Strings and templates:

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);


// Lecture: If/Else

// if (population > 33) {
//     console.log(`${country}´s population is above average`);
// } else {
//     console.log(`${country}´s population is below average`);
// }

// Lecture: Equality operators

// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));


// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No boders");
// }

// Lecture: Logical Operators

// if (language === "english" && population < 55 && !isIsland) {
//     console.log(`${country} is a good place for Sarah to live`);
// } else {
//     console.log("Sarah should keep looking...");
// }

// switch (language) {
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers!");
//         break;
//     case "spanish":
//         console.log("2nd place in the number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("number 4");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language tooo :D");
// }


console.log(`${country}´s population is ${population > 33 ? "above" : "below"} average`);