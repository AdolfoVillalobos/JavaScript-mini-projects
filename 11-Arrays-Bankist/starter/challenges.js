// Challenge 3
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// p1

dogs.forEach(dog => (dog.recommendedFood = dog.weight ** 0.75 * 28));

console.log(dogs);

//p2

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

if (dogSarah.curFood >= dogSarah.recommendedFood * 1.1) {
  console.log('Too much food');
} else if (dogSarah.curFood <= dogSarah.recommendedFood * 0.9) {
  console.log('Too little');
}

// P3

const ownersEatTooMuch = dogs
  .filter(d => d.curFood >= d.recommendedFood * 1.1)
  .map(d => d.owners);
const ownersEatTooLittle = dogs
  .filter(d => d.curFood <= d.recommendedFood * 0.9)
  .map(d => d.owners);

// P4
console.log(ownersEatTooMuch.flat().join(' and ') + `'s dogs eat too much`);
console.log(
  ownersEatTooLittle.flat().join(' and ') + `'s dogs eat too little!`
);

// P5

console.log(dogs.some(d => d.recommendedFood === d.curFood));

// P6

console.log(
  dogs.some(
    d =>
      d.curFood <= d.recommendedFood * 1.1 &&
      d.curFood >= d.recommendedFood * 0.9
  )
);

// P7
console.log(
  dogs.filter(
    d =>
      d.curFood <= d.recommendedFood * 1.1 &&
      d.curFood >= d.recommendedFood * 0.9
  )
);

// P8

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
// // Challenge 2

// const calcAverageHumanAge = function (ages) {
//   const averageHumanAge = ages
//     .map(age => {
//       if (age <= 2) {
//         return 2 * age;
//       } else {
//         return 16 + age * 4;
//       }
//     })
//     .filter(age => age >= 18)
//     .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
//   return averageHumanAge;
// };

// const t1 = [5, 2, 4, 1, 15, 8, 3];
// const t2 = [16, 6, 10, 5, 6, 1, 4];

// console.log(calcAverageHumanAge(t1));
// console.log(calcAverageHumanAge(t2));

// Challenge 1
// const checkDogs = function (dogsJulia, dogsKate) {
//   const djCopy = dogsJulia.slice();
//   djCopy.splice(0, 1);
//   djCopy.splice(-2);
//   const arr = djCopy.concat(dogsKate);

//   arr.forEach((dog, i) => {
//     const puppy =
//       dog >= 3 ? `an adult, and is ${dog} years old` : 'still a puppy';
//     console.log(`Dog number ${i + 1} is ${puppy}`);
//   });
// };

// const dj1 = [3, 5, 2, 12, 7];
// const dk1 = [4, 1, 15, 8, 3];
// const dj2 = [9, 16, 6, 8, 3];
// const dk2 = [10, 5, 6, 1, 4];

// console.log('----Test Data 1----');
// checkDogs(dj1, dk1);
// console.log('----Test Data 2----');
// checkDogs(dj2, dk2);
