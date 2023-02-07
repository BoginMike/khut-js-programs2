'use strict';
// Function Declarations
let tempInFahrenheit = 77;

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }
//console.log(`${tempInFahrenheit} degrees Fahrenheit is `);change this to invoke fctn call

console.log(
    `${tempInFahrenheit} degrees Fahrenheit is `,
    toCelsius(tempInFahrenheit),
    'degrees Celsius'
  );