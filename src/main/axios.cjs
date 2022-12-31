const axios = require("axios");

async function getDataAxios(url) {
  const response = await axios.get(url);
  return await response.data;
}

// const test = async () => {
//   console.log(await getDataAxios("https://www.google.com/"));
// };
// test();

module.exports = getDataAxios;
