const calculator = require("./task3.js");

describe("Sum", () => {
  test("sum of 2 + 1 to be equal to 3", () => {
    expect(calculator.sum(2, 1)).toBe(3);
  });

  test("sum of 40 + 51 to be equal to 91", () => {
    expect(calculator.sum(40, 51)).toBe(91);
  });

  test("sum of 432 + 123 to be equal to 555", () => {
    expect(calculator.sum(432, 123)).toBe(555);
  });
});

describe("Substraction", () => {
  test("substraction of 2 - 1 to be equal to 1", () => {
    expect(calculator.substract(2, 1)).toBe(1);
  });

  test("substraction of 47 - 22 to be equal to 25", () => {
    expect(calculator.substract(47, 22)).toBe(25);
  });

  test("substraction of 5 - 12 to be equal to -7", () => {
    expect(calculator.substract(5, 12)).toBe(-7);
  });
});

describe("Division", () => {
  test("division of 8 / 2 to be equal to 4", () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });

  test("division of 1 / 2 to be equal to 0.5", () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  });

  test("division of 100 / 10 to be equal to 10", () => {
    expect(calculator.divide(100, 10)).toBe(10);
  });
});

describe("Multiplication", () => {
  test("multiplication of 3 * 2 to be equal to 6", () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });

  test("multiplication of 23 * 10 to be equal to 230", () => {
    expect(calculator.multiply(23, 10)).toBe(230);
  });

  test("multiplication of 1 * 34210 to be equal to 34210", () => {
    expect(calculator.multiply(1, 34210)).toBe(34210);
  });
});
