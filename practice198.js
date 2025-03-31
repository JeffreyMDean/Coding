// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter(hash) {
  return Object.entries(hash).reduce((array, [key, value]) => {
    array.push(key, value);
    return array;
  }, []);
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
const result = converter(inputHash);
console.log(result);

// reduce is used when you want ot iterate over an array and "accumulate" or build up a result...in this case, i'm accumulating the keys and values into a flat array
// the accumulator (array) is updated on each iteration, and the final result is returned at the end of the reduce method

function converter2(hash) {
  let flattenedArray = [];

  for (let key in hash) {
    flattenedArray.push(key, hash[key]);
  }

  return flattenedArray;
}

const inputHash2 = { a: 1, b: 2, c: 3, d: 4 };
const result2 = converter2(inputHash2);
console.log(result2);
