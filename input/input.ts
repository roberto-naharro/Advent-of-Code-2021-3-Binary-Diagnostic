import * as fs from "fs";
import * as readline from "readline";
import { DiagnosticReportEntry } from "../types";

const filename = "input.txt";

export const getDiagnosticsFromFile = (): Promise<DiagnosticReportEntry[]> => {
  return new Promise((resolve, reject) => {
    const lines: DiagnosticReportEntry[] = [];

    readline
      .createInterface({
        input: fs.createReadStream(filename),
        terminal: false,
      })
      .on("line", function (line) {
        lines.push(line.trim());
      })
      .on("error", reject)
      .on("close", () => {
        resolve(lines);
      });
  });
};
