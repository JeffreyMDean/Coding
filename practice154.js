// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

function lowestPrice(items) {
  let lowest = items[0];

  for (let i = 0; i < items.length; i++) {
    if (items[i].price < lowest.price) {
      lowest = items[i];
    }
  }

  return lowest;
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result = lowestPrice(inputItems);
console.log(result);

function lowestPrice2(items) {
  return items.reduce((low, item) => {
    if (item.price < low.price) {
      return item;
    } else {
      return low;
    }
  }, items[0]);
}

const inputItems2 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result2 = lowestPrice2(inputItems2);
console.log(result2);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter(array) {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[i].id;
    let value = array[i];
    hash[key] = value;
  }

  return hash;
}

const inputArray = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result3 = converter(inputArray);
console.log(result3);
