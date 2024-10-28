// Start with an array of strings and combine them all into a single string, separated by dashes.
// For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

function singleStringDashes(array) {
  let singleString = "-";
  let i = 0;

  while (i < array.length) {
    singleString = singleString + array[i] + "-";
    i++;
  }
  return singleString;
}

const inputArray = ["volleyball", "basketball", "badminton"];
console.log(singleStringDashes(inputArray));

function singleStringDashes2(array) {
  let singleString = "-";

  for (let i = 0; i < array.length; i++) {
    singleString = singleString + array[i] + "-";
  }
  return singleString;
}

const inputArray2 = ["volleyball", "basketball", "badminton"];
console.log(singleStringDashes2(inputArray2));

function singleStringDashes3(array) {
  let singleString = array.reduce(function (single, string) {
    return single + string + "-";
  }, "-");
  return singleString;
}

const inputArray3 = ["volleyball", "basketball", "badminton"];
console.log(singleStringDashes2(inputArray3));

// Start with an array of hashes and find the hash with the shortest name (from the :name key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

function shortestName(hashes) {
  let shortest = hashes[0];
  let i = 0;

  while (i < hashes.length) {
    if (hashes[i].name.length < shortest.name.length) {
      shortest = hashes[i];
    }
    i++;
  }
  return shortest;
}

const inputHashes = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(shortestName(inputHashes));

function shortestName2(hashes) {
  let shortest = hashes[0];

  for (let i = 0; i < hashes.length; i++) {
    if (hashes[i].name.length < shortest.name.length) {
      shortest = hashes[i];
    }
  }
  return shortest;
}

const inputHashes2 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(shortestName2(inputHashes2));

function shortestName3(hashes) {
  let shortest = hashes.reduce(function (short, hash) {
    if (hash.name.length < short.name.length) {
      return hash;
    } else {
      return short;
    }
  }, hashes[0]);
  return shortest;
}

const inputHashes3 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
console.log(shortestName3(inputHashes3));
