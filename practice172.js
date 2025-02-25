// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }
}

const song = new Song("Someday", "The Strokes", "3:02");
console.log(song);
