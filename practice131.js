// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let value = array[i][1];
    hash[key] = value;
  }

  return hash;
}

const inputArray = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result = converter(inputArray);
console.log(result);

function converter2(array) {
  return array.reduce((hash, pair) => {
    hash[pair[0]] = pair[1];
    return hash;
  }, {});
}

const inputArray2 = [
  [1, 3],
  [8, 9],
  [2, 16],
];
const result2 = converter2(inputArray2);
console.log(result2);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.

function converter3(items) {
  let hash = {};

  for (let i = 0; i < items.length; i++) {
    let key = items[i].id;
    let value = items[i];
    hash[key] = value;
  }

  return hash;
}

const inputItems = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result3 = converter3(inputItems);
console.log(result3);

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter4(items) {
  return Object.entries(items);
}

const inpuItems2 = { chair: 100, book: 14 };
const result4 = converter4(inpuItems2);
console.log(result4);

function converter5(items) {
  let array = [];

  for (let key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      array.push([key, items[key]]);
    }
  }

  return array;
}

const inpuItems3 = { chair: 100, book: 14 };
const result5 = converter5(inpuItems3);
console.log(result5);

function converter6(items) {
  let array = [];

  Object.entries(items).forEach(function ([name, price]) {
    array.push([name, price]);
  });

  return array;
}

const inpuItems4 = { chair: 100, book: 14 };
const result6 = converter6(inpuItems4);
console.log(result6);
