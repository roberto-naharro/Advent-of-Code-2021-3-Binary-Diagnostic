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

export const getMinRepeatedDigit = getDigitByCondition(
  (a: number, b: number): boolean => a <= b,
  Infinity
);

export const getAllMinRepeatedDigitToString: (
  list: DigitsCountInPositions
) => string = R.reduce(
  (str, d: DigitsCount) => R.join("", [str, getMinRepeatedDigit(d)]),
  ""
);

export const getEpsilonRate = (diagnosticEntries: DiagnosticReportEntry[]) =>
  R.pipe(
    R.map(diagnosticReportEntryToDigitsCountInPositions),
    combineAllDigitsCountInPositions,
    getAllMinRepeatedDigitToString,
    R.partialRight(R.curry(parseInt), [2])
  )(diagnosticEntries);
