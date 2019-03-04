// 1
// Write a function which count the number of occurrence of a word in a paragraph or a sentence.
// The function countWords takes a paragraph and word as parameters.

const paragraph =
  'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';

function countWords(paragraph, word) {
  const re = new RegExp(word, 'g');
  if (paragraph.match(re) == null) {
    return 0;
  }

  return paragraph.match(re).length;
}
console.log(countWords(paragraph, 'love'));

// 2
// Write a function which takes an array parameter and returns an array of the data types of each item:

function checkDatatTypes(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = typeof arr[i];
  }
  return arr;
}

const arr = ['Asabeneh', 100, true, null, undefined, { job: 'teaching' }];
console.log(checkDatatTypes(arr));
const mixedData = ['John', 25, 'David', 30, 'Sara', 22];
console.log(checkDatatTypes(mixedData));

//  3.
// Create a function which filter ages greater than 18.

const ages = [35, 30, 17, 18, 15, 22, 16, 20];

function agesGreaterEighteen() {
  return ages.filter(item => item > 18);
}

console.log(agesGreaterEighteen());

// 4.
// Write a function which remove an item or items from the middle of the array and replace with two items

function removeMiddleReplace(arr, replaceValue) {
  const arrLength = arr.length;
  if (arrLength % 2 == 1) {
    arr[Math.floor(arrLength / 2)] = replaceValue;
  } else {
    arr[Math.floor(arrLength / 2)] = replaceValue;
    arr[Math.floor(arrLength / 2) - 1] = replaceValue;
  }
  return arr;
}

console.log(removeMiddleReplace([1, 2, 3, 4, 5, 6], 10));
console.log(
  removeMiddleReplace(['React', 'CSS', 'HTML', 'Javascript'], 'Phuc')
);

// 5
// Write a function which calculate the average age of the group.

function averageAge() {
  const sumAge = ages.reduce((total, number) => (total += number));
  return Math.round(sumAge / ages.length);
}
console.log(averageAge());

// 6
// Write a function which can generate a random Finnish car code.
function genCarPlateNum() {
  const characterAZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let carPlateNum = '';
  for (let i = 0; i < 3; i++) {
    const randomAz = Math.floor(Math.random() * characterAZ.length);
    const textAZ = characterAZ[randomAz];
    carPlateNum += textAZ;
  }
  carPlateNum += '-';
  for (let i = 0; i < 3; i++) {
    carPlateNum += Math.floor(Math.random() * 10);
  }
  return carPlateNum;
}

console.log(genCarPlateNum());

// 7
// Write a function which can generate  a random Finnish social security number.
// https://en.wikipedia.org/wiki/National_identification_number#Finland
function genSocialSecurityNum() {
  let SocialSecurityNum = '';

  // random day
  let randomNum = Math.floor(Math.random() * 31 + 1);
  if (randomNum < 10) {
    randomNum = `0${randomNum}`;
  }
  SocialSecurityNum = randomNum;
  //  random month
  randomNum = Math.floor(Math.random() * 12 + 1);
  if (randomNum < 10) {
    randomNum = `0${randomNum}`;
  }
  SocialSecurityNum += `${randomNum}`;
  //  random years
  randomNum = Math.floor(Math.random() * 99 + 1);
  if (randomNum < 10) {
    randomNum = `0${randomNum}`;
  }
  // for easy only random who born 1900-1999 so "1900-1999: −"
  SocialSecurityNum += `${randomNum}-`;
  // random id who born same day
  randomNum = Math.floor(Math.random() * 999 + 1);
  if (randomNum < 10) {
    randomNum = `00${randomNum}`;
  } else if (randomNum < 100) {
    randomNum = `0${randomNum}`;
  }
  SocialSecurityNum += `${randomNum}`;
  // random last charter for easy
  const character0Z = '0123456789ABCDEFHJKLMNPRSTUVWXY';
  const randomCharacter = Math.floor(Math.random() * character0Z.length);
  SocialSecurityNum += character0Z[randomCharacter];

  return SocialSecurityNum;
}

console.log(genSocialSecurityNum());

// 8
// The following shopping cart has four products.
// Create an addProduct, removeProduct and editProduct functions to  modify the shopping cart.
// Add , remove, edit at least one product

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

function addProduct(product) {
  shoppingCart.push(product);
}

function editProduct(editNumber, newProduct) {
  shoppingCart[editNumber] = newProduct;
}

function removeProduct(removeNumber) {
  shoppingCart.splice(removeNumber, 1);
}

addProduct('Meat');
console.log(shoppingCart);

editProduct(3, 'Sugar');
console.log(shoppingCart);

removeProduct(0);
console.log(shoppingCart);
removeProduct(3);
console.log(shoppingCart);

// 9.
// The following todoList has three tasks.
// Create an addTask, removeTask and editTask functions to  modify the todoList.
// Add, remove or edit at least on task
const todoList = [
  {
    task: 'Prepare JS Test',
    time: '3/1/2019 12:00',
    completed: true,
  },
  {
    task: 'Give JS Test',
    time: '3/1/2019 1:00',
    completed: false,
  },
  {
    task: 'Sprint Retrospective',
    time: '3/1/2019 3:00',
    completed: false,
  },
];
function addTask(task) {
  todoList.push(task);
}

function editTask(editNumber, newTesk) {
  todoList[editNumber] = newTesk;
}

function removeTask(removeNumber) {
  todoList.splice(removeNumber, 1);
}

addTask({
  task: 'End Integrify Test',
  time: '3/1/2019 14:00',
  completed: true,
});
editTask(3, {
  task: 'End Integrify Test',
  time: '3/1/2019 14:00',
  completed: true,
});

removeTask(0);
console.log(todoList);

removeTask(3);
console.log(todoList);

// 10.
// Write a function which check if items of an array are unique?

function checkUniqueness(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i], i + 1)) {
      return false;
    }
  }
  return true;
}

const arrOne = [1, 4, 6, 2, 1];
console.log(checkUniqueness(arrOne));

const arrTwo = [1, 4, 6, 2, 3];
console.log(checkUniqueness(arrTwo));

// 11.
//  Write a function which filter users who has  scoresGreaterThan85,
// Write a function which addUser  to the user array only if the user doesn't exist.
// Write a function which addUserSkill which can add skill to a user only if the user exist.
// Write a function which editUser if the user exist in the users array.
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTM'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
];

//  Write a function which filter users who has  scoresGreaterThan85,
function scoresGreaterThan85() {
  return users.filter(userItem => userItem.scores > 85);
}
console.log(scoresGreaterThan85());

// Write a function which addUser  to the user array only if the user doesn't exist.
function addUser(user) {
  const checkUser = users.filter(userItem => userItem.name === user.name);
  if (checkUser.length === 0) {
    users.push(user);
  }
}

addUser({
  name: 'Phuc',
  scores: 99,
  skills: ['HTM', 'CSS', 'JS'],
  age: 29,
});
console.log(users);

// Write a function which addUserSkill which can add skill to a user only if the user exist.
function addUserSkill(userName, skillAdd) {
  const checkUser = users.filter(userItem => userItem.name === userName);
  if (checkUser.length === 1) {
    checkUser[0].skills.push(skillAdd);
  }
}

addUserSkill('Thomas', 'React');
console.log(users);

// Write a function which editUser if the user exist in the users array.
function editUser(user) {
  const checkUser = users.filter(userItem => userItem.name === user.name);
  if (checkUser.length === 1) {
    const userIndex = users.indexOf(checkUser[0]);
    users[userIndex] = user;
  }
}

editUser({
  name: 'Phuc',
  scores: 99,
  skills: ['HTM', 'CSS', 'React'],
  age: 29,
});
console.log(users);
