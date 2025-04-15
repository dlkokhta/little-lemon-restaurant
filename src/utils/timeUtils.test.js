import { initializeTimes, updateTimes } from "./timeUtils";

describe("initializeTimes", () => {
  test("should return default times for today's date", () => {
    const result = initializeTimes();
    expect(result).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});

describe("updateTimes", () => {
  test("should return available times based on given date", () => {
    const action = { date: "2025-04-15" };
    const result = updateTimes([], action);
    expect(result).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });
});
