// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

function greaterThanFive(items) {
  return items.reduce((array, item) => {
    if (item.price > 5) {
      array.push(item);
    }
    return array;
  }, []);
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result = greaterThanFive(inputItems);
console.log(result);

function greaterThanFive2(items) {
  return items.filter((item) => {
    return item.price > 5;
  });
}

const inputItems2 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result2 = greaterThanFive2(inputItems2);
console.log(result2);

// Start with an array of strings and create a new array with only the strings shorter than 4 letters.
// For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

function lessThanFour(strings) {
  return strings.filter((string) => {
    return string.length < 4;
  });
}

const inputStrings = ["a", "man", "a", "plan", "a", "canal", "panama"];
const result3 = lessThanFour(inputStrings);
console.log(result3);

function lessThanFour2(strings) {
  let newArray = [];

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length < 4) {
      newArray.push(strings[i]);
    }
  }

  return newArray;
}

const inputStrings2 = ["a", "man", "a", "plan", "a", "canal", "panama"];
const result4 = lessThanFour2(inputStrings2);
console.log(result4);
