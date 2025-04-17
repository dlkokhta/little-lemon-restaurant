import { fetchAPI } from "./api";

export const fetchAvailableTimes = (date) => {
  const dateObj = date instanceof Date ? date : new Date(date);
  return fetchAPI(dateObj);
};

export const updateTimes = (state, action) => {
  return fetchAvailableTimes(action.date);
};

export const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return fetchAvailableTimes(today);
};
