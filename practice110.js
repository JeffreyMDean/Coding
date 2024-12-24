// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function hashConverter(items) {
  let i = 0;
  let hash = {};

  while (i < items.length) {
    let key = items[i].id;
    let value = items[i];
    hash[key] = value;
    i++;
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result = hashConverter(inputItems);
console.log(result);

function hashConverter2(items) {
  let hash = {};

  items.forEach((item) => {
    let key = item.id;
    let value = item;
    hash[key] = value;
  });

  return hash;
}

const inputItems2 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result2 = hashConverter(inputItems2);
console.log(result2);

function hashConverter3(items) {
  return items.reduce((hash, item) => {
    return (hash[item.id] = item);
  }, {});
}

const inputItems3 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result3 = hashConverter(inputItems3);
console.log(result3);
