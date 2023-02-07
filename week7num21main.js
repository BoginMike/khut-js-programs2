'use strict';
//Optional Chaining Operator
const users = [
  {
    name: 'Joe',
    address: {
      home: '212, River Drive',
      city: 'New York',
      country: 'US',
    },
  },
  {
    name: 'Jane',
  },
];

try {
  console.log(`${users[0].name} lives in ${users[0].address.city}`);
 // console.log(`${users[1].name} lives in ${users[1].address.city}`);    needs ? and ?? to work correctly

 console.log(
    `${users[1].name} lives in ${users[1].address?.city ?? 'a big city'}`
  ); 
} catch (error) {
  console.log(error.message);
}
