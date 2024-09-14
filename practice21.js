// Write a program that uses a variable to store a word, then prints that word in reverse order.

function reverseOrder(word) {
  return word.split("").reverse().join("");
}

const word = "ball";
console.log(reverseOrder(word));

// Write a program that uses a variable to store a number, then prints the number times 10.

function timesTen(number) {
  return number * 10;
}

const number = 2;
console.log(timesTen(number));