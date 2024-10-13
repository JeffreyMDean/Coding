// Start with an array of strings and create a new array with each string's length.
// For example, ["hello", "goodbye"] becomes [5, 7].

function stringsLength() {
  let strings = ["hello", "goodbye"];
  let newArray = [];
  let index = 0;

  while (index < strings.length) {
    newArray.push(strings[index].length);
    index++;
  }
  return newArray;
}

const result = stringsLength();
console.log(result);

function stringsLength2() {
  let strings = ["hello", "goodbye"];
  let newArray = [];
  
  strings.forEach(function (string) {
    newArray.push(string.length);
  });
  return newArray;
}

const result2 = stringsLength2();
console.log(result2);

function stringsLength3() {
  let strings = ["hello", "goodbye"];
  let newArray = strings.map(function (string) {
    return string.length;
  });
  return newArray;
}

const result3 = stringsLength3();
console.log(result3);