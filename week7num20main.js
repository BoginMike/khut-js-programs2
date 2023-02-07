'use strict';
//Nullish Coalescing Operator
let tempData = {
  location: 'Lake Eastwood',
  sensor1: 0,
  sensor2: null,
  sensor3: 1.8,
};
/*Ignored 0 as data so needs the ??
console.log(
  `${tempData.location}: ${
    tempData.sensor1 || tempData.sensor2 || tempData.sensor3
  } degrees`
);*/

console.log(
    `${tempData.location}: ${
      tempData.sensor1 ?? tempData.sensor2 ?? tempData.sensor3
    } degrees`
  );
