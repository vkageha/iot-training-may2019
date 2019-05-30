const axios = require("axios");
const express = require("express");

const MAXIMUM_TEMP = 30;
const MINIMUM_TEMP = 20;
const MAXIMUM_HUMIDITY = 100;
const MINIMUM_HUMIDITY = 10;

function dummyDevice() {
  const randomTemp =
    Math.floor(Math.random() * (MAXIMUM_TEMP - MINIMUM_TEMP + 1)) +
    MINIMUM_TEMP;
  const randomHumi =
    Math.floor(Math.random() * (MAXIMUM_HUMIDITY - MINIMUM_HUMIDITY + 1)) +
    MINIMUM_HUMIDITY;
  //   console.log("Strange stuff");

  console.log(`Temp: ${randomTemp} Humidity: ${randomHumi}`);

  // axios
  //   .post("http://un-habitat-backend.azurewebsites.net", {
  //     temp: randomTemp,
  //     humidity: randomHumi
  //   })
  //   .then(response => console.log(response.data))
  //   .catch(error => console.log(error));
}

setInterval(() => {
  dummyDevice();
}, 10000);
