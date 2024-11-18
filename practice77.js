// Create an array to store 5 numbers. Then print out each number on separate lines with a while loop.

function numberPrinter(numbersArray) {
  let i = 0;

  while (i < numbersArray.length) {
    console.log(numbersArray[i]);
    i++;
  }
  return null;
}

const inputArray = [2, 3, 4, 7, 9];
console.log(numberPrinter(inputArray));

// Create an array to store 1 number. Then add three more numbers to the array and print the array on one line.

function numberAdder(initialNum, num1, num2, num3) {
  let array = [initialNum];
  array.push(num1, num2, num3);
  console.log(array); // makes the fx self contained bc if the fx is primarily responsible for both creating the array and outputting its content, logging inside the fx keeps all related logic in one place
  // limits flexibility bc it may not be reusable when you don't want the array printed.

  // if logging was outside the fx it would be good for seperation of concerns to keep the focus of the fx purely on creating and manipulating data. Since the responsibility of displaying or logging the data is seperated from the core logic of the fx, it makes it easier to reuse.
  // slightly more boilerplate..will need to call console.log outside the fx, which can be less concise for samll simple tasks
}
numberAdder(2, 9, 0, 5);


