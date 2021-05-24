const { expect } = require("@jest/globals");
const compileAndroidCode = require("../lib/compileAndroidCode");

// You can test if it will throw, throw and Error, or you can be more specific about which error by passing a string or a regexp

// Note that the function needs to be invoked from within a wrapping function otherwise the toThrow() assertion will fail.
test("Android code will not compile as expected", () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  expect(() => compileAndroidCode()).toThrow("You are using the wrong JDK!");
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
