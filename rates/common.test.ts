import * as common from "./commonRate";
import {
  DiagnosticReportEntry,
  DigitsCount,
  DigitsCountInPositions,
} from "../types";

describe("common Test Suite", () => {
  describe("combineDigitsCount", () => {
    it("should work for simple objects", () => {
      const a: DigitsCount = { "0": 2, "1": 4 };
      const b: DigitsCount = { "0": 4, "1": 12 };
      const expected: DigitsCount = { "0": 6, "1": 16 };

      expect(common.combineDigitsCount(a, b)).toEqual(expected);
    });

    it("should combine a empty object with normal object", () => {
      const a: DigitsCount = { "0": 2, "1": 4 };
      const b: DigitsCount = {};

      expect(common.combineDigitsCount(a, b)).toEqual(a);
      expect(common.combineDigitsCount(b, a)).toEqual(a);
    });
  });

  describe("diagnosticReportEntryToDigitsCountInPositions", () => {
    it("should convert the types correctly", () => {
      const d: DiagnosticReportEntry = "010010";
      const expected: DigitsCountInPositions = [
        { "0": 1 },
        { "1": 1 },
        { "0": 1 },
        { "0": 1 },
        { "1": 1 },
        { "0": 1 },
      ];

      expect(common.diagnosticReportEntryToDigitsCountInPositions(d)).toEqual(
        expected
      );
    });
  });

  describe("combineAllDigitsCountInPositions", () => {
    it("should combine all digits correctly", () => {
      const d: DigitsCountInPositions[] = [
        [
          { "0": 1 },
          { "1": 1 },
          { "0": 1 },
          { "0": 1 },
          { "1": 1 },
          { "0": 1 },
        ],
        [
          { "0": 1 },
          { "1": 1 },
          { "0": 1 },
          { "0": 1 },
          { "1": 1 },
          { "0": 1 },
        ],
        [
          { "1": 1 },
          { "0": 1 },
          { "0": 1 },
          { "0": 1 },
          { "0": 1 },
          { "1": 1 },
        ],
      ];
      const expected: DigitsCountInPositions = [
        { "0": 2, "1": 1 },
        { "1": 2, "0": 1 },
        { "0": 3 },
        { "0": 3 },
        { "1": 2, "0": 1 },
        { "0": 2, "1": 1 },
      ];

      expect(common.combineAllDigitsCountInPositions(d)).toEqual(expected);
    });
  });
});
