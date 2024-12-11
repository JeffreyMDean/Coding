// Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.

function laptopModel(laptops) {
  return laptops[1]["model"];
}

const inputLaptops = [ 
  { brand: "Apple", model: "Mac" },
  { brand: "Apple", model: "Macbook Air" },
  { brand: "Dell", model: 3.0 }
];
const result = laptopModel(inputLaptops);
console.log(result);

// Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.

function voacabulary(words) {
  words["table"] = "awfwr";
  return words;
}

const inputWords = { word: "dgfaeg", tree: "gfaegf" };
const result2 = voacabulary(inputWords);
console.log(result2);


