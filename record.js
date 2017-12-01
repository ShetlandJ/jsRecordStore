var _ = require("lodash");

var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype = {
  details: function(record){
    return "Artist: " + record.artist + ", Title: " + record.title + ", Genre: " + record.genre + ", Price: " + record.price;
  }
};

module.exports = Record;
