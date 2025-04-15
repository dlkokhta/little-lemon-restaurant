export const fetchAvailableTimes = (date) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  return fetchAvailableTimes(action.date);
};

export const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0];
  return fetchAvailableTimes(today);
};
