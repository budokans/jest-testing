const axios = require("axios");

const fetchData = (callback) => {
  const pie = "Potato Pie";

  callback(pie);
};

const fetchPost = () => {
  try {
    return axios("https://jsonplaceholder.typicode.com/posts/1").then(
      ({ data }) => data
    );
  } catch (err) {
    console.log(err.message);
  }
};

const failToFetchPost = () => {
  try {
    return axios("https://jsonplaceholder.typicode.com/posteses/1").then(
      ({ data }) => {
        console.log(data);
        return data;
      }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { fetchData, fetchPost, failToFetchPost };
