// Challenge 1 and 2

// let markMass = 95;
// let johnMass = 85;
// let markHeight = 1.88;
// let johnHeight = 1.76;

// const markBMI = markMass / (markHeight ** 2);
// const johnBMI = johnMass / (johnHeight ** 2);

// const markHigherBMI = markBMI > johnBMI;

// if (markHigherBMI) {
//     console.log(`Mark´s BMI (${markBMI}) is higher than John's (${johnBMI})`);
// } else {
//     console.log(`John´s BMI (${johnBMI}) is higher than Marks's (${markBMI})`);
// }


// Challenge 3


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// const minimumScore = 100;

// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy!");
// } else if (scoreDolphins < scoreKoalas) {
//     console.log("Koalas win the trophy!");
// } else if (scoreDolphins == scoreKoalas) {
//     console.log("Both win the trophy");
// }

// Bonus 1

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// const minimumScore = 100;

// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
//     console.log("Dolphins win the trophy!");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= minimumScore) {
//     console.log("Koalas win the trophy!");
// } else if (scoreDolphins == scoreKoalas) {
//     console.log("Both win the trophy");
// }

// Bonus 2

// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// const minimumScore = 100;

// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= minimumScore) {
//     console.log("Dolphins win the trophy!");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= minimumScore) {
//     console.log("Koalas win the trophy!");
// } else if (scoreDolphins == scoreKoalas && scoreDolphins >= minimumScore) {
//     console.log("Both win the trophy");
// } else {
//     console.log("No winner :(")
// }




// Challenge 3


const bill = 430;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip} and the total was ${bill + tip}`);