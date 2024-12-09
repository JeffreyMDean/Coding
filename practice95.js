// Create an array to store 3 words. Then add two more words to the array and print the array on one line.

function wordAdder(words, word1, word2) {
  words.push(word1, word2);
  return words;
}

const inputWords = ["bear", "wolf", "coyote"];
const result = wordAdder(inputWords, "zebra", "shark");
console.log(result);

// Create an array to store 4 letters. Then change the second letter to a number and print the array on one line.

function letterChanger(letters) {
  letters[1] = 4;
  return letters;
}

const inputLetters = ["a", "d", "m", "i"];
const result2 = letterChanger(inputLetters);
console.log(result2);

// Create an array to store 3 names. Then print out each name on separate lines with a while loop.

function namePrinter(names) {
  let i = 0;

  while (i < names.length) {
    console.log(names[i]);
    i++;
  }
}

const inputNames = ["Stephanie", "Scott", "Mary"];
const result3 = namePrinter(inputNames);
console.log(result3);

// Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.

function author(book) {
  return book[2]["author"];
}

const inputBookInfo = [{ title: "awfdf", author: "agfe" }, { title: "ghrshg", author: "ewre" }, { title: "eafg", author: "asfg" }];
const result4 = author(inputBookInfo);
console.log(result4);