const { expect } = require("@jest/globals");

test("two plus two", () => {
  const val = 2 + 2;
  expect(val).toBeGreaterThan(3);
  expect(val).toBeGreaterThanOrEqual(3.5);
  expect(val).toBeLessThan(5);
  expect(val).toBeLessThanOrEqual(4.2);

  // toBe and toEqual are equivalent for numbers
  expect(val).toBe(4);
  expect(val).toEqual(4);
});

// For floating point equality, use toBeCloseTo, because a tiny rounding error shouldn't be what your test depends upon.

test("adding floating point numbers", () => {
  const val = 0.1 + 0.2;
  expect(val).toBeCloseTo(0.3);
});
