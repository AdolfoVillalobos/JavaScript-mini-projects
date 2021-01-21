'use strict';
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Adolf', 'Diego'],
};

const marriedJessica = { ...jessica };
marriedJessica.family.push('Ana Paula');
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// const jessicaCopy = Object.assign({}, jessica);
// jessicaCopy.lastName = 'Villalobos';
// console.log('Before marriage', jessica);
// console.log('After marriage', jessicaCopy);
