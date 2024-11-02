// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

function combinedStrings(strings1, strings2) {
  let eachCombined = [];
  let index1 = 0;

  while (index1 < strings1.length) {
    let index2 = 0;
    while (index2 < strings2.length) {
      eachCombined.push(strings1[index1] + strings2[index2]);
      index2++;
    }
    index1++;
  }
  return eachCombined;
}

const inputStrings1 = ["a", "b", "c"];
const inputStrings2 = ["d", "e", "f", "g"]; 
console.log(combinedStrings(inputStrings1, inputStrings2));

// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

function everyCombination(strings) {
  let combined = [];
  let index1 = 0;

  while (index1 < strings.length) {
    let index2 = 0;
    while (index2 < strings.length) {
      if (strings[index1] !== strings[index2]) {
        combined.push(strings[index1] + strings[index2]);
      }
      index2++;
    }
    index1++;
  }
  return combined;
}

const inputStrings = ["a", "b", "c", "d"];
console.log(everyCombination(inputStrings));





