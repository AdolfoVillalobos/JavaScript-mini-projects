console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`Product ${product} (${quantity}) was added to the cart.`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice as price, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`Product ${product} (${quantity}) was added to the cart.`);
}
