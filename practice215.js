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
    console.log("Song list:");
    this.songs.forEach((song) => {
      console.log("-" + song);
    });
  }

  shuffle() {
    for (let i = this.songs.length - 1; i > 0; i--) {
      const randomNumber = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[randomNumber]] = [
        this.songs[randomNumber],
        this.songs[i],
      ];
    }
  }
}

const playlist = new Playlist("My playlist");
playlist.addSong("The Way");
playlist.addSong("Let it Be");
playlist.addSong("Time is on my side");
playlist.removeSong("The Way");
playlist.displaySongs();
playlist.shuffle();
playlist.displaySongs();
