function beerOnTheWall(numOfBottles) {
  while (numOfBottles > 0) {
    let bottleword = "bottles";
    if (numOfBottles === 1) {
      bottleword = "bottle";
    }
    console.log(numOfBottles + " " + bottleword + " of beer on the wall.");
    console.log(numOfBottles + " " + bottleword + " of beer,");
    console.log("Take one down, pass it around,");

    numOfBottles--;

    bottleword = "bottles";
    if (numOfBottles === 1) {
      bottleword = "bottle";
    }

    console.log(numOfBottles + " " + bottleword + " of beer on the wall");
  }

  console.log("No More bottles of beer on the wall.");
}

const numberOfBottles = 99;
beerOnTheWall(numberOfBottles);
