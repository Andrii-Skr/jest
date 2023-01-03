import axios from "axios";

async function getDataAxios(url) {
  const response = await axios.get(url);
  return await response.data;
}

// const test = async () => {
//   console.log(await getDataAxios("https://www.google.com/"));
// };
// test();

export default getDataAxios;
