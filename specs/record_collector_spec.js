var assert = require("assert")
var RecordCollector = require("../record_collector.js");
var Record = require("../record")


describe( "Record Collector", function(){

  var recordCollector;

  beforeEach(function(){
    record5 = new Record("XTC", "Nonsuch", "New Wave", 7);
    record6 = new Record("Built To Spill", "Keep It As A Secret", "Alt Rock", 10);
    record7 = new Record("Primus", "Sailing The Seas Of Cheese", "Funk Rock", 15);


    recordCollector = new RecordCollector("James", 100);
  });

  it("should have a name", function(){
    assert.strictEqual(recordCollector.name, "James");
  });

  it("should be able to add items to their inventory", function(){
    recordCollector.buy(record5)
    assert.strictEqual(recordCollector.collection.length, 1);
  });

  it("should be able to sell records", function(){
    recordCollector.buy(record5)
    recordCollector.buy(record6)
    recordCollector.buy(record7)
    recordCollector.sell(record5);
    assert.strictEqual(recordCollector.collection.length, 2);
  });


});
