'use strict';
//Date and Time  Get and Set
const date = new Date(2020, 2, 20);

/*const getDate = null;
const getDay = null;
const getMonth = null;
const getFullYear = null;

const getHours = null;
const getMinutes = null;
const getSeconds = null;
const getMilliseconds = null;
const getTime = null;*/

date.setHours(15);
date.setMinutes(35);
date.setSeconds(23);
date.setMilliseconds(12);
//This will set the time to 15:35:23:12. Next, access the date, day, month and year as shown below. 
const getDate = date.getDate();
const getDay = date.getDay();
const getMonth = date.getMonth();
const getFullYear = date.getFullYear();
const getHours = date.getHours();
const getMinutes = date.getMinutes();
const getSeconds = date.getSeconds();
const getMilliseconds = date.getMilliseconds();
const getTime = date.getTime();

console.log(`Date: ${date}`);
console.log(`The date: ${getDate}`);
console.log(`The day: ${getDay}`);
console.log(`The Month: ${getMonth}`);
console.log(`The year: ${getFullYear}`);
console.log(`Time: ${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`);
console.log(`Time (ms since Epoch): ${getTime}`);
