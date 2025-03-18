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
    console.log("Shopping cart list: ");
    this.items.forEach((item) => {
      console.log("-" + item);
    });
  }
}

const cart = new ShoppingCart();
cart.addItem("watermelon");
cart.addItem("dates");
cart.addItem("berries");
cart.displayItems();
cart.removeItem("dates");
cart.displayItems();
