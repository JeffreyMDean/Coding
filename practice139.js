// Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

function noB(strings) {
  return strings.filter((string) => {
    if (string[0] !== "b") {
      return string;
    }
  });
}

const inputStrings = ["big", "little", "good", "bad"];
const result = noB(inputStrings);
console.log(result);

// Start with an array of numbers and create a new array with only the odd numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].

function oddNumbers(numbers) {
  return numbers.filter((number) => {
    return number % 2 === 1;
  });
}

const inputNumbers = [2, 4, 5, 1, 8, 9, 7];
const result2 = oddNumbers(inputNumbers);
console.log(result2);

// look up if .filter automatically creates a new array

// Convert a hash into an array of arrays.
// For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].

function converter(items) {
  return Object.entries(items);
}

const inputItems = { chair: 100, book: 14 };
const result3 = converter(inputItems);
console.log(result3);

// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321: {name: "Alice", age: 31}, 322: {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter3(people) {
  let array = [];

  for (let id in people) {
    if (people.hasOwnProperty) {
      array.push({ id: parseInt(id), ...people[id] });
    }
  }

  return array;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result4 = converter3(inputPeople);
console.log(result4);

function converter4(people) {
  return Object.entries(people).map(([key, value]) => ({
    id: parseInt(key),
    ...value,
  }));
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result5 = converter4(inputPeople2);
console.log(result5);
