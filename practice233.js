// Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

function stringCombos(string) {
  let newArray = [];
  let index1 = 0;

  while (index1 < string.length) {
    let index2 = 0;
    while (index2 < string.length) {
      if (index1 !== index2) {
        newArray.push(string[index1] + string[index2]);
      }
      index2++;
    }
    index1++;
  }

  return newArray;
}

const inputString = ["a", "b", "c", "d"];
const result = stringCombos(inputString);
console.log(result);
