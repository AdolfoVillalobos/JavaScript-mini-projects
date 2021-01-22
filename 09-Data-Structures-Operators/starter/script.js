'use strict';

const weekdays = ['mon', ' tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:30',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with 
    ${ing1}, ${ing2} and ${ing3}.`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Lesson 15 : Strings 3

// console.log('a+very+nice+string'.split('+'));
// console.log('Adolfo Villalobos'.split(' '));

// const [firstName, lastName] = 'Adolfo Villalobos'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const arr = name.split(' ');
//   const arrUpper = [];
//   for (const n of arr) {
//     arrUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(arrUpper.join(' '));
// };

// const passenger = 'adolfo manuel villalobos vega';
// capitalizeName(passenger);

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.length);
// console.log(message.padStart(25, '+').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(1387419837));
// console.log(maskCreditCard('1983274183740'));

// // Repeat

// const message2 = 'Bad weather... All departures Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// // Lesson 14: Strings 2
// const airline = 'TAP Air Portugal';

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// const passenger = 'aDoLF';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails

// const emails = 'hello@adolf.io';
// const loginEmails = 'Hello@Adolf.io \n';

// const lowerEmail = loginEmails.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normEmail = loginEmails.toLowerCase().trim();
// console.log(emails === normEmail);

// // Replacing

// const priceGB = '288,97E';
// const priceUS = priceGB.replace('E', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 3. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// // Booleans

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase().trim();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board!');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// Lesson 13: Strings 1

// const arline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

// console.log(airline.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 9));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat :(');
//   } else {
//     console.log('You got lucky :))');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// Lesson 12:

// Data Sources:
/// . 1. Program itself
/// . 2. From UI
/// . 3. External source: API or database.

// We use data structures to collect data.

// Lesson 11 : Maps 2

// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try Again!'],
// ]);
// console.log(question);

// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = 3;
// console.log(question.get(answer === question.get('correct')));
// // Convert map to array

// console.log([...question]);

// LEsson 10 : Maps

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('closed', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// // Lesson 9 : sets
// const ordersSet = new Set([
//   'Risotto',
//   'Pizza',
//   'Pasta',
//   'Pizza',
//   'Pasta',
//   'Pasta',
// ]);

// console.log(new Set('Adolfo'));
// console.log(ordersSet);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Pasta'));

// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// ordersSet.delete('Risotto');
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //Example

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Lesson 8:

// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property values

// const values = Object.values(hours);
// console.log(values);

// for (const [key, { open, close }] of Object.entries(hours)) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

// // Lesson 7: Optional chaining
// console.log(restaurant?.hours.mon?.open);
// console.log(restaurant?.hours.fri?.open);

// // const days = ['mon', ' tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// // for (const day of days) {
// //   const open = restaurant.hours[day]?.open ?? 'closed';
// //   console.log(`On ${day} we open at ${open}.`);
// // }

// // Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// // Arrays

// const users = []; //= [{ name: 'Jonas', email: 'hello@jonas' }];
// console.log(users[0]?.name ?? 'User array empty');

// // Lesson 6: For-of.

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}.`);
// }
// Lesson 5: Short Circuiting

// console.log('--------- OR ----');
// // Boolean operators can use ANY data type, return ANY data type,
// // short-circuiting.
// console.log(3 || 'Adolfo');
// console.log('' || 'Adolfo');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 0;
// // const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// // Nullish values and undefined, not Falsy values.
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);
// console.log('----- AND ------');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'jonas' && 0);

// // Practical example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // Lesson 4: Rest operator

// // 1) Destructuring
// // SPREAD : right hand side
// const arr = [1, 2, ...[3, 4]];

// //Rest operator: Left Hand side
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // Only 1 Rest Operator at the end.
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// /// Objects

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// // 2) Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
//   return sum;
// };
// add(2, 3);
// add(2, 3, 6, 8);
// add(5, 6, 23, 12, 34, 1, 134, 13, 4, 1);

// const x = [23, 5, 7, 10];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'cheese');
// restaurant.orderPizza('mushroom');

// /// Lesson 3

// const arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(arr, badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(arr, newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Join 2 arrays

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables in general: arrays, maps, strings, sets.

// const str = 'Adolfo';
// const letters = [...str, ' ', 'V.'];
// console.log(...str);
// console.log(letters);

// Destructuring is not the same as Spread Operator.
// Destructuring allows creating new keys and accessing specific existing keys
// Spread operator access all the data in object.

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Adolfo';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////
/// Lesson 2
////////////////////2
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
// });

// restaurant.orderDelivery({
//   time: '20:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// // console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 15 };

// ({ a, b } = obj);
// // console.log(a, b);

// // Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

/////////////////////
/// Lesson 1
////////////////////
// // Array Destructuring

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested destructuring
// const nested = [2, 3, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values

// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);
