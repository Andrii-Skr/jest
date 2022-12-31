const nock = require("nock");
const getDataFetch = require("../main/fetch.cjs");

describe("test getDataAxios(url)", () => {
  const testCases = [
    {
      in: "https://jestjs.io/",
      expectURL: "https://jestjs.io/",
      inResponse: "<div>11</div>",
      expectResponse: "<div>11</div>",
    },
    {
      in: "https://www.google.com/",
      expectURL: "https://www.google.com/",
      inResponse: "<div>11</div>",
      expectResponse: "<div>11</div>",
    },
  ];
  testCases.forEach((test, i) => {
    it("getDataAxios checks if API returns expected data", async () => {
      nock(test.in).get("/").reply(200, test.inResponse);
      const results = await getDataFetch(test.in);
      expect(results).toEqual(test.expectResponse);
    });
  });
});
