// Make a hash to store 3 different states and their capitals. Then add a new state and capital and print the hash to see the new state/capital added.

function addStateCapital(hash) {
  hash["Illinois"] = "Chicago";
  return hash;
}

const inputHash = { Ohio: "Columbus", Arkansas: "Little Rock", "New York": "Albany" };
const result = addStateCapital(inputHash);
console.log(result);

// Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.

function specs(laptop) {
  console.log(laptop["brand"]);
  console.log(laptop["model"]);
  console.log(laptop["year"]);
}

const inputLaptop = { brand: "Apple", model: "Macbook Air", year: 2024 };
const result2 = specs(inputLaptop);
console.log(result2);

