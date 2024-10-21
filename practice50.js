// Write a JavaScript function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array using a loop.


function sumArray(array) {
  let sum = 0;

  array.forEach(function (number) {
    sum = sum + number;
  });
  return sum;
}

const test = [2, 4, 6, 9]; // 21    // will be coming from user won't see this in real life
console.log(sumArray(test));

