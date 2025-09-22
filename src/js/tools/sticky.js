const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let currentDate = new Date();
let dateString = `${currentDate.getDate()}`;
let monthString = `${months[currentDate.getMonth()]}`;

document.getElementById("morf-date").textContent = dateString;
document.getElementById("morf-month").textContent = monthString;
