'use strict';
//Type Conversions
const dataSet = [
  {
    id: 1,
    class: 'Basic Calculus',
    numOfStudents: '23',
  },
  {
    id: 2,
    class: 'Fundamentals of Computing',
    numOfStudents: '18',
  },
  {
    id: 3,
    class: 'Science 101',
    numOfStudents: '15',
  },
];

/*const totalStudents =    Convert this to number or get numOfStudents = 231815
  dataSet[0].numOfStudents +
  dataSet[1].numOfStudents +
  dataSet[2].numOfStudents;*/

  const totalStudents =
  Number(dataSet[0].numOfStudents) +
  Number(dataSet[1].numOfStudents) +
  Number(dataSet[2].numOfStudents); 

console.log(`Total Students in School: ${totalStudents}`);