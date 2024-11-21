// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

function shortestName(hashesArray) {
  let shortest = hashesArray[0];
  let i = 0;

  while (i < hashesArray.length) {
    if (hashesArray[i].name.length < shortest.name.length) {
      shortest = hashesArray[i];
    }
    i++;
  }
  return shortest;
}

const inputArray = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result = shortestName(inputArray);
console.log(result);

function shortestName2(hashesArray) {
  let shortest = hashesArray[0];

  hashesArray.forEach(function (hash) {
    if (hash.name.length < shortest.name.length) {
      shortest = hash;
    }
  });
  return shortest;
}

const inputArray2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(shortestName2(inputArray2));

function shortestName3(hashesArray) {
  let shortest = hashesArray.reduce(function (short, hash) {
    if (hash.name.length < short.name.length) {
      return hash;
    } else {
      return short;
    }
  }, hashesArray[0]);
  return shortest;
}

const inputArray3 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result2 = shortestName3(inputArray3);
console.log(result2);