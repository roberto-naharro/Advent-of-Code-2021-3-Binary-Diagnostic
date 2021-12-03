import R from "ramda";

import {
  DiagnosticReportEntry,
  DigitsCount,
  DigitsCountInPositions,
} from "../types";

export const combineDigitsCount = (
  digitCountA: DigitsCount = {},
  digitCountB: DigitsCount = {}
): DigitsCount => R.mergeWith(R.add, digitCountB, digitCountA);

export const diagnosticReportEntryToDigitsCountInPositions = (
  d: DiagnosticReportEntry
): DigitsCountInPositions =>
  R.pipe(
    R.split(""),
    R.map((digit: string) => ({ [digit]: 1 } as DigitsCount))
  )(d);

export const combineAllDigitsCountInPositions: (
  list: DigitsCountInPositions[]
) => DigitsCountInPositions = R.reduce(
  (
    sumCount: DigitsCountInPositions,
    current: DigitsCountInPositions
  ): DigitsCountInPositions =>
    current.map(
      (digitCount: DigitsCount, pos: number): DigitsCount =>
        combineDigitsCount(sumCount[pos], digitCount)
    ),
  []
);

export const getDigitByCondition =
  (condition: (a: number, b: number) => boolean, initialValue: number) =>
  (d: DigitsCount) =>
    R.reduce(
      (acc, digitCount) =>
        condition(acc.count, digitCount[1])
          ? acc
          : { count: digitCount[1], digit: digitCount[0] },
      { count: initialValue, digit: "" },
      R.toPairs(d)
    ).digit;
