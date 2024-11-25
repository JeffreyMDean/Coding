// Create an array to store 2 strings. Then add one string to the array and print the array on one line.

function stringAdder(stringsArray, string1) {
  stringsArray.push(string1);
  return stringsArray;
}

const inputArray = ["cold", "hot"];
const result = stringAdder(inputArray, "water");
console.log(result);

// Create an array to store 5 numbers. Then change the first number to 10 times its original value and print the array on one line.

function numberMultiplier(numbersArray) {
  numbersArray[0] = numbersArray[0] * 10;
  return numbersArray;
}

const inputArray2 = [1, 2, 9, 8, 3];
const result2 = numberMultiplier(inputArray2);
console.log(result2);

// Create an array to store 2 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbersArray) {
  let i = 0;
  while (i < numbersArray.length) {
    console.log(numbersArray[i]); // each call to console.log() prints it argument on a new line by default
    i++;
  }
  return null;
}

const inputArray3 = [4, 9];
const result3 = numberPrinter(inputArray3);
console.log(result3);

// Create an array to store names of 3 different countries. Then add one more country and print the array one line.

function addCountry(countriesArray, country1) {
  countriesArray.push(country1);
  return countriesArray;
}

const inputArray4 = ["England", "Ireland", "Germany"];
const result4 = addCountry(inputArray4, "Argentina");
console.log(result4);



