import R from "ramda";

import { getEpsilonRate } from "../rates/epsilonRate";
import { getGammaRate } from "../rates/gammaRate";
import { DiagnosticReportEntry, PowerConsumptionSource } from "../types";

export const getPowerConsumptionSources = (
  diagnostic: DiagnosticReportEntry[]
): PowerConsumptionSource => ({
  epsilonRate: getEpsilonRate(diagnostic),
  gammaRate: getGammaRate(diagnostic),
});

export const getPowerConsumption = (source: PowerConsumptionSource) =>
  source.epsilonRate * source.gammaRate;

export const getPowerConsumptionFromDiagnostic = R.pipe(
  getPowerConsumptionSources,
  getPowerConsumption
);
