// toBe() uses Object.is to test exact equality.
// To check the value of an object, use toEqual() instead.

const { expect } = require("@jest/globals");

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// Testing for the opposite of a matcher

test("adding positive numbers does not result in 0", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
