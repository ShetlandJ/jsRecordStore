var assert = require("assert")
var Record = require("../record")

describe( "Record", function(){

  var record;

  beforeEach(function(){
    record = new Record("Les Savy Fav", "Go Forth", "Alt Rock", 8);
  });

  it("should have an artist", function(){
    assert.strictEqual(record.artist, "Les Savy Fav");
  });

  it("should have a title", function(){
    assert.strictEqual(record.title, "Go Forth");
  });

  xit("should have a genre");
  xit("should have a price");


});
