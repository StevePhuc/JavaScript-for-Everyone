// Declare a function fullName and it print out your full name.
// function fullName(){
//   console.log('Phuc Nguyen');
// }
// fullName();
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full name.
// function fullName2(firstName, lastName){
//   console.log(`${firstName} ${lastName}`);
// }
// fullName2('Phuc','Nguyen');
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(addNumbers(12, 19));
//  Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
  array.forEach(currentItem => {
    console.log(currentItem);
  });
}
printArray(['Phuc', 'Nguyen', 'Integrify']);

//  Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array(dont’ use method).
function reverseArray(array) {
  const reverse = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reverse.push(array[index]);
  }
  return reverse;
}
console.log(reverseArray(['Phuc', 'Nguyen', 'Integrify']));

//  Declare a function name capitalizeArray. It takes array as a parameter and it returns  the capitalized array.
function capitalizeArray(array) {
  array.forEach(currentItem => {
    console.log(currentItem.slice(0, 1).toUpperCase() + currentItem.slice(1));
  });
}
capitalizeArray(['phuc', 'nguyen', 'integrify']);
// Declare a function name removeItem. It returns array after removing an item
function removeItem(array) {
  array.pop();
  return array;
}
console.log(removeItem(['phuc', 'nguyen', 'integrify']));
// Declare a function name addItem. It returns array after adding an item
function addItem(array) {
  array.push('');
  return array;
}
console.log(addItem(['phuc', 'nguyen', 'integrify']));
// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
  let sum = 0;
  for (let index = 0; index <= number; index++) {
    sum += index;
  }
  return sum;
}
console.log(sumOfNumbers(3));
// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that range.
function sumOfOdds(number) {
  let sum = 0;
  for (let index = 0; index <= number; index++) {
    if (index % 2 == 1) {
      sum += index;
    }
  }
  return sum;
}
console.log(sumOfOdds(6));
// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that range.
function sumOfOdds(number) {
  let sum = 0;
  for (let index = 0; index <= number; index++) {
    if (index % 2 == 0) {
      sum += index;
    }
  }
  return sum;
}
console.log(sumOfOdds(6));
// Declare a function name 	countsEvensOdds. It takes a number parameter and it counts number of evens and odds in the number.
function countsEvensOdds(number) {
  let countEvens = 0;
  for (let index = 0; index <= number; index++) {
    if (index % 2 == 1) {
      countEvens++;
    }
  }
  console.log(
    `whit ${number}: The number of odds are ${countEvens}. The number of evens are ${number -
      countEvens +
      1} `
  );
}
countsEvensOdds(100);
// output:
// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

// Declare a function name randomHexaNumberGenerator. When this function is called it generates  a random hexadecimal  number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
  return `#${'0123456789abcdef'
    .split('')
    .map(function(v, i, a) {
      return i > 5 ? null : a[Math.floor(Math.random() * 16)];
    })
    .join('')}`;
  // case 2
  // return '#'+Math.floor(Math.random()*16777215).toString(16);
}

console.log(randomHexaNumberGenerator());
// output:
// console.log(randomHexaNumberGenerator());
//  '#ee33df'
// console.log(randomHexaNumberGenerator());
// '#28def10'
// console.log(randomHexaNumberGenerator());
// '#38eeda'

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator(number) {
  character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  id = '';
  for (let index = 0; index < number; index++) {
    randomCharacter = character.charAt(
      Math.floor(Math.random() * character.length)
    );
    id += randomCharacter;
  }
  return id;
}

console.log(userIdGenerator(7));

// Output:
// console.log(userIdGenerator());
// 41XTDbE

// Modify question number n . Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
// One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function userIdGeneratedByUser() {
  character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  id = '';
  const numberCharacters = parseInt(prompt('number of characters: '));
  const numberIds = parseInt(prompt('number of ids  '));
  console.log(`${numberCharacters} ${numberIds}`);
  // for (let index = 0; index <= numberCharacters; index++) {
  //   randomCharacter= character.charAt(Math.floor(Math.random()*character.length));
  //   id= id+ randomCharacter;
  // }
  // return id;
  for (let index = 0; index < numberIds; index++) {
    console.log(userIdGenerator(numberCharacters));
  }
}

// userIdGeneratedByUser();

// userIdGeneratedByUser()
// "kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// "
// userIdGeneratedByUser()
// "3RexwUqvqe
// rVUY6dC1il
// YCf88ZHuAf
// 7JhI6Mn063
// mo3GYyH26O
// "
// userIdGeneratedByUser()
// "1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// "

// Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
  const rgb = [];
  for (let index = 0; index < 3; index++) {
    rgb.push(Math.floor(Math.random() * 255) + 1);
  }
  return `rgb(${rgb})`;
}
console.log(rgbColorGenerator());
// Output:
// rgb(125,244,255)

// 	q. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
  const shuffledArray = [];
  const arrayLength = array.length;
  // console.log(arrayLength);
  console.log(` begin array: ${array}`);
  for (let index = 0; index < arrayLength; index++) {
    randomItem = Math.floor(Math.random() * array.length);
    // console.log('randomItem: '+randomItem);
    shuffledArray.push(array[randomItem]);

    array.splice(randomItem, 1);
    // console.log(shuffledArray);
  }
  return shuffledArray;
}

console.log(`shuffled array: ${shuffleArray([1, 2, 3, 4, 5, 6, 7])}`);

// 	r. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
  let factorial = 1;
  for (let index = 1; index <= number; index++) {
    factorial *= index;
  }
  return factorial;
}
console.log(`factorial: ${factorial(4)}`);
// s. Call your function isEmpty, it takes a parameter and it checks if it is empty or not.
function isEmpty(params) {
  if (params === '' || params === null) {
    return true;
  }
  return false;
}

console.log(isEmpty(''));
// t. Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...params) {
  let sum = 0;
  for (param of params) {
    sum += param;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4));

function name() {
  return 'Phuc';
  //   console.log('test'); // not run after return
}
console.log(name());

// Write a functions which checks if all items are unique in the array.
function unique(arr) {
  console.log(arr);

  const notUnique = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) {
      notUnique.push(arr[i]);
    }
  }
  console.log(`this number is not unique ${notUnique}`);
}

unique([1, 2, 3, 4, 1, 2]);
// 44 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

function sevenRandomNumbers() {
  const sevenArray = [];
  //   const number09 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   for (let i = 0; i < 7; i++) {
  //     const randomNumber = Math.floor(Math.random() * number09.length);
  //     sevenArray.push(number09[randomNumber]);
  //     number09.slice(randomNumber, 1);
  //   }

  // hơw to do 2
  while (sevenArray.length < 7) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (!sevenArray.includes(randomNumber)) {
      sevenArray.push(randomNumber);
    }
  }
  console.log(sevenArray);
}

sevenRandomNumbers();
// [1,4,5,7,9,8,0]
