// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string concatenation (the + operator).

function threeColors(color1, color2, color3) {
  return "Three colors are " + color1 + ", " + color2 + ", and " + color3 + ".";
}

const color1 = "blue";
const color2 = "green";
const color3 = "aqua";
console.log(threeColors(color1, color2, color3));

// Write a program that uses variables to store three different colors, then prints out a sentence using the colors with string interpolation (the #{} operator).

function colors(color11, color12, color13) {
  return `Three different colors are ${color11}, ${color12}, and ${color13}`;
}

const color11 = "blue";
const color12 = "green";
const color13 = "aqua";
console.log(colors(color11, color12, color13));

// Write a program that asks the user to enter a name. If the name is not "Santa", print "You're not Santa."

function northPole() {
  let input = window.prompt("Enter a name: ");
  if (input !== "Santa") {
    return "You're not Santa.";
  } else {
    return "You are Santa.";
  }
}

let result = northPole();
console.log(result);