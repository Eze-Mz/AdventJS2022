function countHours(year, holidays) {
  return holidays.reduce((hours, holiday) => {
    const date = new Date(holiday + "/" + year);
    if (date.getDay() % 6 !== 0) hours += 2;
    return hours;
  }, 0);
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

// 01/06 is January 6, a Friday. Count.
// 04/01 is April 1, a Saturday. Do not count.
// 12/25 is December 25, a Monday. Count.

console.log(countHours(year, holidays)); // 2 days -> 4 extra hours in the year
