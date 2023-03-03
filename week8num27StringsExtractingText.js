'use strict';
//Strings - Extracting Text- c
const str = 'name:James Dean,age:45,profession:Actor,location:Hollywood';

//const fullName = str;
const fullName = str.substring(str.search('name') + 5, str.search('age') - 1);
//const profession = str;
const profession = str.substring(
    str.search('profession') + 11,
    str.search('location') - 1
  );
  
console.log(`${fullName} was an ${profession}`);

  