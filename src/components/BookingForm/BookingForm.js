import styles from "./BookingForm.module.css";
import { useForm } from "react-hook-form";

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  dispatch,
  submitForm,
}) => {
  const { register, handleSubmit } = useForm();

  const handleBookingSubmit = (data) => {
    submitForm(data);
    console.log("dataa", data);
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.formContainer2}
        onSubmit={handleSubmit(handleBookingSubmit)}
        aria-labelledby="booking-form-title"
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          {...register("date")}
          onChange={(e) => setDate(e.target.value)}
          aria-required="true"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          {...register("time")}
          onChange={(e) => setTime(e.target.value)}
          aria-required="true"
          aria-describedby="time-description"
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          value={guests}
          min="1"
          max="10"
          id="guests"
          {...register("guests")}
          onChange={(e) => setGuests(e.target.value)}
          aria-required="true"
          aria-label="Number of guests between 1 and 10"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          {...register("occasion")}
          onChange={(e) => setOccasion(e.target.value)}
          aria-label="Occasion"
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          aria-label="Submit reservation form"
        />
      </form>
    </div>
  );
};

export default BookingForm;
