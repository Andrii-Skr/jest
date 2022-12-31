const fetch = require("node-fetch");
async function getDataFetch(url) {
  const response = await fetch(url, { method: "GET" });
  return await response.text();
}
// const test = async () => {
//   console.log(await getDataFetch("https://www.google.com/"));
// };
// test();

module.exports = getDataFetch;
