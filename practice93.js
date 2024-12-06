// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

function colors(color1, color2, color3) {
  return `Three colors are ${color1}, ${color2}, and ${color3}`;
}

const inputColor1 = "blue";
const inputColor2 = "green";
const inputColor3 = "purple";
const result = colors(inputColor1, inputColor2, inputColor3);
console.log(result);

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function combineStrings(array) {
  let i = 0;
  let singleString = "";

  while (i < array.length) {
    singleString = singleString + array[i];
    i++;
  }
  return singleString;
}

const inputArray = ["volleyball", "basketball", "badminton"];
const result2 = combineStrings(inputArray);
console.log(result2);

function combineStrings2(array) {
  let singleString = "";
  array.forEach(function (string) {
    singleString = singleString + string;
  });
  return singleString;
}

const inputArray2 = ["volleyball", "basketball", "badminton"];
const result3 = combineStrings2(inputArray2);
console.log(result3);

function combineStrings3(array) {
  let singleString = array.reduce(function (single, string) {
    return single + string;
  }, "");
  return singleString;
}

const inputArray3 = ["volleyball", "basketball", "badminton"];
const result4 = combineStrings3(inputArray3);
console.log(result4);

