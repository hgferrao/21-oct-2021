//  Exporting module
console.log('Exporting module');
const a = 10;
const cart = [];
export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 500;
const totalQuantity = 40;

export { totalPrice, totalQuantity };

// default export
export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
}
