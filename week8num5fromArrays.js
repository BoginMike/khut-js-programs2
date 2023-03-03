'use strict';
//Creating Arrays using Arrays.from

//const genStars = (count) => '*';

const genStars = (count) => Array.from(Array(count), () => '*');

for (let i = 1; i <= 6; i++) {
  console.log(genStars(i));
}

for (let i = 6; i >= 1; i--) {
  console.log(genStars(i));
}
