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
playlist.addSong("Mr. Jones");
playlist.addSong("Seven Nation Army");
playlist.addSong("New Slang");
playlist.addSong("Ruby Tuesday");
playlist.removeSong("Mr. Jones");
playlist.displaySongs();
playlist.shuffleSongs();
playlist.displaySongs();

// Start with an array of strings and combine them all into a single string.
// For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

function stringCombiner(strings) {
  return strings.reduce((single, string) => {
    return single + string;
  }, "");
}

const inputStrings = ["volleyball", "basketball", "badminton"];
const result = stringCombiner(inputStrings);
console.log(result);
