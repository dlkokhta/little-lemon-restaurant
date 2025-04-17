export const handleFormSubmission = (formData, submitAPI, navigate) => {
  const success = submitAPI(formData);

  if (success) {
    const existingBookings =
      JSON.parse(localStorage.getItem("bookingData")) || [];
    const updatedBookings = [...existingBookings, formData];
    localStorage.setItem("bookingData", JSON.stringify(updatedBookings));
    navigate("/confirmedBooking");
  }
};
