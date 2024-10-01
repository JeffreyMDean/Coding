// Write a while loop to print the numbers 1 through 10.

function numberPrinter() {
  let number = 1;
  while (number <= 10) {
    console.log(number);
    number++;
  }
}

numberPrinter();

// Write a while loop that prints the word "hello" 5 times.

function helloPrinter() {
  let count = 0;
  while (count < 5) {
    console.log("hello");
    count++;
  }
}

helloPrinter();

// Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

function test() {
  while (true) {
    let input = window.prompt("Enter a word:");
    if (input === "stop") {
      break;
    }
  }
}

test();