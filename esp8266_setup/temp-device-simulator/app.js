const Axios = require("axios");

const MAXIMUM_TEMP = 30;
const MINIMUM_TEMP = 20;
const MAXIMUM_HUMIDITY = 100;
const MINIMUM_HUMIDITY = 10;

function postRandomTemp() {
  const randomTemp =
    Math.floor(Math.random() * (MAXIMUM_TEMP - MINIMUM_TEMP + 1)) +
    MINIMUM_TEMP;
  const randomHumidity =
    Math.floor(Math.random() * (MAXIMUM_HUMIDITY - MINIMUM_HUMIDITY + 1)) +
    MINIMUM_HUMIDITY;
  Axios.post("http://localhost:5900/dummy", {
    temprature: randomTemp,
    humidity: randomHumidity
  })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

setInterval(() => {
  postRandomTemp();
}, 3000);
