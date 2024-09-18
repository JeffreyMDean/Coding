// Write a program that asks the user to input a word. If the word is "marco", print "polo".

function marcoPolo() {
  let input = window.prompt("Enter a word: ");
  if (input === "marco") {
    return "polo"; // fx will stop executing at this point and send backt he value "polo"
  }
  return null;
}

let result = marcoPolo(); //calls mP fx and assigns its return value to result
if (result) {
  console.log(result);
} else {
  console.log("You're not Marco.");
}

function marcoPolo() {
  let input = window.prompt("Enter a word: ");
  if (input === "marco") {
    return "polo";
  }
  return null;
}

let result = marcoPolo();
if (result) {
  console.log("polo");
} else {
  console.log("you're not marco");
}

function marcoPolo() {
  let input = window.prompt("Enter a word: ");
  if (input === "marco") {
    return "polo";
  }
  return null;
}

let result = marcoPolo();
if (result) {
  console.log("polo");
} else {
  console.log("You're not marco");
}

