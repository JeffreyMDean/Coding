// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

function highPrices() {
  let hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
  let newArray = [];
  let index = 0;

  while (index < hashes.length) {
    if (hashes[index].price > 5) {
      newArray.push(hashes[index]);
    }
    index++;
  }
  return newArray;
}

const result = highPrices();
console.log(result);

function highPrices2() {
  let hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
  let newArray = [];

  hashes.forEach(function (hash) {
    if (hash.price > 5) {
      newArray.push(hash);
    }
  });
  return newArray;
}

console.log(highPrices2());

function highPrices3() {
  let hashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
  let newArray = hashes.filter(function (hash) {
    return hash.price > 5;
  });
  return newArray;
}

const result2 = highPrices3();
console.log(result2);

// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

function evenNumbers() {
  let numbers = [2, 4, 5, 1, 8, 9, 7];
  let evenNumbers = [];
  let index = 0;

  while (index < numbers.length) {
    if (numbers[index] % 2 === 0) {
      evenNumbers.push(numbers[index]);
    }
    index++;
  }
  return evenNumbers;
}

console.log(evenNumbers());

function evenNumbers2() {
  let numbers = [2, 4, 5, 1, 8, 9, 7];
  let evenNumbers = [];

  numbers.forEach(function (number) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });
  return evenNumbers;
}

console.log(evenNumbers());

function evenNumbers3() {
  let numbers = [2, 4, 5, 1, 8, 9, 7];
  let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });
  return evenNumbers;
}

console.log(evenNumbers3());
