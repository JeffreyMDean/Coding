
// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

function numberAdder(initialNum, num1, num2, num3) {
  let array = [initialNum];
  array.push(num1, num2, num3);
  return array;
}

const result = numberAdder(1, 3, 5, 2);
console.log(result);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

function caseChanger(stringsArray) {
  stringsArray[2] = stringsArray[2].toUpperCase();
  return stringsArray;
}

const inputArray = ["blue", "green", "purple"];
const result2 = caseChanger(inputArray);
console.log(result2);

// Create an array to store 3 names. Then print out each name on separate lines with a while loop.

function namePrinter(namesArray) {
  let i = 0;

  while (i < namesArray.length) {
    console.log(namesArray[i]);
    i++;
  }
  return null;
}

const inputArray2 = ["Bob", "Bill", "Jake"];
const result3 = namePrinter(inputArray2);
console.log(result3);