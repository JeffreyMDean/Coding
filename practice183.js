// Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    let area = this.width * this.height;
    return area;
  }
}

const rectangle = new Rectangle(40, 50);
console.log(rectangle);
console.log(rectangle.area());
