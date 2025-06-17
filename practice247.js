// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function singleString(strings) {
  return strings.reduce((single, string) => {
    return single + string;
  }, "");
}

const inputStrings = ["volleyball", "basketball", "badminton"];
const result = singleString(inputStrings);
console.log(result);

// Start with an array of numbers and compute the the minimum number.
// For example, [5, 10, 8, 3, 9] becomes 3.

function minimumNumber(numbers) {
  return numbers.reduce((min, number) => {
    if (number < min) {
      return number;
    } else {
      return min;
    }
  }, numbers[0]);
}

const inputNumbers = [5, 10, 8, 3, 9];
const result2 = minimumNumber(inputNumbers);
console.log(result2);
