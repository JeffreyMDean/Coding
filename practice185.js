// Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }

  printInfo() {
    console.log(
      "The song is " +
        this.name +
        " by the band " +
        this.artist +
        " and the duration is " +
        this.duration +
        "."
    );
  }
}

// in ES6 methods in classes are defined directly without needing the function keyword. The method is tied to instances of the class, and you don't need 'function' becuases it's a method within the class definition (or body). In other words, since printInfo() is amethod defined inside the Song class, it expects to be called on an instance of that class (i.e. a song object in the current example)

const song = new Song("White Room", "Cream", "4:58");
console.log(song);
song.printInfo();
