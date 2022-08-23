const input = document.querySelector("input");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");
const weatherStatus = document.querySelector(".weather-status");
const date = document.querySelector(".date");
const day = document.querySelector(".day");

const getDay = () => {
  const dayArr = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  return dayArr[new Date().getDay()];
};

const getDate = () => {
  const monthsArr = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "August",
    "September",
  ];
  return `${new Date().getDate()} ${monthsArr[new Date().getMonth()]}`;
};

const displayStatus = (status) => {
  switch (status) {
    case "Clear":
      weatherStatus.innerHTML = '<i class="fa-solid fa-sun"></i>';
      break;
    case "Clouds":
      weatherStatus.innerHTML = '<i class="fa-solid fa-cloud"></i>';
      break;
    case "Rain":
      weatherStatus.innerHTML =
        ' <i class="fa-solid fa-cloud-showers-heavy"></i>';
      break;
    default:
      weatherStatus.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
};

day.innerText = getDay();
date.innerText = getDate();

const getData = async (e) => {
  const inputVal = e.target.value;
  let status;
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&APPID=37ea0caae6efeb037c93b0a3644a6a5f`;
    const res = await fetch(url);
    const data = await res.json();
    city.innerText = data.name ? data.name : data.message;
    console.log(data.message);
    country.innerText = `, ${data.sys.country}`;
    temp.innerText = data.main.temp;
    status = data.weather[0].main;
    console.log(status);
    displayStatus(status);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
input.addEventListener("change", getData);
