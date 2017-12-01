var assert = require("assert")
var RecordCollector = require("../record_collector.js");
var Record = require("../record")


describe( "Record Collector", function(){

  var recordCollector;

  beforeEach(function(){
    record1 = new Record("Les Savy Fav", "Go Forth", "Rock", 8);
    record2 = new Record("At The Drive-In", "Interalia", "Rock", 10);
    record3 = new Record("Rollins Band", "Weight", "Heavy Rock", 5);


    recordCollector = new RecordCollector("James", 100);
  });

  it("should have a name", function(){
    assert.strictEqual(recordCollector.name, "James");
  });

  it("should be able to add items to their inventory", function(){
    recordCollector.buy(record1)
    assert.strictEqual(recordCollector.collection.length, 1);
  });

  it("should be able to sell records", function(){
    recordCollector.buy(record1)
    recordCollector.buy(record2)
    recordCollector.buy(record3)
    recordCollector.sell(record1);
    assert.strictEqual(recordCollector.collection.length, 2);
  });


});
