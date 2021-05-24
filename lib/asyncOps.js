const axios = require("axios");

const fetchData = (callback) => {
  const pie = "Potato Pie";

  callback(pie);
};

// const fetchData = async (callback) => {
//   try {
//     const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//     const name = await data[0].username;
//     console.log(name);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

module.exports = fetchData;
