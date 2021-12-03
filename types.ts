export type DiagnosticReportEntry = string;

export type PowerConsumptionSource = {
  gammaRate: number;
  epsilonRate: number;
};

export type DigitsCount = {
  [digit: string]: number;
};

export type DigitsCountInPositions = Array<DigitsCount>;