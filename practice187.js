// Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  warning() {
    if (this.balance < 100) {
      console.log("Warning: your balance is below $100.");
    } else {
      console.log("Your balance is " + this.balance + ".");
    }
  }
}

const account = new Account("John", 75);
console.log(account);
account.warning();
