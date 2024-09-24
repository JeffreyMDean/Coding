// Use a variable to store a number, then write a condition that prints 1 if the number is over 9000, and prints -1 otherwise.

function nineThousand(number) {
  if (number > 9000) {
    return 1;
  } else {
    return -1;
  }
}

const number = 9010;
console.log(nineThousand(number));

// Use a variable to store a number, then write a condition that prints 9 if the number is less than 10, prints 19 if the number is less than 20, prints 29 if the number is less than 30, and prints -1 otherwise (only one print statement should occur).

function test(number1) {
  if (number1 < 10) {
    return 9;
  } else if (number1 < 20) {
    return 19;
  } else if (number1 < 30) {
    return 29;
  } else {
    return -1;
  }
}

const number1 = 8;
console.log(test(number1));

// Use variables to store two numbers, then write a condition that prints 100 if either number is greater than 10, and prints -100 otherwise.

function test2(num1, num2) {
  if (num1 > 10 || num2 > 10) {
    return 100;
  } else {
    return -100;
  }
}

const num1 = 22;
const num2 = 3;
console.log(test2(num1, num2));