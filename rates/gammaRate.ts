import R from "ramda";
import {
  DigitsCountInPositions,
  DigitsCount,
  DiagnosticReportEntry,
} from "../types";
import {
  getDigitByCondition,
  diagnosticReportEntryToDigitsCountInPositions,
  combineAllDigitsCountInPositions,
} from "./commonRate";

export const getMaxRepeatedDigit = getDigitByCondition(
  (a: number, b: number): boolean => a > b,
  0
);

export const getAllMaxRepeatedDigitToString: (
  list: DigitsCountInPositions
) => string = R.reduce(
  (str, d: DigitsCount) => R.join("", [str, getMaxRepeatedDigit(d)]),
  ""
);

export const getGammaRate = (diagnosticEntries: DiagnosticReportEntry[]) =>
  R.pipe(
    R.map(diagnosticReportEntryToDigitsCountInPositions),
    combineAllDigitsCountInPositions,
    getAllMaxRepeatedDigitToString,
    R.partialRight(R.curry(parseInt), [2])
  )(diagnosticEntries);
