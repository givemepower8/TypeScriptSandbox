import { HelloWorld } from "./HelloWorld";

describe("HelloWorld", () => {
  it("should say hello world", () => {
    expect(HelloWorld()).toBe("Hello world!");
  });
});
