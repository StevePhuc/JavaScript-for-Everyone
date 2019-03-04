// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// return masked string

// function maskify(cc) {
//   console.log(cc);
//   const arrayCC = cc.split('');
//   const arrayCCLength = arrayCC.length;
//   if (arrayCC.length > 4) {
//     const last4 = arrayCC.splice(arrayCCLength - 4).join('');
//     return 1'#'.repeat(arrayCCLength - 4) + last4;
//   }
//   return cc;
// }

// return masked string
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
// maskify('');
// maskify('Skippy');
// maskify('Nananananananananananananananana Batman!');

// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// function isIsogram(str) {
//   const arrLowerCase = str.toLowerCase().split('');
//   for (let i = 0; i < arrLowerCase.length; i++) {
//     if (arrLowerCase.includes(arrLowerCase[i], i + 1)) {
//       return false;
//     }
//   }
//   return true;
// }

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
  // return str.match(/(\w).*\1/i);
}
console.log(isIsogram('Dermatoglyphics')); //= = true
console.log(isIsogram('aba')); //= = false
console.log(isIsogram('moOse')); //= = false // -- ignore letter case

function nextItem(xs, item) {
  // TODO: Implement me
  const indexAfter = xs.indexOf(item);
  console.log(indexAfter);
  if (indexAfter >= 0) {
    return xs[indexAfter + 1];
  }
  return undefined;
}

// console.log(nextItem(['a', 'b', 'c'], 'd'));

function getMiddle(s) {
  // Code goes here!
  const arrayS = s.split('');
  arraySL2 = Math.floor(arrayS.length / 2);
  if (arrayS.length % 2 == 1) {
    return arrayS.slice(arraySL2, arraySL2 + 1).join('');
  }
  return arrayS.slice(arraySL2 - 1, arraySL2 + 1).join('');
}

console.log(getMiddle('test'));

//
function findMissingLetter(array) {
  const aBC = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const abcBegin = aBC.indexOf(array[0]);
  console.log(abcBegin);

  for (let i = 1; i < array.length; i++) {
    if (array[i] != aBC[abcBegin + i]) {
      return aBC[abcBegin + i];
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
