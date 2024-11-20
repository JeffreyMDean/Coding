// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

function numberAdder(initialNum, num1, num2, num3) {
  let array = [initialNum];
  array.push(num1, num2, num3);
  return array;
}

const result = numberAdder(1, 2, 5, 7);
console.log(result);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

function caseChanger(lowerCaseArray) {
  lowerCaseArray[2] = lowerCaseArray[2].toUpperCase();
  return lowerCaseArray;
}

const inputArray = ["steam", "sauna", "cold"];
console.log(caseChanger(inputArray)); 

// Create an array to store 3 names. Then print out each name on separate lines with a while loop.

function namePrinter(namesArray) {
  let i = 0;

  while (i < namesArray.length) {
    console.log(namesArray[i]);
    i++;
  }
}

const inputArray2 = ["John", "Sara", "Bob"];
namePrinter(inputArray2);