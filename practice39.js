// Write a while loop that asks the user to enter a number and will run forever until the user enters a number greater than 10.

function test() {
  while (true) {
    input = window.prompt("Enter a number: ");
    if (parseInt(input) > 10) {
      break;
    }
  }
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

// Write a while loop that prints the phrase "Around the world" 144 times.

function aroundTheWorld() {
  let count = 0;

  while (count < 144) {
    console.log("Around the world");
    count++;
  }
}

aroundTheWorld();

// Write a while loop that asks the user to enter a word and will run forever until the user enters a word with more than 5 letters.

function moreThanFive() {
  while (true) {
    input = window.prompt("Enter a word: ");
    if (input.length > 5) {
      break;
    }
  }
}

moreThanFive();

// Write a while loop that prints the even numbers from 2 to 40.

function evenNumbers() {
  let number = 2;

  while (number <= 40) {
    console.log(number);
    number += 2;
  }
}

evenNumbers();