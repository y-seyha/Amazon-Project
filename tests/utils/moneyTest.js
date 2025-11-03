import { formatCurrency } from "../../script/utils/money.js";

// test suite for formatCurrency function
describe("test suite formatCurrency", () => {
  it("Convert Cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95"); // expected compared value
  });

  it("Convert zero cents into dollars", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("Round up to the nearest cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
});
