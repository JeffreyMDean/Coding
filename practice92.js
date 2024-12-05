// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

function colors(color1, color2, color3) {
  return "Three colors are " + color1 + ", " + color2 + ", and " + color3 + ".";
}

const inputColor1 = "blue";
const inputColor2 = "red";
const inputColor3 = "brown";
const result = colors(inputColor1, inputColor2, inputColor3);
console.log(result);

// Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

function menuModifier(items) {
  items["lasagna"] = 2;
  return items;
}

const inputItems = { potato: .75, pizza: 1, yogurt: 1 };
const result2 = menuModifier(inputItems);
console.log(result2);

// Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.

function bookInfo(book) {
  console.log(book["title"]);
  console.log(book["author"]);
  console.log(book["author"]);
  console.log(book["numberOfPages"]);
  console.log(book["language"]);
}

const inputBook = { title: "asdf", author: "sdgfe", numberOfPages: 450, language: "english" };
const result3 = bookInfo(inputBook);
console.log(result3);