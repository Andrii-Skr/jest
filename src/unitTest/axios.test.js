import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getDataAxios from "../main/axios.js";

describe("test getDataAxios(url)", () => {
  const testCases = [
    {
      in: "https://jestjs.io/asd/",
      expectURL: "https://jestjs.io/asd/",
      expectStatus: 200,
      expectResponse: "<div>11</div>",
    },
    {
      in: "https://www.google.com/asd/",
      expectURL: "https://www.google.com/asd/",
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
