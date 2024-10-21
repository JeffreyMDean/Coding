// Start with an array of numbers and create a new array with only the numbers less than 10.
// For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

function numbersLessThanTen(array) {
  let newArray = [];
  let index = 0;

  while (index < array.length) {
    if (array[index] < 10) {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}

const inputArray = [8, 23, 0, 44, 1980, 3];
console.log(numbersLessThanTen(inputArray));

function numbersLessThanTen2(array) {
  let newArray = [];
                         // parameter of the callback functino
  array.forEach(function (number) {
    if (number < 10) {
      newArray.push(number);
    }
  });
  return newArray;
}

const inputArray2 = [8, 23, 0, 44, 1980, 3];
console.log(numbersLessThanTen2(inputArray2));

function numbersLessThanTen3(array) {
  let newArray = array.filter(function (number) {
    return number < 10;
  });
  return newArray;
}

const inputArray3 = [8, 23, 0, 44, 1980, 3];
console.log(numbersLessThanTen3(inputArray3));

// Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
// For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

function noB(array) {
  let newArray = [];
  let index = 0;

  while (index < array.length) {
    if (array[index][0] !== "b") {
      newArray.push(array[index]);
    }
    index++;
  }
  return newArray;
}

const inputArray4 = ["big", "little", "good", "bad"];
console.log(noB(inputArray4));

function noB2(array) {
  let newArray = [];

  array.forEach(function (string) {
    if (string[0] !== "b") {
      newArray.push(string);
    }
  });
  return newArray;
}

const inputArray5 = ["big", "little", "good", "bad"];
console.log(noB(inputArray5));

function noB3(array) {
  let newArray = array.filter(function (string) {
    return string[0] !== "b";
  });
  return newArray;
}

const inputArray6 = ["big", "little", "good", "bad"];
console.log(noB3(inputArray6));