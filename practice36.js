// Write a while loop that prints the word "hello" 5 times.

function helloPrinter() {
  let count = 0;
  while (count < 5) {
    console.log("hello");
    count += 1;
  }
}

helloPrinter();

// Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

function test() {
  let input;
  do {
    input = window.prompt("Enter a number:");
    input = parseInt(input);
  } while (input <= 10);
  console.log("You entered a number greater than 10:", input);
  return input;
}
  
test();

// Write a while loop that prints the numbers 50 to 70.

function numberPrinter() {
  let number = 50;
  while (number <= 70) {
    console.log(number);
    number++;
  }
}

numberPrinter();

// Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

function test2() {
  let input;
  let lastInput;
  
  while (true) {
    input = window.prompt("Enter a word: ");
    if (input === "stop") {
      return lastInput; // Return the last valid input
    }
    lastInput = input; // Update last valid input
  }
}

const result = test2();
console.log(result); // This will log the last valid input before "stop"



