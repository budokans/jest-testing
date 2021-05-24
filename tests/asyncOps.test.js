const { expect } = require("@jest/globals");
const fetchData = require("../lib/asyncOps");

test("The pie is potato pie", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Potato Pie");
      done();
    } catch (err) {
      done(err);
    }
  }

  fetchData(callback);
});
