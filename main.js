function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

function checkLeapYear() {
  const year = document.getElementById("yearInput").value;
  const result = isLeapYear(year)
    ? `${year} is a leap year.`
    : `${year} is not a leap year.`;
  document.getElementById("leapYearResult").innerText = result;
}
