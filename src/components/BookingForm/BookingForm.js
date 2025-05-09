import styles from "./BookingForm.module.css";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handleBookingSubmit = (data) => {
    submitForm(data);
  };

  return (
    <div className={styles.formContainer}>
      <form
        className={styles.formContainer2}
        onSubmit={handleSubmit(handleBookingSubmit)}
        aria-labelledby="booking-form-title"
      >
        <div className={styles.inputFieldsContainer}>
          <label htmlFor="res-date">Choose date</label>
          <input
            className={styles.inputFields}
            type="date"
            id="res-date"
            required
            value={date}
            {...register("date", {
              required: "Date is required",
            })}
            onChange={(e) => setDate(e.target.value)}
            aria-required="true"
          />
          {errors.data && <p>{errors.data.message}</p>}
        </div>

        <div className={styles.inputFieldsContainer}>
          <label htmlFor="res-time">Choose time</label>
          <select
            className={styles.inputFields}
            id="res-time"
            required
            value={time}
            {...register("time", {
              required: "Time is required",
            })}
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
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </div>

        <div className={styles.inputFieldsContainer}>
          <label htmlFor="guests">Number of guests</label>
          <input
            className={styles.inputFields}
            type="number"
            value={guests}
            min="1"
            max="10"
            id="guests"
            required
            {...register("guests", {
              required: "Number of guests is required",
              min: { value: 1, message: "Minimum 1 guest" },
              max: { value: 10, message: "Maximum 10 guests" },
            })}
            onChange={(e) => setGuests(e.target.value)}
            aria-required="true"
            aria-label="Number of guests between 1 and 10"
          />
          {errors.guests && (
            <p className="text-red-500">{errors.guests.message}</p>
          )}
        </div>

        <div className={styles.inputFieldsContainer}>
          <label htmlFor="occasion">Occasion</label>
          <select
            className={styles.inputFields}
            id="occasion"
            value={occasion}
            required
            {...register("occasion", {
              required: "Occasion is required",
            })}
            onChange={(e) => setOccasion(e.target.value)}
            aria-label="Occasion"
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          {errors.occasion && (
            <p className="text-red-500">{errors.occasion.message}</p>
          )}
        </div>

        <Button buttonTitle="Make Your reservation" type="submit" />
      </form>
    </div>
  );
};

export default BookingForm;
