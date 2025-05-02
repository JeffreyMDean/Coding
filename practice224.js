// Start with an array of numbers and create a new array with each number times 3.
// For example, [1, 2, 3] becomes [3, 6, 9].

function timesThree(numbers) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] * 3);
  }

  return newArray;
}

const inputNumbers = [1, 2, 3];
const result = timesThree(inputNumbers);
console.log(result);

// Start with an array of hashes and create a new array of string values from each hash's :name key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

function names(people) {
  return people.reduce((names, person) => {
    names.push(person.name);
    return names;
  }, []);
}

const inputPeople = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const result2 = names(inputPeople);
console.log(result2);

// Start with an array of hashes and create a new array of number values from each hash's :age key.
// For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

function ages(people) {
  return people.reduce((numbers, person) => {
    numbers.push(person.age);
    return numbers;
  }, []);
}

const inputPeople2 = [
  { name: "Alice", age: 27 },
  { name: "Blane", age: 16 },
];
const result3 = ages(inputPeople2);
console.log(result3);

// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

function menu(specials) {
  specials["brunch"] = "french toast";
  return specials;
}

const inputSpecials = {
  breakfastSpecial: "eggs",
  lunchSpecial: "burger",
  dinnerSpecial: "fish",
};
const result4 = menu(inputSpecials);
console.log(result4);

// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function wordAdder(array, word1, word2) {
  array.push(word1, word2);
  return array;
}

const inputArray = ["run", "walk", "sit"];
const inputword1 = "hill";
const inputword2 = "tree";
const result5 = wordAdder(inputArray, inputword1, inputword2);
console.log(result5);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function letterChanger(letters) {
  letters[1] = 5;
  return letters;
}

const letters = ["k", "m", "w", "h"];
const result6 = letterChanger(letters);
console.log(result6);
