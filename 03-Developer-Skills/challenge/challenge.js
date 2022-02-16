'use strict';

const message = (temp, day) => {
  let msg = `${temp}°C in ${day} days `;
  if (temp >= 10 && temp <= 30) {
    msg += '🤩 ... ';
  } else if (temp < 10) {
    msg += '🥶 ... ';
  } else msg += '🥵 ... ';
  return msg;
};
const printForecast = arr => {
  let msg = '';
  for (let i = 0; i < arr.length; i++) {
    msg += message(arr[i], i + 1);
  }
  return msg;
};

let arr1 = [17, 21, 23];
let arr2 = [12, 5, -5, 0, 4];

console.log(printForecast(arr2));
