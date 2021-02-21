// import { addToCart, price, tq } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing Module');

// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.price);

// import add, { cart } from './shoppingCart.js';

// add('pizza', 2);

// add('pizza', 2);
// add('pizza', 2);
// add('pizza', 2);

// console.log(cart);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`Product ${product} (${quantity}) was added to the cart.`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`Product ${product} (${quantity}) ordered from supplier.`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
