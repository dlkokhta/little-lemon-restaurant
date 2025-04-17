import { validateGuests } from "./validation";

describe("validateGuests", () => {
  test("returns true for 1 to 10", () => {
    expect(validateGuests(1)).toBe(true);
    expect(validateGuests(5)).toBe(true);
    expect(validateGuests(10)).toBe(true);
  });

  test("returns false for invalid values", () => {
    expect(validateGuests(0)).toBe(false);
    expect(validateGuests(11)).toBe(false);
    expect(validateGuests(-1)).toBe(false);
  });
});
