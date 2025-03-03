// Write a Location class with attributes for latitude and longitude.

class Location {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

const location = new Location(45.3, 102.4);
console.log(location);

// Write an Account class with attributes for name and balance.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
}

const info = new Account("Bill", 35);
console.log(info);

// Write a Movie class with attributes for title, director, and year.

class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }
}

const movie = new Movie("Ride", "Jake Allyn", 2024);
console.log(movie);

// Write a Car class with attributes for make, model, year, and color.

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car = new Car("Honda", "Civic", 2016, "Black");
console.log(car);
