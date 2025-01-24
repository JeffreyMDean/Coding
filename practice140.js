// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function stringCombiner(strings) {
  return strings.reduce((single, string) => {
    return single + string;
  }, "");
}

const inputStrings = ["volleyball", "basketball", "badminton"];
const result = stringCombiner(inputStrings);
console.log(result);

// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbers) {
  let i = 0;

  while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
  }
}

const inputNumbers = [2, 1, 3, 6, 0];
numberPrinter(inputNumbers);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

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
