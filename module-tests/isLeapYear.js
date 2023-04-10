const isLeapYear = (year) => {
  if (year === undefined) throw new Error("The year should exist");
  if (typeof year !== "number") throw new Error("The year should be a Number");
  if (!Number.isInteger(year)) {
    throw new Error("The year should be integer number");
  }
  if (year <= 41) throw new Error("The year should be 42 or more than");

  const date = new Date(year, 2, 0);
  const days = date.getDate();
  return days === 29 ? true : false;
};

module.exports = isLeapYear;
