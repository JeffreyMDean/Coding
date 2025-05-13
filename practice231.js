// Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].

function stringCombiner(strings1, strings2) {
  let newArray = [];
  let index1 = 0;

  while (index1 < strings1.length) {
    let letters1 = strings1[index1];
    let index2 = 0;
    while (index2 < strings2.length) {
      let letters2 = strings2[index2];
      newArray.push(letters1 + letters2);
      index2++;
    }
    index1++;
  }

  return newArray;
}

const inputStrings1 = ["a", "b", "c"];
const inputStrings2 = ["d", "e", "f", "g"];
const result = stringCombiner(inputStrings1, inputStrings2);
console.log(result);
