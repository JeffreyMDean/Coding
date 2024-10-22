// Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

function lowPrices(hashes) {
  let newArray = [];
  let index = 0;

  while (index < hashes.length) {
    if (hashes[index].price < 10) {
      newArray.push(hashes[index]);
    }
    index++;
  }
  return newArray;
}

const inputHashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(lowPrices(inputHashes));

function lowPrices2(hashes) {
  let newArray = [];

  hashes.forEach(function (hash) {
    if (hash.price < 10) {
      newArray.push(hash);
    }
  });
  return newArray;
}

const inputHashes2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(lowPrices2(inputHashes2));

function lowPrices3(hashes) {
  let newArray = hashes.filter(function (hash) {
    return hash.price < 10;
  });
  return newArray;
}

const inputHashes3 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(lowPrices3(inputHashes3));

// Start with an array of numbers and create a new array with only the odd numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

function oddNumbers(numbers) {
  let newArray = [];
  let index = 0;

  while (index < numbers.length) {
    if (numbers[index] % 2 === 1) {
      newArray.push(numbers[index]);
    }
    index++;
  }
  return newArray;
}

const inputNumbers = [2, 4, 5, 1, 8, 9, 7];
console.log(oddNumbers(inputNumbers));

function oddNumbers2(numbers) {
  let newArray = [];

  numbers.forEach(function (number) {
    if (number % 2 === 1) {
      newArray.push(number);
    }
  });
  return newArray;
}

const inputNumbers2 = [2, 4, 5, 1, 8, 9, 7];
console.log(oddNumbers2(inputNumbers2));

function oddNumbers3(numbers) {
  let newArray = numbers.filter(function (number) {
    return number % 2 === 1;
  });
  return newArray;
}

const inputNumbers3 = [2, 4, 5, 1, 8, 9, 7];
console.log(oddNumbers3(inputNumbers3));