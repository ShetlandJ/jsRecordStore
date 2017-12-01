var assert = require("assert")
var Record = require("../record")

describe( "Record", function(){

  var record;

  beforeEach(function(){
    record = new Record("Les Savy Fav", "Go Forth", "Rock", 8);
  });

  it("should have an artist", function(){
    assert.strictEqual(record.artist, "Les Savy Fav");
  });

  it("should have a title", function(){
    assert.strictEqual(record.title, "Go Forth");
  });

  it("should have a genre", function(){
    assert.strictEqual(record.genre, "Rock");
  });

  it("should have a price", function(){
    assert.strictEqual(record.price, 8);
  });

  it("should be able to return the details of a record as a string", function(){
    assert.strictEqual(record.details(record), "Artist: Les Savy Fav, Title: Go Forth, Genre: Rock, Price: 8");
  });


});
