// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];

// Print the array using console.log()
console.log(itCompanies);

//  Print the number of companies in the array
console.log(itCompanies.length);
// Print out each company
for (itCompany of itCompanies) {
  console.log(itCompany);
}
console.log('UpperCase each company and print them out'.toUpperCase());
for (itCompany of itCompanies) {
  itCompany.toUpperCase();
}
// Print the array like this: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log('Big Company'.toUpperCase());
numberCompanies = itCompanies.length - 1;
bigCompany = `${itCompanies.slice(0, numberCompanies)} and ${itCompanies.slice(
  numberCompanies
)} are big IT companies`.replace(/,/g, ', ');
console.log(bigCompany);

// Sort the array using sort() method
// console.log('itCompanies '+itCompanies);
sortCompanies = [...itCompanies];
sortCompanies = sortCompanies.sort();
// console.log('itCompanies after '+itCompanies);
console.log(`sortCompanies ${sortCompanies}`);
// Reverse the array using reverse() method
reverseCompanies = [...itCompanies];
reverseCompanies = reverseCompanies.reverse();
console.log(`reverseCompanies ${reverseCompanies}`);

// a. Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (let i=0;i<=10;i++){
//   console.log(i);
// }
// b. Iterate 10 to 0 using for loop, do the same using while and do while loop.
// for (let i=10;i>=0;i--){
//   console.log(i);
// }
// c. Iterate the array in question number 10 using a for loop and print out the items.
// d. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
checkCompany = 'Phuc';
if (itCompanies.includes(checkCompany)) {
  console.log(checkCompany);
} else {
  console.log('company is not found.');
}

// e. Filter out companies which have more than two ‘o’ without the filter method
for (itCompany of itCompanies) {
  checkO = itCompany.split('o').length - 1;
  // console.log(itCompany);
  // console.log(checkO);
  if (checkO >= 2) {
    console.log(itCompany);
  }
}

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
// Slice out the middle IT company or companies from the array
const halfItCompanies = Math.floor(itCompanies.length / 2);
console.log(halfItCompanies);

if (itCompanies.length % 2 == 1) {
  console.log(itCompanies.slice(halfItCompanies, halfItCompanies + 1));
} else {
  console.log(itCompanies.slice(halfItCompanies - 1, halfItCompanies + 1));
}

console.log(itCompanies);
// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

// Remove the middle IT company or companies from the array

if (itCompanies.length % 2 == 1) {
  itCompanies.splice(halfItCompanies, 1);
} else {
  itCompanies.splice(halfItCompanies - 1, 2);
}
console.log('Remove the middle ', itCompanies);

// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
// Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and returns the array.
// If the array length is less than five it return ‘item not found’.
function modifyArray(array) {
  // console.log(array[4]);
  if (array[4]) {
    array[4] = array[4].toUpperCase();
    return array;
  }
  return 'Not Found';
}
console.log(
  modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])
);
// →["Avocado", "Tomato", "Potato","Mango", "LEMON", "Carrot"]
console.log(
  modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM'])
);
// →["Google", "Facebook","Apple", "Amazon","MICROSOFT",  "IBM"]
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));
// →"Not Found"
