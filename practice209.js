// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function stringCombiner(strings) {
  return strings.reduce((single, string) => {
    return single + string;
  }, "");
}

const inputStrings = ["volleyball", "basketball", "badminton"];
const result = stringCombiner(inputStrings);
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

// Start with an array of hashes and find the hash with the lowest price (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

function lowestPrice(items) {
  return items.reduce((low, item) => {
    if (item.price < low) {
      return item;
    } else {
      return low;
    }
  }, items[0].price);
}

const inputItems = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result3 = lowestPrice(inputItems);
console.log(result3);
