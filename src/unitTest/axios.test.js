const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const getDataAxios = require("../main/axios.cjs");

describe("test getDataAxios(url)", () => {
  const testCases = [
    {
      in: "https://jestjs.io/",
      expectURL: "https://jestjs.io/",
      expectStatus: 200,
      expectResponse: "<div>11</div>",
    },
    {
      in: "https://www.google.com/",
      expectURL: "https://www.google.com/",
      expectStatus: 200,
      expectResponse: "<div>11</div>",
    },
  ];
  testCases.forEach((test, i) => {
    it("getDataAxios calls axios with the right args", async () => {
      const mock = new MockAdapter(axios);
      mock.onGet(test.in).reply(200, test.expectResponse);

      await getDataAxios(test.in).then((response) => {
        expect(response).toBe(test.expectResponse);
      });
    });
  });
});
