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

const song = new Song("White Room", "Cream", "4:58");
console.log(song);
song.printInfo();
