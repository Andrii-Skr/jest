import getDataFetch from "../main/fetch.js";
import { testCases } from "../mocks/fixtures";

describe("test getDataFetch(url)", () => {
  it("getDataFetch checks if API returns expected data", async () => {
    const results = JSON.parse(await getDataFetch(testCases[0].expectURL));

    expect(results).toEqual(testCases[0].expectResponse);
  });
});
