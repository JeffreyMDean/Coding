// Write a method that takes in a number and returns the number times itself. Then run the method and print the result.

function numberSelf(number) {
  return number * number;
}

const inputNumber = 5;
const result = numberSelf(inputNumber);
console.log(result);

// Write a method that takes in a string and returns the first letter of the string. Then run the method and print the result.

function firstLetter(string) {
  return string[0];
}

const inputString = "hat";
const result2 = firstLetter(inputString);
console.log(result2);

// Write a method that takes in three strings and returns a string that combines all three strings with spaces in between. Then run the method and print the result.

function spaces(string1, string2, string3) {
  return string1 + " " + string2 + " " + string3;
}

const inputString1 = "dog";
const inputString2 = "cat";
const inputString3 = "bear";
const result3 = spaces(inputString1, inputString2, inputString3);
console.log(result3);

// Write a method that takes in a number and returns the number as a string. Then run the method and print the result.

function converter(number) {
  return number.toString();
}

const inputNumber2 = 7;
const result4 = converter(inputNumber2);
console.log(result4);

// Write a method that takes in a string and returns the string repeated 5 times. Then run the method and print the result.

function fiveStrings(string) {
  return string + string + string + string + string;
}

const inputString4 = "run";
const result5 = fiveStrings(inputString4);
console.log(result5);

// Write a method that takes in 3 numbers and returns the average (the sum divided by 3.0). Then run the method and print the result.

function average(num1, num2, num3) {
  return (num1 + num2 + num3) / 3.0;
}

const inputNum1 = 2;
const inputNum2 = 3;
const inputNum3 = 10;
const result6 = average(inputNum1, inputNum2, inputNum3);
console.log(result6);

// Write a method that takes in a number and returns the number times 10 plus 30. Then run the method and print the result.

function math(num) {
  return num * 10 + 30;
}

const inputNum4 = 1;
const result7 = math(inputNum4);
console.log(result7);
