console.log("main js is loaded");

var artist1 = new Artist('Prince');
var artist2 = new Artist('Whitney Houston')
console.log(artist1);
console.log(artist2);

var track1 = new Song("Purple Rain", "Prince");
var track2 = new Song("I will always love you", "Whitney Houston");
var track3 = new Song("I want to dance with somebody", "Whitney Houston");

artist1.addArtist(track1);
artist2.addArtist(track2);
artist2.addArtist(track3);

console.log(artist1.name + ' has ' + artist1.getArtistCount());
console.log(artist2.name + ' has ' + artist2.getArtistCount());
//artist1.deploy();
