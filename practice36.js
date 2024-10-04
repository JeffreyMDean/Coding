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
