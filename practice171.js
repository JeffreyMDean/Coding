// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}

const song = new Song("Turn to Stone", "Electric Light Orchestra", "3:49");
console.log(song);
