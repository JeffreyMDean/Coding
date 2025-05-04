// Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata) {
    this.name = name;
    this.price = price;
    this.metadata = metadata;
  }
}

const product = new Product("Dell", 500, { year: 2000, model: "Insprion" });
console.log("Produce Details:");
console.log(`Name: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Metadata: ${JSON.stringify(product.metadata, null, 2)}`);

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
      const random = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[random]] = [this.songs[random], this.songs[i]];
    }
  }

  displaySongs() {
    console.log("David Bowie:");
    this.songs.forEach((song) => {
      console.log("-" + song);
    });
  }
}

const playlist = new Playlist("My playlist:");
playlist.addSong("Starman");
playlist.addSong("Ziggy Stardust");
playlist.addSong("Space Oddity");
playlist.addSong("Life on Mars");
playlist.displaySongs();
playlist.removeSong("Life on Mars");
playlist.displaySongs();
