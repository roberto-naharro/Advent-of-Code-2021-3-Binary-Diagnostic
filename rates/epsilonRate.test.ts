import * as epsilonRate from "./epsilonRate";
import {
  DigitsCount,
  DigitsCountInPositions,
} from "../types";

describe("epsilonRate Test Suite", () => {
  describe("getMinRepeatedDigit", () => {
    it("should return the min repeated digit", () => {
      const d: DigitsCount = { "0": 2, "1": 1 };
      const expected = "1";

      expect(epsilonRate.getMinRepeatedDigit(d)).toBe(expected);
    });
  });

  describe("getAllMinRepeatedDigitToString", () => {
    it("should return the correct string", () => {
      const d: DigitsCountInPositions = [
        { "0": 2, "1": 1 },
        { "1": 2, "0": 1 },
        { "0": 3 },
        { "0": 3 },
        { "1": 2, "0": 1 },
        { "0": 2, "1": 1 },
      ];
      const expected = "100001";

      expect(epsilonRate.getAllMinRepeatedDigitToString(d)).toBe(expected);
    });
  });

  describe("getEpsilonRate", () => {
    it("should return the correct value for the Readme example", () => {
      const example = [
        "11110",
        "10110",
        "10111",
        "10101",
        "01111",
        "00111",
        "11100",
        "10000",
        "11001",
        "00010",
        "01010",
        "00100",
      ];

      expect(epsilonRate.getEpsilonRate(example)).toBe(9);
    });
  });
});
