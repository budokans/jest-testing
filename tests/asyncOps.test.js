const { expect } = require("@jest/globals");
const { fetchData, fetchPost, failToFetchPost } = require("../lib/asyncOps");

////////////////////////// Callbacks

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

////////////////////////// Promises

test("Returned data is this specific post object", () => {
  const specificObject = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  // Return the promise, otherwise the test will complete before the promises resolves and .then won't be called.
  return fetchPost().then((data) => {
    expect(data).toEqual(specificObject);
  });
});

////////////////////////// Expecting a promise to be rejected

test("This fetch fails with an error", () => {
  // If you don't verify that a certain number of assertions are called, a fulfilled promise won't fail the test.

  expect.assertions(1);
  return failToFetchPost().catch((err) => {
    const { name } = err;
    expect(name).toMatch("Error");
  });
});

////////////////////////// Using .resolves / .rejects

test("This promise resolves to a specific post object", () => {
  const postObj = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  // Be sure to return the assertion, otherwise the test will complete before fetchPost has a chance to resolve and .then() can be called.
  return expect(fetchPost()).resolves.toEqual(postObj);
});

test("This fetch fails with an error", () => {
  // Be sure to return the assertion, otherwise the test will complete before fetchPost has a chance to resolve and .then() can be called.

  // Note this example will fail because the matcher's received value will be an object and not a string.
  return expect(failToFetchPost()).rejects.toMatch("some error");
});

////////////////////////// Using Async/Await

test("This promise resolves to a specific post object", async () => {
  const postObj = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };

  const data = await fetchPost();
  expect(data).toEqual(postObj);
});

test("This fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await failToFetchPost();
  } catch (err) {
    const { name } = err;
    expect(name).toMatch("Error");
  }
});
