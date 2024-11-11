// Start with an array of strings and create a new array with only the strings that start with the letter "w".
// For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

function onlyW(array) {
  let newArray = [];
  let i = 0;

  while (i < array.length) {
    if (array[i][0] === "w") {
      newArray.push(array[i]);
    }
    i++;
  }
  return newArray;
}

const inputArray = ["winner", "winner", "chicken", "dinner"];
console.log(onlyW(inputArray));

function onlyW2(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === "w") {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const inputArray2 = ["winner", "winner", "chicken", "dinner"];
console.log(onlyW2(inputArray2))

function onlyW3(array) {
  let newArray = array.filter(function (string) {
    return string[0] === "w";
  });
  return newArray;
}

const inputArray3 = ["winner", "winner", "chicken", "dinner"];
console.log(onlyW3(inputArray3));

// Use a nested loop to convert an array of string arrays into a single string.
// For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama".

function stringConverter(array) {
  let singleString = "";
  let index1 = 0;

  while (index1 < array.length) {
    let stringPair = array[index1];
    let index2 = 0;
    while (index2 < stringPair.length) {
      let string = stringPair[index2];
      singleString = singleString + string;
      index2++;
    }
    index1++;
  }
  return singleString;
}

const inputArray5 = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
console.log(stringConverter(inputArray5));

// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function storeWords(array, word1, word2) {
  array.push(word1, word2);
  return array;
}

const inputArray6 = ["sun", "mountain", "waterfall"];
console.log(storeWords(inputArray6, "valley", "meadow"));