import * as gammaRate from "./gammaRate";
import {
  DigitsCount,
  DigitsCountInPositions,
} from "../types";

describe("gammaRate Test Suite", () => {
  describe("getMaxRepeatedDigit", () => {
    it("should return the max repeated digit", () => {
      const d: DigitsCount = { "0": 2, "1": 1 };
      const expected = "0";

      expect(gammaRate.getMaxRepeatedDigit(d)).toBe(expected);
    });
  });

  describe("getAllMaxRepeatedDigitToString", () => {
    it("should return the correct string", () => {
      const d: DigitsCountInPositions = [
        { "0": 2, "1": 1 },
        { "1": 2, "0": 1 },
        { "0": 3 },
        { "0": 3 },
        { "1": 2, "0": 1 },
        { "0": 2, "1": 1 },
      ];
      const expected = "010010";

      expect(gammaRate.getAllMaxRepeatedDigitToString(d)).toBe(expected);
    });
  });

  describe("getGammaRate", () => {
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

      expect(gammaRate.getGammaRate(example)).toBe(22);
    });
  });
});
