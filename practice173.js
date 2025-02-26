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
