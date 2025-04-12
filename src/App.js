import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../src/pages/HomePage";

function App() {
  return (
    <>
      <div className="test">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/booking" element={<BookingPage />}></Route> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
