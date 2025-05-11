function fibonacciGenerator(number) {
  let output = [];

  if (number === 1) {
    output = [0];
  } else if (number === 2) {
    output = [0, 1];
  } else {
    output.push(0, 1);
    for (let i = 2; i < number; i++) {
      output.push(output[i - 1] + output[i - 2]);
    }
  }

  return output;
}

const inputNumber = 5;
const result = fibonacciGenerator(inputNumber);
console.log(result);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result2 = converter(inputPeople);
console.log(result2);
