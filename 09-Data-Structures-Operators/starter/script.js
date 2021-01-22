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

// Lesson 8:

const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property values

const values = Object.values(hours);
console.log(values);

for (const [key, { open, close }] of Object.entries(hours)) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

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
