// Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.

function converter(array) {
  let i = 0;
  let pairsObject = {};

  while (i < array.length) {
    let key = array[i][0];
    let value = array[i][1];
    pairsObject[key] = value;
    i++;
  }

  return pairsObject;
}

const inputArray = [[1, 3], [8, 9], [2, 16]];
const result = converter(inputArray);
console.log(result);

function converter2(pairs) {
  let pairsObject = {}; // holds final object

  pairs.forEach(pair => {
    const [key, value] = pair; // destructure each pair into key and value
    // pair is used as a temporary reference to each sub-array during the loop. It is necessary for destructuring the array into key and value, but after that it is no longer needed
    // After the destructuring (const [key, value] = pair;), you no longer need pair itself because you've extracted its values into key and value. The array pair was only useful to unpack its elements.
    // this destructuring syntax simply unpacks the two elements of the array into variables key and value, which are used to build the object
    // Note that this local variable 'pair' directly represents the pair parameter from the arrow function in the forEach loop
    pairsObject[key] = value; // add key-value pair to the object
  });

  return pairsObject;
}

const inputPairs = [[1, 3], [8, 9], [2, 16]]; // Input: an array of pairs
const result2 = converter(inputPairs); // Call the function with the pairs array
console.log(result2); // output: { 1: 3, 8: 9, 2: 16 }
