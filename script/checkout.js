import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/cart-class.js"; // Ensure cart-oop.js is loaded
// import "../data/car.js";
// import "../data/backend-practice.js";

async function loadPage() {
  await loadProductsFetch();

  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve("value3");
    });
  });

  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

//Array of Promises //Wait for all to load and move to next step
// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   }),
// ]).then((values) => {
//   console.log(values);
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve();
//   });

// }).then(() => {
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//   renderCheckoutHeader();
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// loadProducts(() => {
//   //use anonymoous function instead of a function with a name
//   loadCart(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });
