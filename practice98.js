// Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.

function attributePrinter(shirt) {
  console.log(shirt["brand"]);
  console.log(shirt["color"]);
  console.log(shirt["size"]);
}

const inputShirt = { brand: "Hurley", color: "Teal", size: "Medium" };
const result = attributePrinter(inputShirt);
console.log(result);

// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

function evenNumbers(numbers) {
  let i = 0;
  let newNumbers = [];

  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i]);
    }
    i++;
  }
  return newNumbers;
}

const inputNumbers = [2, 4, 5, 1, 8, 9, 7];
const result2 = evenNumbers(inputNumbers);
console.log(result2);

function evenNumbers2(numbers) {
  let newNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers;
}

const inputNumbers2 = [2, 4, 5, 1, 8, 9, 7];
const result3 = evenNumbers(inputNumbers2);
console.log(result3);

function evenNumbers3(numbers) {
  let newNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });
  return newNumbers;
}

const inputNumbers3 = [2, 4, 5, 1, 8, 9, 7];
const result4 = evenNumbers(inputNumbers3);
console.log(result4);
