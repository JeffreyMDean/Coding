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
    console.log("Items in cart: ");
    this.items.forEach(function (item) {
      console.log("-" + item);
    });
  }
}

const cart = new ShoppingCart();
cart.addItem("potato");
cart.addItem("kiwi");
cart.addItem("chicken");
cart.displayItems();
cart.removeItem("kiwi");
cart.displayItems();

// Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  warning() {
    if (this.balance < 100) {
      return "Balance is below $100";
    } else {
      return this.balance;
    }
  }
}

const account = new Account("Joe", 75);
console.log(account);
console.log(account.warning());
