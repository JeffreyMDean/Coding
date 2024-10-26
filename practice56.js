// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

function lowestPrice(hashes) {
  let lowest = hashes[0];
  let i = 0;

  while (i < hashes.length) {
    if (hashes[i].price < lowest.price) {
      lowest = hashes[i];
    }
    i++;
  }
  return lowest;
}

const inputHashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(lowestPrice(inputHashes));

function lowestPrice2(hashes) {
  if (hashes.length === 0) return null;

  let lowest = hashes[0];

  for (let i = 1; i < hashes.length; i++) {
    if (hashes[i].price < lowest.price) {
      lowest = hashes[i];
    }
  }
  return lowest;
}

const inputHashes2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(lowestPrice2(inputHashes2));

function lowestPrice3(hashes) {
  if (hashes.length === 0) {
    return null;
  }

  let lowest = hashes.reduce(function (low, hash) {
    if (hash.price < low.price) {
      return hash;
    } else {
      return low;
    }
  }, hashes[0]);
  return lowest;
}

const inputHashes3 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(lowestPrice3(inputHashes3));
