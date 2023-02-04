//* if given a falsy value as element 1 return the falsy value *//

function ifFalsy(num1, num2) {
  return !num1 ? num1 : num2;
}

console.log(ifFalsy(0, "Dog"));

//* return the length of any given array *//

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([4, 5, 6]));

//* return the last number of any given array *//

function arrLengths(arr) {
  return arr[arr.length - 1];
}

console.log(arrLengths([4, 5, 6]));

//* find the sum of all elements in the array *//

function sum(arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(sum([4, 5, 6]));

//* add up the numbers from a single number *//

function addNum(num) {
  let sum = 0;

  for (i = 1; i <= num; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(addNum(3));

//* convert seconds into a minute and seconds timer *//

function secondsToTimer(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(secondsToTimer(70));

//* find the biggest number of an element *//

function biggestNum(arr) {
  let max = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(biggestNum([-10, 50, 30, 20]));

//* reverse the string abc to cba and so on *//

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('abc'))