const sum = require("../lib/sum");

test("adds 1 to 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// expect(sum(1,2)) returns an expectation object.
// On that object, you call the toBe() matcher.
// When Jest runs, it tracks all failing matchers so it can print clear messages.
// toBe() uses Object.is to test exact equality.
// To check the value of an object, use toEqual() instead.
