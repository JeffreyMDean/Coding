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

  shuffleSongs() {
    for (let i = this.songs.length - 1; i > 0; i--) {
      let randomNumber = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[randomNumber]] = [
        this.songs[randomNumber],
        this.songs[i],
      ];
    }
  }

  displaySongs() {
    console.log("Playlist:");
    this.songs.forEach((song) => {
      console.log("-" + song);
    });
  }
}

const playlist = new Playlist("My Playlist:");
playlist.addSong("Machinehead");
playlist.addSong("Glycerine");
playlist.addSong("Comedown");
playlist.addSong("Peaches");
playlist.removeSong("Peaches");
playlist.displaySongs();
playlist.shuffleSongs();
playlist.displaySongs();
