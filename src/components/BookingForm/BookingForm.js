import styles from "./BookingForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
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
