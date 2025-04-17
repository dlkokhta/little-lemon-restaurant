import { initializeTimes, updateTimes } from "./timeUtils";
import { fetchAPI } from "./api";

jest.mock("./api");

describe("initializeTimes", () => {
  test("should return default times for today's date", () => {
    const mockedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    fetchAPI.mockReturnValue(mockedTimes);

    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(mockedTimes);
  });
});

describe("updateTimes", () => {
  test("should return available times based on given date", () => {
    const mockedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    fetchAPI.mockReturnValue(mockedTimes);

    const action = { date: "2025-04-15" };
    const result = updateTimes([], action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-04-15"));
    expect(result).toEqual(mockedTimes);
  });
});
