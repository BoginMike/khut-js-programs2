'use strict';
// Write your code here...
var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
      city: 'New York',
      country: 'US',
    },
  };
  user.isAdmin = false;

/* console.log('User: ');
console.log('City: ');
console.log('Age: ');
console.log('Is User an Administrator?'); */

console.log('User: ', user.name);
console.log('City: ', user.location.city);
console.log('Age: ', user.age);
console.log('Is User an Administrator?', user.isAdmin);