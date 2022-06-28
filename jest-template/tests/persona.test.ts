import { validateCharacter } from "../src/persona";

describe("testing validateCharacter", () => {
  test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "SubZero",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for force equal to 0", () => {
    const result = validateCharacter({
      name: "SubZero",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for defense 0", () => {
    const result = validateCharacter({
      name: "SubZero",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });

  test("Should return for false defense or life, strength", () => {
    const result = validateCharacter({
      name: "SubZero",
      life: -1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("should return true for all valid inptus", () => {
    const result = validateCharacter({
      name: "SubZero",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

 
});
