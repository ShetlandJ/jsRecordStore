var assert = require("assert")
var RecordCollector = require("../record_collector.js");
var Record = require("../record")


describe( "Record Collector", function(){

  var recordCollector;

  beforeEach(function(){
    record1 = new Record("Les Savy Fav", "Go Forth", "Rock", 8);

    recordCollector = new RecordCollector("James", 100);
  });

  it("should have a name", function(){
    assert.strictEqual(recordCollector.name, "James");
  });

  it("should be able to add items to their inventory", function(){
    recordCollector.add(record1)
    assert.strictEqual(recordCollector.collection.length, 1);
  });


});
