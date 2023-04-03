//* if given a falsy value as element 1 return the falsy value *//

function returnFalsy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

console.log(returnFalsy(0, 'dog'))

//* return the length of any given array *//

function arrayL(arr) {

  return arr.length
}

console.log(arrayL([4, 5, 6, 7]))

//* return the last number of any given array *//

function arrLast(arr){
  return arr[arr.length - 1]
}

console.log(arrLast([3, 4, 7, 8]))

//* find the sum of all elements in the array *//

function sum(arr){
  let sum = 0

  for(i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }

  return sum;
}

console.log(sum([1, 2, 3, 4, 5]))

//* add up the numbers from a single number *//

function addNum(num) {
  let sum = 0

  for (i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(addNum(3));

//* convert seconds into a minute and seconds timer *//

function calcTime (seconds) {
  let secondsTimer = seconds % 60;
  let minutesTimer = Math.floor(seconds / 60)

  if (minutesTimer.toString().length === 1) {
    minutesTimer = '0' + minutesTimer
  }

  return minutesTimer + ':' + secondsTimer; 
}

console.log(calcTime(40))

//* find the biggest number of an element *//

function biggestNum(arr) {
  let max = arr[0]

  for (i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

console.log(biggestNum([-10, 50, 100, 20]));

//* reverse the string abc to cba and so on *//

function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('Raghu'))

/* break */

function isLoggedIn(str1, str2) {
  return str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED';
}

console.log(isLoggedIn('LOGGED_OUT', 'UNSUBSCRIBED'))