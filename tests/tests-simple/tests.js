import { formatCurrency } from "../../script/utils/money.js";

console.log("Convert cents into dollars");
if (formatCurrency(2095) === "20.95") {
  console.log('Test passed: formatCurrency(2095) === "20.95"');
} else {
  console.error('Test failed: formatCurrency(2095) !== "20.95"');
}

console.log("Convert zero cents into dollars");
if (formatCurrency(0) === "0.00") {
  console.log('Test passed: formatCurrency(0) === "0.00"');
} else {
  console.error('Test failed: formatCurrency(0) !== "0.00"');
}

console.log("Round up to the nearest cent ");
if (formatCurrency(2000.5) === "20.01") {
  console.log('Test passed: formatCurrency(2000.5) === "20.01"');
} else {
  console.error('Test failed: formatCurrency(2000.5) !== "20.01"');
}
