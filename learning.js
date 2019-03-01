// console.log(typeof [1, 1]); // it is object so learn after

// const numberArray = [1, 2, 3, 4, 5, 6, 7];
// function average(array) {
//   //   let avg;
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     // check the number inside for
//     if (typeof array[i] !== 'number') {
//       console.log(`${array[i]} is not a number`);
//       return array;
//     }
//     // console.log(`${array[i]} is a number`);
//     sum += array[i];
//   }
//   // avg is outside for
//   return Math.round(sum / array.length);
//   //   console.log('is a number ');
//   //   console.log(avg);
// }
// // console.log("The average is ", average(numberArray));
// console.log(average(numberArray));

const companies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

for (let i = 0; i < companies.length; i++) {
  if (companies[i].indexOf('o') != companies[i].lastIndexOf('o')) {
    console.log(companies[i]);
  }
  // console.log('index of result', companies[i].indexOf('o'));
  // console.log('last index of result', companies[i].lastIndexOf('o'));
}
