// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function combiner(strings) {
  return strings.reduce((single, string) => {
    return single + string;
  }, "");
}

const inputStrings = ["volleyball", "basketball", "badminton"];
const result = combiner(inputStrings);
console.log(result);

// Start with an array of hashes and compute the sum of the prices (from the :price key).
// For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

function sumOfPrices(prices) {
  let sum = 0;
  let i = 0;

  while (i < prices.length) {
    sum = sum + prices[i].price;
    i++;
  }

  return sum;
}

const inputPrices = [
  { name: "chair", price: 100 },
  { name: "pencil", price: 1 },
  { name: "book", price: 4 },
];
const result2 = sumOfPrices(inputPrices);
console.log(result2);
