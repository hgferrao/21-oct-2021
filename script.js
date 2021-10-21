// Importing module

// import {
//   addToCart,
//   totalQuantity as quantity,
//   totalPrice as price,
// } from './shoppingCart.js';
console.log('Importing module');
// addToCart('bread', 10);
// console.log(quantity, price);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 15);
// console.log(ShoppingCart.totalQuantity);

import add from './shoppingCart.js';
add('pizza', 16);

// module pattern [Earlier]

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 250;
  const totalQuantity = 25;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('pizza', 10);
ShoppingCart2.addToCart('banana', 20);
console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost); // cannot acess it

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';
const state = {
  cart: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'pizza',
      quantity: 10,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateCloneDeep);

////////////////
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting},${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('jonas' ?? null);
// console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('Test').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';

// Polifilling async functions
import 'regenerator-runtime/runtime';
