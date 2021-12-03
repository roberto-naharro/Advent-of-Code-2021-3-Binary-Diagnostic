import * as validation from "./validation";

describe("validation", () => {
  describe("validateDiagnostic", () => {
    it("should validate correct entries", () => {
      const example = "010011101110";
      expect(validation.validateDiagnostic(example)).toBeTruthy();
    });
    it("should validate incorrect entries", () => {
      const example = "sdfsfs";
      expect(validation.validateDiagnostic(example)).toBeFalsy();
    });
  });
});
