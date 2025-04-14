import BookingForm from "../components/BookingForm/BookingForm";
import { useState, useReducer } from "react";
import styles from "./BookingPage.module.css";

const fetchAvailableTimes = (date) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
  return fetchAvailableTimes(action.date);
};

const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return fetchAvailableTimes(today);
};

const BookingPage = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <div className={styles.bookingPageContainer}>
      <h1>Booking Page</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default BookingPage;
