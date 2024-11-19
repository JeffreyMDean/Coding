// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

function numberAdder(initialNum, num1, num2, num3) {
  let array = [initialNum];
  array.push(num1, num2, num3);
  console.log(array);
}

numberAdder(1, 3, 2, 5);

// Create an array to store 3 strings with lower case letters. Then change the third string to have all capital letters and print the array on one line.

function caseChanger(lowerCaseArray) {
  lowerCaseArray[2] = lowerCaseArray[2].toUpperCase();
  return lowerCaseArray;
}

const inputArray = ["gorilla", "jaguar", "monkey"];
console.log(caseChanger(inputArray));
