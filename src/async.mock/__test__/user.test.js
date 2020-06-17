import { register } from "../user";
import { verifyUsername, verifyPassword } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    // TODO 19: add test here
    const mockUsername = "mocked username";
    const mockPassword = "mocked password";

    await expect(register(mockUsername, mockPassword)).resolves.toEqual({});
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    const mockUsername = "???";
    const mockPassword = "mocked password";

    verifyPassword.mockImplementation(() => true);
    verifyUsername.mockImplementation(() => false);

    await expect(register(mockUsername, mockPassword)).rejects.toEqual(
      new Error("wrong username or password")
    );
  });
});
