// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

function shortestName(items) {
  let shortest = items[0];

  for (let i = 0; i < items.length; i++) {
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
