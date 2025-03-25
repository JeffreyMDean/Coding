// Fibonacci Sequence

function fibonacciGenerator(n) {
  let output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[i - 2] + output[i - 1]);
    }
  }

  return output;
}

const inputNum = 10;
const result = fibonacciGenerator(inputNum);
console.log(result);

// Fizz Buzz

let output = [];
let count = 1;

function fizzBuzz(num) {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }

  count++;
}

for (let i = 0; i <= 30; i++) {
  fizzBuzz();
}

console.log(output);
