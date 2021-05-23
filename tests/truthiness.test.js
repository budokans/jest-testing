const { expect } = require("@jest/globals");

// More precise matchers that distinguish between undefined, null and false.

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).not.toBeUndefined();
  expect(n).toBeFalsy();
  expect(n).not.toBeTruthy();
  expect(n).toBeDefined();
});

test("zero", () => {
  const z = 0;
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeNull();
  expect(z).toBeFalsy();
  expect(z).not.toBeTruthy();
});
