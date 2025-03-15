// Write a Movie class with attributes and reader/writer methods for title, director, and year. Then write a method that prints out the attributes in a single sentence.

class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  printInfo() {
    console.log(
      "The title of the movie is " +
        this.title +
        " by " +
        this.director +
        " and it was produced in the year 2008."
    );
  }
}

const movie = new Movie("The Hurtlocker", "Kathryn Bigelow", 2008);
console.log(movie);
movie.printInfo();

// Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  formattedMakeAndModel() {
    let sentence =
      "The vehicle is a " + this.make + ", specifically a " + this.model;
    return sentence.toLowerCase();
  }
}

const car = new Car("Toyota", "Tacoma", 2017, "Silver");
console.log(car);
console.log(car.formattedMakeAndModel());

class Car2 {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  formattedMakeAndModel() {
    return `The vehicle is a ${this.make}, specifically a ${this.model}`.toLowerCase();
  }
}

const car2 = new Car2("Toyota", "Rav4", 2017, "Black");
console.log(car2);
console.log(car2.formattedMakeAndModel());

// Write a Point class with attributes and reader/writer methods for x, y, and z coordinates. Then write a method that returns true if all 3 numbers are positive, otherwise it returns false.

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  areNumsPos() {
    if (this.x > 0 && this.y > 0 && this.z > 0) {
      return "True";
    } else {
      return "False";
    }
  }
}

const point = new Point(3, 6, 8);
console.log(point);
console.log(point.areNumsPos());
// areNumsPos has to be called on an instance of Point
// When you define a method (like areNumsPos) inside  class (i.e. Point class), that method becomes part of the prototpye of the class meaning the mehod is associated with instances of the class, not the global scope.
// So, you cannot call areNumsPos() directly unless you reference it through an instance of the class (like point.areNumsPos()), because the method is tied to the instance, not the global scope.

// You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

function whosPaying(names) {
  let randomGen = Math.floor(Math.random() * inputNames.length);
  return inputNames[randomGen] + " is going to buy lunch today!";
}

let inputNames = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
const result = whosPaying(inputNames);
console.log(result);
