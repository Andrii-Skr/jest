import nock from "nock";
import getDataFetch from "../main/fetch.js";

describe("test getDataAxios(url)", () => {
  const testCases = [
    {
      in: "https://developer.mozilla.org/",
      expectURL: "https://developer.mozilla.org/",
      inResponse: "<div>11</div>",
      expectResponse: "<div>11</div>",
    },
    // {
    //   in: "https://www.google.com/1/",
    //   expectURL: "https://www.google.com/1/",
    //   inResponse: "<div>11</div>",
    //   expectResponse: "<div>11</div>",
    // },
  ];
  testCases.forEach((test, i) => {
    it("getDataAxios checks if API returns expected data", async () => {
      nock(test.in).get("/").reply(200, test.inResponse);
      const results = await getDataFetch(test.in);
      expect(results).toEqual(test.expectResponse);
    });
  });
});
