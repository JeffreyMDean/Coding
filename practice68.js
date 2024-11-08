// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function combinedString(array) {
  let singleString = "";
  let i = 0;

  while (i < array.length) {
    singleString = singleString + array[i];
    i++;
  }
  return singleString;
}

const inputArray = ["volleyball", "basketball", "badminton"];
console.log(combinedString(inputArray));

function combinedString2(array) {
  let singleString = "";

  for (let i = 0; i < array.length; i++) {
    singleString = singleString + array[i];
  }
  return singleString;
}

const inputArray2 = ["volleyball", "basketball", "badminton"];
console.log(combinedString(inputArray2));

function combinedString3(array) {
  let singleString = array.reduce(function (single, string) {
    return single + string;
  }, "");
  return singleString;
}

const inputArray3 = ["volleyball", "basketball", "badminton"];
console.log(combinedString3(inputArray3));