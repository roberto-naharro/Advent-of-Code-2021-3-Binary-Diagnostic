import R from "ramda";
import { inspect } from "util";

import { DiagnosticReportEntry, PowerConsumptionSource } from "../types";

const validDiagnosticRegEx = /^[10]+$/;

export const validateDiagnostic = (diagnostic: DiagnosticReportEntry) =>
  validDiagnosticRegEx.test(diagnostic);

export const validateDiagnostics = R.map(
  (diagnostic: DiagnosticReportEntry) => {
    if (validateDiagnostic(diagnostic)) {
      return diagnostic;
    } else {
      throw new Error("Invalid Diagnostic entry: " + inspect(diagnostic));
    }
  }
);
