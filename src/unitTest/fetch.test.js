jest.mock("node-fetch");
const fetch = require("node-fetch");
const { mockReturnValue } = require("node-fetch");
const { Response } = jest.requireActual("node-fetch");
const getDataFetch = require("../main/fetch.cjs");

describe("test fetch(url)", () => {
  const testCases = [
    { in: "https://jestjs.io/", expectURL: "https://jestjs.io/", expectStatus: 200 },
    { in: "https://www.google.com/", expectURL: "https://www.google.com/", expectStatus: 200 },
  ];
  testCases.forEach((test, i) => {
    it("fetchData calls fetch with the right args", async () => {
      fetch.mockReturnValue(Promise.resolve(new Response(test.in)));

      const fetchData = await getDataFetch(test.in);
      expect(fetch).toHaveBeenCalledTimes(i + 1);
      expect(fetch).toHaveBeenCalledWith(test.expectURL, { method: "GET" });
      expect(fetchData.status).toBe(test.expectStatus);
    });
  });
});
