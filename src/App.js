import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingPage from "../src/pages/BookingPage";
import HomePage from "../src/pages/HomePage";
import Header from "../src/components/Header/Header";
import ConfirmedBooking from "../src/components/ConfirmedBooking/ConfirmedBooking ";
import { submitAPI } from "../src/utils/api";
import { useNavigate } from "react-router-dom";
import { handleFormSubmission } from "./utils/bookingUtils";

function App() {
  const navigate = useNavigate();

  const submitForm = (formData) => {
    handleFormSubmission(formData, submitAPI, navigate);
  };
  return (
    <>
      <div className="test">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/booking"
            element={<BookingPage submitForm={submitForm} />}
          ></Route>
          <Route
            path="/confirmedBooking"
            element={<ConfirmedBooking />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
