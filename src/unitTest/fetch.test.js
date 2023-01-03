jest.mock("node-fetch");
import fetch from "node-fetch";
import { Response } from "node-fetch";
import getDataFetch from "../main/fetch.js";

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
      fetch.mockResolvedValue(Promise.resolve(new Response(test.expectResponse)));

      const fetchData = await getDataFetch(test.in);
      expect(fetchData).toBe(test.expectResponse);
    });
  });
});
