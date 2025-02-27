// Write a Song class with attributes for name, artist, and duration.

class Song {
  constructor(name, artist, duration) {
    this.name = name;
    // this.name sets the name property on the current object being created
    // this.name = name; take the value of the name parameter and assign it to the name property of the new object being created
    // this.name is what connects the parameter name to the name property of the newly created object
    // So, this.name = name; is how we explicitly say: "Hey, set the name property of this specific new object to the value passed as name."
    this.artist = artist;
    this.duration = duration;
  }
}

const song = new Song("Here Comes Your Man", "Pixies", "3:00");
console.log(song);
