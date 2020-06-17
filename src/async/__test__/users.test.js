// eslint-disable-next-line no-unused-vars
import { getUsers } from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    await expect(getUsers()).resolves.toEqual({});

    // TODO 13: add async test with manual mock
  });
});
