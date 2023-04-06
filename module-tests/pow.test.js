const pow = require("./pow");

describe("hooks", () => {
  beforeAll(() => {
    console.log("Log before all tests");
  });
  beforeEach(() => {
    console.log("Log before each test");
  });
  afterAll(() => {
    console.log("Log after all tests");
  });
  afterEach(() => {
    console.log("Log after each test");
  });
  test("3 in power 2 should be 9", () => {
    console.log("3 in power 2 should be 9");
    expect(pow(3, 2)).toBe(9);
  });
  test("4 in power 2 should be 16", () => {
    console.log("4 in power 2 should be 16");
    expect(pow(4, 2)).toBe(16);
  });
});

// e2e;
