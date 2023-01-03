import nock from "nock";
import getDataAxios from "../main/axios.js";

describe("test getDataAxios(url)", () => {
  const testCases = [
    {
      in: "https://jestjs.io/a/",
      expectURL: "https://jestjs.io/a/",
      inResponse: "<div>11</div>",
      expectResponse: "<div>11</div>",
    },
    {
      in: "https://www.google.com/d/",
      expectURL: "https://www.google.com/d/",
      inResponse: "<div>11</div>",
      expectResponse: "<div>11</div>",
    },
  ];
  testCases.forEach((test, i) => {
    it("getDataAxios checks if API returns expected data", async () => {
      nock(test.in).get("/").reply(200, test.inResponse);
      const results = await getDataAxios(test.in);
      expect(results).toEqual(test.expectResponse);
    });
  });
});
