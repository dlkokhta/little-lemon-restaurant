import BookingForm from "../components/BookingForm/BookingForm";
import { useState, useReducer } from "react";
import styles from "./BookingPage.module.css";
import { updateTimes, initializeTimes } from "../utils/timeUtils";

const BookingPage = ({ submitForm }) => {
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
      <div className={styles.bookingPageContainer2}>
        <h1>Reserve Table</h1>
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
          submitForm={submitForm}
        />
      </div>
    </div>
  );
};

export default BookingPage;
