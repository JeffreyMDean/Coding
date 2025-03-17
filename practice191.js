// Write a ShoppingCart class that stores an array of items with methods to add an item, remove an item, and display all the items.

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  displayItems() {
    console.log("Items in the shopping cart: ");
    this.items.forEach((item) => {
      console.log("- " + item);
    });
  }
}

const cart = new ShoppingCart();
cart.addItem("Yogurt");
cart.addItem("Bread");
cart.addItem("Chocholate");
cart.displayItems();
cart.removeItem("Bread");
cart.displayItems();

// indexOf() returns the index of the first occurence of the specified item, or -1 if the item is not found
// this.items.indexOf(item) searches for the first occurence of item in the array this.items.
// if the item is found, indexOf returns the index of the item (a number representing its position in the array). If the item is not found, indexOf returns -1
// if (index > -1) checks if whether the item exists in the array. If the index is greater than -1 (meaning the item was found in the array), the code inside the if block will run.
// if index(item) returns -1, this condition will be false, and the code inside the if block will NOT execute
// this.items.splice(index, 1);   if the item found (i.e. index > -1) this line of code removes the item from the items array.
// this.items.splice(index, 1) uses the splice method to modify the array
// the first argument (index) tells splice where to start (i.e., at the position of the item you want to remove.) The second argument (1) tells splice how many items to remove starting from the specified index. In this case, it removes 1 item at the specified position.

class Box {}

const box = new Box();
console.log(box);

// the constrcutor() is not strcitly necessary for creating an instance. If you don't define a constructor, JS will still create an isntance of the class with a default constrcutor.
// However, if you want to initialize some properties or do some setup when an instance is created, you use the constructor()
