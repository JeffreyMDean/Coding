// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(50, 100);
console.log(rectangle);
console.log(rectangle.area());

// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  nameInCaps() {
    return this.name.toUpperCase();
  }
}

const person = new Person("John", 52);
console.log(person);
console.log(person.nameInCaps());

// Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.

class Coordinates {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  print() {
    console.log(
      "The latitude is " +
        this.latitude +
        " and the longitude is " +
        this.longitude +
        "."
    );
  }
}

const coordinates = new Coordinates(107.5, 22.2);
console.log(coordinates);
coordinates.print();

class Coordinates2 {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  print() {
    return (
      "The latitude is " +
      this.latitude +
      " and the longitude is " +
      this.longitude +
      "."
    );
  }
}

const coordinates2 = new Coordinates2(107.5, 22.2);
console.log(coordinates2);
console.log(coordinates2.print());
