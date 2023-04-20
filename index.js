//* if given a falsy value as element 1 return the falsy value *//

function giveFalsy(elem1, elem2) {
  return (!elem1) ? elem1 : elem2;
}

console.log(giveFalsy(0, 'dog'))

//* return the length of any given array *//

function arrayL(arr) {
  return arr.length
}

console.log(arrayL([5, 4, 3]))

//* return the last number of any given array *//

function lastArray(arr) {
  return arr[arr.length - 1]
}

console.log(lastArray([5, 4, 3, 2]))

//* find the sum of all elements in the array *//

function allElem(arr) {
  let sum = 0;

  for( i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }

  return sum
}

console.log(allElem([5, 4, 3, 2, 1]))

//* add up the numbers from a single number *//

function addNum(num) {
  let sum = 0;

  for( i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(addNum(3));

//* convert seconds into a minute and seconds timer *//

function convertSec(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' + timerMinutes
  }

  return timerMinutes + ':' + timerSeconds
}

console.log(convertSec(70))

//* find the biggest number of an element *//

function findBiggest(arr) {
  let max = arr[0]

  for(i = 0; i < arr.length; i++){
    if(arr [i] > max) {
      max = arr[i]
    }
  }

  return max
}

console.log(findBiggest([5, 10, 20, 12]))

//* reverse the string abc to cba and so on *//

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('abc'))
/* break */

function isLoggedIn(str1, str2) {
  return str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED';
}

console.log(isLoggedIn('LOGGED_OUT', 'UNSUBSCRIBED'))

//* turn every element of an array into 0*//

function returnZero(arr) {
let Zero = [];

for(i = 0; i < arr.length; i++) {
  Zero[i] = 0
}
  return Zero;
}

console.log(returnZero([9, 10, 11, 12]))

/* using array.fill*/

function convertToZeros(arr) {
  return new Array(arr.length).fill(0);
}

console.log(convertToZeros([9, 10, 11, 12, 13]))

/* using array.map*/

function toZero(arr) {
  return arr.map(elem => {
    return 0;
  })}

  console.log(toZero([5, 4, 3, 2, 1, 0]))

//* Remove apples *//

function removeApples(arr) {
  let noApples = [];

  for (i = 0; i < arr.length; i++) {
    if(arr[i] !== 'Apples') {
      noApples.push(arr[i])
    }
  }

  return noApples;
}

console.log(removeApples(['Bananas', 'Apples', 'Oranges']))