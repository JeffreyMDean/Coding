
// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

function shortestName(hashes) {
  let shortest = hashes.reduce(function (short, hash) {
    if (hash.name.length < short.name.length) {
      return hash;
    } else {
      return short;
    }
  }, hashes[0]);
  return shortest;
}

const inputHashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(shortestName(inputHashes));

// Start with an array of numbers and compute the maximum number.
// For example, [5, 10, 8, 3] becomes 10.

function maximumNumber(numbers) {
  let maxNum = numbers[0];
  let i = 0;

  while (i < numbers.length) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
    i++;
  }
  return maxNum;
}

const inputNumbers = [5, 10, 8, 3];
console.log(maximumNumber(inputNumbers));

function maximumNumber2(numbers) {
  let  maxNum = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}


const inputNumbers2 = [5, 10, 8, 3];
console.log(maximumNumber2(inputNumbers2));

function maximumNumber3(numbers) {
  let maxNum = numbers.reduce(function (max, number) {
    if (number > max) {
      return number;
    } else {
      return max;
    }
  }, numbers[0]);
  return maxNum;
}

const inputNumbers3 = [5, 10, 8, 3];
console.log(maximumNumber3(inputNumbers3));