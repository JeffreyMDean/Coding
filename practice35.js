// Write a while loop that prints the numbers 0 through 100, increasing by 5 each time.

function numberPrinter() {
  let number = 0;
  while (number <= 100) {
    console.log(number);
    number += 5;
  }
}

numberPrinter();

// Write a while loop that prints the number 9000 ten times.

function numberPrinter1() {
  let count = 0;
  while (count < 10) {
    console.log(9000);
    count++;
  }
}

numberPrinter1();

// Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.
function test() {
  let input;
  do {
    input = window.prompt("enter a number:");
    input = parseInt(input);
  } while (input <= 10);
  console.log("You entered a number greater than 10:", input);
  return input;
}

test();

































