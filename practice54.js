// Start with an array of numbers and compute the sum of all the numbers.
// For example, [5, 10, 8, 3] becomes 26.

function sum(array) {
  let sum = array.reduce(function (sum, number) {
    return sum + number;
  }, 0);
  return sum;
}

const inputArray = [5, 10, 8, 3];
console.log(sum(inputArray));

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function singleString(strings) {
  let string = "";
  let i = 0;

  while (i < strings.length) {
    string = string + strings[i];
    i++;
  }
  return string;
}

const inputStrings = ["volleyball", "basketball", "badminton"];
console.log(singleString(inputStrings));

function singleString2(strings) {
  let string = "";

  for (let i = 0; i < strings.length; i++) {
    string = string + strings[i];
  }
  return string;
}

const inputStrings2 = ["volleyball", "basketball", "badminton"];
console.log(singleString2(inputStrings2));

function singleString3(array) {
  let newArray = array.reduce(function (single, string) {
    return single + string;
  }, "");
  return newArray;
}

const inputArray3 = ["volleyball", "basketball", "badminton"];
console.log(singleString3(inputArray3));

// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

function sumOfPrices(hashes) {
  let sum = 0;
  let i = 0;

  while (i < hashes.length) {
    sum = sum + hashes[i].price;
    i++;
  }
  return sum;
}

const inputHashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(sumOfPrices(inputHashes));

function sumOfPrices2(hashes) {
  let sum = 0;

  for (let i = 0; i < hashes.length; i++) {
    sum = sum + hashes[i].price;
  }
  return sum;
}

const inputHashes2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(sumOfPrices2(inputHashes2));

function sumOfPrices3(hashes) {
  let sum = hashes.reduce(function (sum, hash) {
    return sum + hash.price;
  }, 0);
  return sum;
}

const inputHashes3 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(sumOfPrices3(inputHashes3));