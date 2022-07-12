const reverseString = require("./task2.js");

test("Reverse", () => {
  expect(reverseString("hello")).toBe("olleh");
});
