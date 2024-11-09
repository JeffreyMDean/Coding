// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

function lowestPrice(hashes) {
  let low = hashes[0];
  let i = 0;

  while (i < hashes.length) {
    if (hashes[i].price < low.price) {
      low = hashes[i];
    }
    i++;
  }
  return low;
}

const inputHashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(lowestPrice(inputHashes)); 