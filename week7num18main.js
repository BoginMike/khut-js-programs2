'use strict';
//Ternary stmt
const today = 'Thursday';
//const typeOfDay = null;
const typeOfDay =
  today === 'Saturday' || today === 'Sunday'
    ? 'Weekend'
    : today === 'Wednesday'
    ? 'Hump Day'
    : 'Weekday';


console.log(`${today} - ${typeOfDay}`);
