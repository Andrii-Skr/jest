import { rest } from "msw";
import { testCases } from "./fixtures";

export const handlers = [
  rest.get(testCases[0].in, async (req, res, ctx) => {
    // Performs an original request to the GitHub API.
    const originalResponse = await ctx.fetch(req);

    return res(ctx.status(202, "Mocked status"), ctx.json(testCases[0].inResponse));
  }),
];
