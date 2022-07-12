const stringLength = require("./task1.js");

test("Character count", () => {
  expect(stringLength("hi")).toBe(2);
});

test("Character count", () => {
  expect(stringLength("")).toBe("String is less than 1 character long");
});

test("Character count", () => {
  expect(stringLength("Hello my name is Diego")).toBe(
    "String is more than 10 characters"
  );
});
