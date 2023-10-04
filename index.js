//* if given a falsy value as element 1 return the falsy value *//

function returnFalsy(elem1, elem2){
  return !elem1 ? elem1 : elem2;
}

console.log(returnFalsy(0, "dog"))

//* return the length of any given array *//

function arrayLength(arr){
    return arr.length
}

console.log(arrayLength([5, 4, 3, 2, 1]))

//* return the last number of any given array *//

function lastNumber(arr) {
  for (i = 0; i <= arr.length; i++) {
    return arr[arr.length - 1]
  }
}

console.log(lastNumber([5, 4, 3, 2, 1]))

//* find the sum of all elements in the array *//

function findSum(arr){
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(findSum([5, 4, 3, 2, 1]))

//* add up the numbers from a single number *//

function addNum(num) {
  let add = 0 

  for (i = 1; i <= num; ++i){
    add = add + i
  }

  return add;
}

console.log(addNum(5))

//* convert seconds into a minute and seconds timer *//

function convertSeconds(seconds){

let TimerSeconds = seconds % 60;
let TimerMinutes = Math.floor(seconds / 60)

  if(TimerMinutes.toString().length === 1){
    TimerMinutes = '0' + TimerMinutes;
  }

  if(TimerSeconds.toString().length === 1){
    TimerSeconds = '0' + TimerSeconds
  }

  return TimerMinutes + ':' + TimerSeconds;
}

console.log(convertSeconds(40))

//* find the biggest number of an element *//

function findNum(arr){
let num = 0

  for (i = 0; i < arr.length; ++i) {
    if(arr[i] > num) {
      num = arr[i];
    }
  }

  return num;
}

console.log(findNum([5, 10, 20, 4]))

//* reverse the string abc to cba and so on *//

function reverseString(str) {

  let reverseString = ""

  for (i = 0; i < str.length; ++i){
    reverseString = str[i] + reverseString
  }

  return reverseString;
}

console.log(reverseString('abc'))

/* break */

function reverseString(str){
  return str.split("").reverse().join("");
}

console.log(reverseString('abc'))

//* turn every element of an array into 0*//

function zeroToArray(arr) {
  let Zero = []

  for (i = 0; i < arr.length; ++i){
    Zero[i] = 0
  }

  return Zero;
}

console.log(zeroToArray([5, 4, 3]))

/* using array.fill*/

function convertToZero(arr) {
    return new Array(arr.length).fill(0);
}

console.log(convertToZero([5, 4, 3, 2, 1]))

/* using array.map*/

function toZero(arr) {
  return arr.map(elem => {
    return 0
  })
}

console.log(toZero([5, 4, 3, 1]))


//* Remove apples *//

function removeApples(arr){
  let noApples = [];

  for(i = 0; i < arr.length; ++i){
    if(arr[i] !== 'Apples') {
      noApples.push(arr[i]);
    }
  }

  return noApples;
}

console.log(removeApples(['Apples', 'Bananas', 'Oranges']))