// Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

function greaterThan5(items) {
  return items.filter(function (item) {
    return item["price"] > 5;
  });
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result = greaterThan5(inputItems);
console.log(result);

// Start with an array of numbers and create a new array with only the even numbers.
// For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

function evenNumbers(numbers) {
  return numbers.filter((number) => {
    return number % 2 === 0;
  });
}

const inputNumbers = [2, 4, 5, 1, 8, 9, 7];
const result2 = evenNumbers(inputNumbers);
console.log(result2);

// Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

function noB(strings) {
  return strings.filter((string) => {
    return string[0] !== "b";
  });
}

const inputStrings = ["big", "little", "good", "bad"];
const result3 = noB(inputStrings);
console.log(result3);

// Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

function lessThan10(items) {
  let newArray = items.filter((item) => {
    return item.price < 10;
  });

  return newArray;
}

const inputItems2 = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result4 = lessThan10(inputItems2);
console.log(result4);

// Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1: {id: 1, color: "blue", price: 32}, 2: {id: 2, color: "red", price: 12}}.

function converter(items) {
  let hash = {};
  let i = 0;

  while (i < items.length) {
    let key = items[i]["id"];
    let value = items[i];
    hash[key] = value;
    i++;
  }

  return hash;
}

const inputItems3 = [
  { id: 1, color: "blue", price: 32 },
  { id: 2, color: "red", price: 12 },
];
const result5 = converter(inputItems3);
console.log(result5);

// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }

  printInfo() {
    console.log(
      `The song ${this.name} by ${this.artist} is ${this.duration} long.`
    );
    // this.name refers to the actual value stored in the name attribute of the instance of the class.
  }
}

const song = new Song("Machinehead", "Bush", "4:17");
console.log(song);
song.printInfo();
