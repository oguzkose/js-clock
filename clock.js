function showTime() {
  let time = new Date();
  let hours = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let day = time.getDay();
  let month = time.getMonth();
  let allDate = time.toDateString()
  

  hours < 10 ? (hours = `0${hours}`) : hours;
  minute < 10 ? (minute = `0${minute}`) : minute;
  second < 10 ? (second = `0${second}`) : second;
  day < 10 ? (day = `0${day}`) : day;
  month < 10 ? (month = `0${month}`) : month;

  let dateTimeNow = `${hours}:${minute}:${second}`;
  let clock = document.querySelector("h1#clock");
  let date = document.querySelector("h1#date")
  clock.innerHTML = dateTimeNow;
  date.innerHTML = allDate;
}
showTime();
setInterval(showTime, 1000);
