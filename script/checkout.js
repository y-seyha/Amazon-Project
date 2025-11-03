import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import "../data/cart-oop.js"; // Ensure cart-oop.js is loaded

renderCheckoutHeader();
renderOrderSummary();
renderPaymentSummary();
