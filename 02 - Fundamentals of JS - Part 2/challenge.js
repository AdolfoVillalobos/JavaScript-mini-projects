"use strict";

// const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// const checkWinner = (avgDolphins, avgKoalas) => {
//     console.log(avgDolphins, avgKoalas);
//     if (avgDolphins > avgKoalas && avgDolphins > 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgDolphins < avgKoalas && avgDolphins * 2 < avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log("No one wins");
//     }
// }

// Data 1

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 59);

// checkWinner(avgDolphins, avgKoalas);

// // Data 2

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// checkWinner(avgDolphins, avgKoalas);

// Challenge 2:

// const calcTip = (bill) => (bill <= 300 && bill >= 50) ? bill * .15 : bill * .2;
// const bills = [125, 555, 44];
// const tips = bills.map(calcTip);
// const totals = bills.map((num, idx) => num + tips[idx]);

// console.log(bills);
// console.log(tips);
// console.log(totals);

// Challenge 3:

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 100,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / (this.height ** 2);
//         return this.BMI.toFixed(2);
//     }
// }

// console.log(john.calcBMI());
// mark.calcBMI();

// if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}´s BMI (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI}!).`);
// } else if (john.BMI < mark.BMI) {
//     console.log(`${mark.fullName}´s BMI (${mark.BMI.toFixed(2)}) is higher than ${john.fullName} (${john.BMI.toFixed(2)}!).`);
// } else {
//     console.log("Both win!");
// }

// Challenge

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) =>
  bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill;
const calcAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  sum = sum / array.length;
  return sum;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(calcAverage(totals));
