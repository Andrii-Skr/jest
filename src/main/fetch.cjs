const fetch = require("node-fetch");
async function getDataFetch(url) {
  // console.log(await fetch(url), { method: "GET" });
  return await fetch(url, { method: "GET" });
}

// getDataFetch("https://www.google.com/");
module.exports = getDataFetch;
