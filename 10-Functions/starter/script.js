'use strict';

//

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

h();
f();
console.dir(f);

// Example 2

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, 1000 * wait);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// // Lesson 7

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// (function () {
//   console.log('This will never run again!');
//   const isPrivate = 23;
// })();

// (() => console.log('Never more'))();

// // Lesson 6

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(`${name} booked a seat on ${this.airline}
//         flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Adolfo Villalobos');
// lufthansa.book(635, 'John Smith');

// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// book.call(swiss, 58, 'George Cooper');
// console.log(swiss);

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);
// console.log(swiss);

// // Bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Steven Williams');
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas KK');
// bookEW23('Martha Cooper');
// console.log(eurowings);

// // With event listenrs

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(200));

// const addIVA = value => addTax(0.17, value);
// console.log(addIVA(200));

// // Lesson 5

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');

// greeterHey('Adolfo');

// ///

// const greet2 = greeting => name => console.log(`${greeting} ${name}`);

// greet2('Hey')('Adolfo');

// // Lesson 4

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('Hi 5!');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Adolfo', 'Adam'].forEach(high5);
// Lesson 3

// // Lesson 2

// const flight = 'LH234';
// const adolfo = {
//   name: 'Adolfo Villalobos',
//   passport: 1234123413,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 1234123413) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, adolfo);

// console.log(flight);
// console.log(adolfo);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(adolfo);
// console.log(adolfo);
// checkIn(flight, adolfo);

// // Lesson 1

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 5);
// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 100);
