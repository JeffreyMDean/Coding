// Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].

function sumOfCombos(numbers1, numbers2) {
  let newArray = [];
  let index1 = 0;

  while (index1 < numbers1.length) {
    let num = numbers1[index1];
    let index2 = 0;
    while (index2 < numbers2.length) {
      let otherNum = numbers2[index2];
      newArray.push(num + otherNum);
      index2++;
    }
    index1++;
  }

  return newArray;
}

const inputNumbers1 = [1, 2];
const inputNumbers2 = [6, 7, 8];
const result = sumOfCombos(inputNumbers1, inputNumbers2);
console.log(result);

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

function stringCombiner(string1, string2, string3) {
  return string1 + " " + string2 + " " + string3;
}

const inputString1 = "Cat";
const inputString2 = "Dog";
const inputString3 = "Fish";
const result2 = stringCombiner(inputString1, inputString2, inputString3);
console.log(result2);

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

function numberToString(number) {
  return number.toString();
}

const inputNumber = 7;
const result3 = numberToString(inputNumber);
console.log(result3);
