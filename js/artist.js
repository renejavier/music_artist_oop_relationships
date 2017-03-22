console.log("artist js is loaded");

function Artist(name) {
  this.name = name;
  this.songs = [];
}

Artist.prototype.getArtistCount = function() {
  return  this.songs.length;
}

Artist.prototype.addArtist = function(artist) {
  this .songs.push(artist);
}

// Artist.prototype.deploy = function(){
//   for (var i=0, x=this.songs.length; i<x; i++){
//     this.songs[i].playCount();
//   }
// }
