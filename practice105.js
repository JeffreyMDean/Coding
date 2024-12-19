// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let i = 0;
  let pairsObject = {};

  while (i < array.length) {
    let key = array[i][0];
    let value = array[i][1];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputArray = [[1, 3], [8, 9], [2, 16]];
const result = converter(inputArray);
console.log(result);

function converter2(array) {
  let pairsObject = {};

  array.forEach(pair => {
    const [key, value] = pair;
    pairsObject[key] = value;
  });

  return pairsObject;
}

const inputArray2 = [[1, 3], [8, 9], [2, 16]];
const result2 = converter(inputArray2);
console.log(result2);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter(items) {
  let i = 0;
  let result = {};
  
  while (i < items.length) {
    result[items[i].id] = items[i];
    i++;
  }

  return result;
}

const inputItems = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result3 = hashConverter(inputItems);
console.log(result3);

function hashConverter2(items) {
  return items.reduce((result, item) => {
    return result[item.id] = item;
  }, {});
}

const inputItems2 = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
const result4 = hashConverter(inputItems2);
console.log(result4);

// Create an array to store 2 strings. Then add one string to the array and print the array on one line.

function addString(strings, word) {
  strings.push(word);
  return strings;
}

const inputStrings = ["hello", "hi"];
const result5 = addString(inputStrings, "apple");
console.log(result5);

// Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.

function printer(info) {
  console.log(info["firstName"]);
  console.log(info["lastName"]);
  console.log(info["email"]);
}

const inputInfo = { firstName: "Joe", lastName: "Smith", email: "joe@email.com" };
const result6 = printer(inputInfo);
console.log(result6);

// Start with an array of numbers and compute product of all the numbers.
// For example, [5, 10, 8, 3] becomes 1200.

function product(numbers) {
  let i = 0;
  let sum = 1;

  while (i < numbers.length) {
    sum = sum * numbers[i];
    i++;
  }

  return sum;
}

const inputNumbers = [5, 10, 8, 3];
const result7 = product(inputNumbers);
console.log(result7);

function product2(numbers) {
  return numbers.reduce(function (sum, number) {
    return sum * number;
  }, 1);
}

const inputNumbers2 = [5, 10, 8, 3];
const result8 = product(inputNumbers2);
console.log(result8);