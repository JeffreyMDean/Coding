// Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  caps() {
    return this.name.toUpperCase();
  }
}

const person = new Person("Bill", 30);
console.log(person);
console.log(person.caps());

// Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  warning() {
    if (this.balance < 100) {
      return "Balance is below $100.";
    } else {
      return this.balance;
    }
  }
}

const account = new Account("Greg", 95);
console.log(account);
console.log(account.warning());

// Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a": 1, "b": 2, "c": 3, "d": 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].

function converter(hash) {
  let array = [];

  for (let letter in hash) {
    array.push(letter, hash[letter]);
  }

  return array;
}

const inputHash = { a: 1, b: 2, c: 3, d: 4 };
console.log(converter(inputHash));

// Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

function converter2(books) {
  let hash = {};

  for (let i = 0; i < books.length; i++) {
    let author = books[i].author;
    let title = books[i].title;
    if (hash[author] === undefined) {
      hash[author] = [];
    }
    hash[author].push(title);
  }
  return hash;
}

const inputBooks = [
  { author: "Jeff Smith", title: "Bone" },
  { author: "George Orwell", title: "1984" },
  { author: "Jeff Smith", title: "RASL" },
];
console.log(converter2(inputBooks));
