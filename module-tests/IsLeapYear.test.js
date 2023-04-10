const isLeapYear = require("./isLeapYear");

// first argument - name of test, what we are testing
describe("test of isLeapYear function", () => {
  test("test if year divides by 4 without rest,2008 - true", () => {
    const result = isLeapYear(2008);
    expect(result).toBe(true);
  });
  test("test if year divides by 4 with rest,2003 -false", () => {
    const result = isLeapYear(2003);
    expect(result).toBe(false);
  });
  test("test if year divides by 100,4 without rest,1900 -false", () => {
    const result = isLeapYear(1900);
    expect(result).toBe(false);
  });
  test("test if year divides by 400,100,4 without rest, 2000 - true", () => {
    const result = isLeapYear(2000);
    expect(result).toBe(true);
  });

  // if function should return error, we pass to expect callback

  test("test if year more than 41 - error if less", () => {
    expect(() => isLeapYear(41)).toThrow("The year should be 42 or more than");
  });
  test("test if the year is integer - error if it isn't", () => {
    expect(() => isLeapYear(40.24)).toThrow(
      "The year should be integer number"
    );
  });
  test("if pass nothing - error year sould exist", () => {
    expect(() => isLeapYear()).toThrow("The year should exist");
  });
  test("if pass null - error year should be a number", () => {
    expect(() => isLeapYear(null)).toThrow("The year should be a Number");
  });
  test("if pass false - error year should be a number", () => {
    expect(() => isLeapYear(false)).toThrow("The year should be a Number");
  });
  test("if pass true - error year should be a number", () => {
    expect(() => isLeapYear(true)).toThrow("The year should be a Number");
  });
  test("if pass string - error year should be a number", () => {
    expect(() => isLeapYear("2005")).toThrow("The year should be a Number");
  });

  test("if pass array - error year should be a number", () => {
    expect(() => isLeapYear([])).toThrow("The year should be a Number");
  });

  test("if pass function - error year should be a number", () => {
    expect(() => isLeapYear(() => {})).toThrow("The year should be a Number");
  });
  test("if pass object - error year should be a number", () => {
    expect(() => isLeapYear({})).toThrow("The year should be a Number");
  });
});
