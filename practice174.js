// Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].

function converter(people) {
  let array = [];
  let entries = Object.entries(people);

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    array.push({ id: parseInt(key), ...value });
  }

  return array;
}

const inputPeople = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result = converter(inputPeople);
console.log(result);

function converter2(people) {
  let array = [];

  for (let id in people) {
    array.push({ id: parseInt(id), ...people[id] });
  }

  return array;
}

const inputPeople2 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result2 = converter2(inputPeople2);
console.log(result2);

function converter3(people) {
  return Object.entries(people).map(([id, info]) => {
    return { id: parseInt(id), ...info };
  });
}

const inputPeople3 = {
  321: { name: "Alice", age: 31 },
  322: { name: "Maria", age: 27 },
};
const result3 = converter3(inputPeople3);
console.log(result3);

// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}

const song = new Song("Here Comes Your Man", "Pixies", "3:00");
console.log(song);
