import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";

// Mock props
const mockProps = {
  date: "",
  setDate: jest.fn(),
  time: "",
  setTime: jest.fn(),
  guests: "",
  setGuests: jest.fn(),
  occasion: "",
  setOccasion: jest.fn(),
  availableTimes: ["17:00", "18:00", "19:00"],
  dispatch: jest.fn(),
  submitForm: jest.fn(),
};

describe("BookingForm HTML5 Validation Attributes", () => {
  beforeEach(() => {
    render(<BookingForm {...mockProps} />);
  });

  test("Date input has type='date' and required attribute", () => {
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
  });

  test("Time select is required", () => {
    const timeSelect = screen.getByLabelText(/Choose time/i);
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toBeRequired();
  });

  test("Guests input has correct type and min/max/required attributes", () => {
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toBeRequired();
  });

  test("Occasion select has required attribute", () => {
    const occasionSelect = screen.getByLabelText(/Occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  test("Form has a submit button", () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeInTheDocument();
  });
});
