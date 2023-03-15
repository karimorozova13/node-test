const getCurrentMonth = () => {
  const month = new Date();
  return month.getMonth() + 1;
};

module.exports = getCurrentMonth;
