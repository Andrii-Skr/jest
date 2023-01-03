import getDataAxios from "../main/fetch.js";
import { testCases } from "../mocks/fixtures";

describe("test getDataAxios(url)", () => {
  it("getDataAxios checks if API returns expected data", async () => {
    const results = JSON.parse(await getDataAxios(testCases[0].expectURL));

    expect(results).toEqual(testCases[0].expectResponse);
  });
});
