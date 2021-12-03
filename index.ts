import R from "ramda";

import { getDiagnosticsFromFile } from "./input/input";
import { validateDiagnostics } from "./diagnostic/validation";
import { getPowerConsumptionFromDiagnostic } from "./diagnostic/powerConsumption";

const app = async () => {
  R.pipe(
    validateDiagnostics,
    getPowerConsumptionFromDiagnostic,
    console.log
  )(await getDiagnosticsFromFile());
};

app().then(console.log).catch(console.error);
