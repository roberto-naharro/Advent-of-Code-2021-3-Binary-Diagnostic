import * as powerConsumption from "./powerConsumption";

describe("powerConsumption", () => {
  describe("getPowerConsumptionFromDiagnostic", () => {
    it("should work with the readme example", () => {
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
      expect(powerConsumption.getPowerConsumptionFromDiagnostic(example)).toBe(
        198
      );
    });
  });
});
