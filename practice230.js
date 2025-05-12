// Write a Product class that stores the name, price, and metadata, where metadata is a hash that stores additional information about the product.

class Product {
  constructor(name, price, metadata) {
    this.name = name;
    this.price = price;
    this.metadata = metadata;
  }
}

const product = new Product("Apple", 500, { model: "Macbook", warranty: 2 });
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
      const randomNumber = Math.floor(Math.random() * (i + 1));
      [this.songs[i], this.songs[randomNumber]] = [
        this.songs[randomNumber],
        this.songs[i],
      ];
    }
  }

  displaySongs() {
    this.songs.forEach((song) => {
      console.log("-" + song);
    });
  }
}

const playlist = new Playlist("Playlist:");
playlist.addSong("Dancing in the moonlight");
playlist.addSong("Man in me");
playlist.addSong("Like a rolling stone");
playlist.addSong("The sound of silence");
playlist.addSong("Pricetag");
playlist.displaySongs();
playlist.removeSong("Pricetag");
playlist.displaySongs();
playlist.shuffleSongs();
playlist.displaySongs();
