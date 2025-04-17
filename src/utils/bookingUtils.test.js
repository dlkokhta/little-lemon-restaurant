import { handleFormSubmission } from "./bookingUtils";

describe("handleFormSubmission", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("should store form data in localStorage and navigate if submitAPI returns true", () => {
    const formData = { date: "2025-04-16", time: "19:00" };
    const mockSubmitAPI = jest.fn(() => true);
    const mockNavigate = jest.fn();

    handleFormSubmission(formData, mockSubmitAPI, mockNavigate);

    const storedData = JSON.parse(localStorage.getItem("bookingData"));
    expect(storedData).toEqual([formData]);
    expect(mockNavigate).toHaveBeenCalledWith("/confirmedBooking");
  });

  it("should not store or navigate if submitAPI returns false", () => {
    const formData = { date: "2025-04-16", time: "19:00" };
    const mockSubmitAPI = jest.fn(() => false);
    const mockNavigate = jest.fn();

    handleFormSubmission(formData, mockSubmitAPI, mockNavigate);

    const storedData = localStorage.getItem("bookingData");
    expect(storedData).toBeNull();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
