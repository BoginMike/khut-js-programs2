'use strict';
// function expression
let seconds = 3829019;

const secondsToDays = function (seconds) {
    return Math.floor(Number(seconds) / (3600 * 24));
  };

//console.log(`${seconds} seconds is equal to 0 days`);

console.log(`${seconds} seconds is equal to ${secondsToDays(seconds)} days`);
