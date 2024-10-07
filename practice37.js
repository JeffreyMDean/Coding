// Write a while loop that asks the user to enter a word and will run forever until the user enters the word "stop".

function test() {
  let input;
  let lastInput;

  while (true) {
    input = window.prompt("Enter a word: ");
    if (input === "stop") {
      return lastInput;
    }
    lastInput = input;
  }
}

result = test();
console.log(result);