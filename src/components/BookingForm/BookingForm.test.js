import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("submits the form with user input", () => {
  const handleSubmit = jest.fn((e) => e.preventDefault());

  render(
    <form onSubmit={handleSubmit}>
      <BookingForm
        date=""
        setDate={() => {}}
        time=""
        setTime={() => {}}
        guests={1}
        setGuests={() => {}}
        occasion="Birthday"
        setOccasion={() => {}}
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatch={() => {}}
      />
    </form>
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  const guestsInput = screen.getByLabelText(/number of guests/i);
  const submitButton = screen.getByLabelText(/submit reservation form/i);

  fireEvent.change(dateInput, { target: { value: "2025-04-20" } });
  fireEvent.change(guestsInput, { target: { value: "4" } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
});
