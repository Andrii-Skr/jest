jest.mock("node-fetch");
const fetch = require("node-fetch");
const { mockReturnValue } = require("node-fetch");
const { Response } = jest.requireActual("node-fetch");
const getDataFetch = require("../main/fetch.cjs");

describe("test fetch(url)", () => {
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
    it("fetchData calls fetch with the right args", async () => {
      fetch.mockReturnValue(Promise.resolve(new Response(test.expectResponse)));

      const fetchData = await getDataFetch(test.in);
      expect(fetchData).toBe(test.expectResponse);
    });
  });
});
