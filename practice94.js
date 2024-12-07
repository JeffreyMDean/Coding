// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

function shortestName(items) {
  let i = 0;
  let shortest = items[0];

  while (i < items.length) {
    if (items[i].name.length < shortest.name.length) {
      shortest = items[i];
    }
    i++;
  }
  return shortest;
}

const inputItems = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result = shortestName(inputItems);
console.log(result);

function shortestName2(items) {
  let shortest = items[0];

  for (let i = 0; i < items.length; i++) {
    if (items[0].name.length < shortest.name.length) {
      shortest = items[0];
    }
  }
  return shortest;
}

const inputItems2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result2 = shortestName(inputItems2);
console.log(result2);

function shortestName3(items) {
  let shortest = items.reduce(function (short, item) {
    if (item.name.length < short.name.length) {
      return item;
    } else {
      return short;
    }
  }, items[0]);
}

const inputItems3 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
const result3 = shortestName(inputItems3);
console.log(result3);