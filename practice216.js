// Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addItem(song) {
    this.songs.push(song);
  }

  displaySongs() {
    this.songs.forEach((song) => {
      console.log("-" + song);
    });
  }

  removeSong(song) {
    const index = this.songs.indexOf(song);
    if (index > -1) {
      this.songs.splice(index, 1);
    }
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

const playlist = new Playlist("My Playlist:");
playlist.addItem("I think we're along now");
playlist.addItem("Better together");
playlist.addItem("1979");
playlist.removeSong("1979");
playlist.displaySongs();
playlist.shuffleSongs();
playlist.displaySongs();
