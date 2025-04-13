import styles from "./BookingForm.module.css";
import { useState } from "react";
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
  setAvailableTimes,
}) => {
  const { register, handleSubmit } = useForm();

  const handleBookingSubmit = (data) => {
    console.log("dataaaa", data);
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.formContainer2}
        onSubmit={handleSubmit(handleBookingSubmit)}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          {...register("date")}
          onChange={(e) => setDate(e.target.value)}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          {...register("time")}
          onChange={(e) => setTime(e.target.value)}
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
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          {...register("occasion")}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>

        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
