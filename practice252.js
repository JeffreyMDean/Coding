// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

function shortestName(items) {
  let shortest = items[0];

  for (let i = 1; i < items.length; i++) {
    if (items[i].name.length < shortest.name.length) {
      shortest = items[i];
    }
  }

  return shortest;
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result = shortestName(inputItems);
console.log(result);

function shortestName2(items) {
  return items.reduce((short, item) => {
    if (item.name.length < short.name.length) {
      return item;
    } else {
      return short;
    }
  }, items[0]);
}

const inputItems2 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result2 = shortestName2(inputItems2);
console.log(result2);

// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1: 3, 8: 9, 2: 16}.

function converter(pairs) {
  let hash = {};

  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i];
    hash[key] = value;
  }

  return hash;
}

const inputPairs = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result3 = converter(inputPairs);
console.log(result3);

function converter2(pairs) {
  let hash = {};

  for (let i = 0; i < pairs.length; i++) {
    let key = pairs[i][0];
    let value = pairs[i][1];
    hash[key] = value;
  }

  return hash;
}

const inputPairs2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result4 = converter2(inputPairs2);
console.log(result4);
