import { describe, it, expect } from "vitest";
import { calculateAverage, factorial, fizzBuzz, max } from "../src/test.js";

describe("max", () => {
  it("should return the first argument if it is greaters", () => {
    // AAA -> Arrange , Act , Assert
    expect(max(10, 5)).toBe(10);
  });
  it("should return the second argument if it is greater", () => {
    expect(max(5, 10)).toBe(10);
  });
  it("should return the first argument if both are equal", () => {
    expect(max(5, 5)).toBe(5);
  });
});

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  it("should return Fizz if arg is divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });
});

// TDD -> Test driven development
describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });
  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });
  it("should calculate the average of an array with two or more elements", () => {
    expect(calculateAverage([1, 3, 2])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });
  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });
  it("should return 120 if given 5", () => {
    expect(factorial(5)).toBe(120);
  });
});
