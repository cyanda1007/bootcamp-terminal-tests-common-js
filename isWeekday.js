module.exports = function isWeekday(weekdays) {
  return weekdays.includes(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  );
};
