// Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    const index = this.songs.indexOf(song);
    if (index > -1) {
      this.songs.splice(index, 1);
    }
  }

  displaySongs() {
    console.log("Here are some songs:");
    this.songs.forEach((song) => {
      console.log("-" + song);
    });
  }

  shuffleSongs() {
    for (let i = this.songs.length - 1; i > 0; i--) {
      let randomNumber = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[randomNumber]] = [
        this.songs[randomNumber],
        this.songs[i],
      ];
    }
  }
}

const playlist = new Playlist("Playlist:");
playlist.addSong("In the Meantime");
playlist.addSong("Debaser");
playlist.addSong("I got you babe");
playlist.addSong("Someday");
playlist.removeSong("In the Meantime");
playlist.displaySongs();
playlist.shuffleSongs();
playlist.displaySongs();
