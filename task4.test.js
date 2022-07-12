const capitalize = require("./task4.js");

test("Capitalize first character", () => {
  expect(capitalize("character")).toBe("Character");
});
