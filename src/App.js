import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingPage from "../src/pages/BookingPage";
import HomePage from "../src/pages/HomePage";
import Header from "../src/components/Header/Header";

function App() {
  return (
    <>
      <div className="test">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
