var assert = require("assert")
var RecordCollector = require("../record_collector.js");
var Record = require("../record")


describe( "Record Collector", function(){

  var recordCollector;

  beforeEach(function(){
    record1 = new Record("Les Savy Fav", "Go Forth", "Rock", 8);
    record2 = new Record("At The Drive-In", "Interalia", "Rock", 10);

    record5 = new Record("XTC", "Nonsuch", "New Wave", 7);
    record6 = new Record("Built To Spill", "Keep It As A Secret", "Alt Rock", 10);
    record7 = new Record("Primus", "Sailing The Seas Of Cheese", "Funk Rock", 15);


    recordCollector = new RecordCollector("James", 100);
    recordCollector2 = new RecordCollector("Brian", 100)

  });

  it("should have a name", function(){
    assert.strictEqual(recordCollector.name, "James");
  });

  it("should have a budget", function(){
    assert.strictEqual(recordCollector.cash, 100);
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

  it("should be able to view the value of their collection", function(){
    recordCollector.buy(record5)
    recordCollector.buy(record6)

    assert.strictEqual(recordCollector.valueOfRecords(recordCollector.collection), 17);
  });

  it("should be able to view the value of their collection", function(){
    recordCollector.buy(record1)
    recordCollector.buy(record2)

    recordCollector.buy(record5)
    recordCollector.buy(record6)
    recordCollector.buy(record7)

    assert.strictEqual(recordCollector.valueByGenre("Rock"), 18);
  });

  it("should be able to view their most valueable record", function(){
    recordCollector.buy(record5)
    recordCollector.buy(record6)
    recordCollector.buy(record7)

    assert.strictEqual(recordCollector.mostValueable(), record7);
  });

  it("should be able to sort this collection by value", function(){
    recordCollector.buy(record5)
    recordCollector.buy(record6)
    recordCollector.buy(record7)

    assert.deepStrictEqual(recordCollector.sort("price"), [record7, record6, record5]);
  });

  it("should be able to compare the value of their collection against another record collector", function(){
    recordCollector.buy(record5)
    recordCollector.buy(record6)
    recordCollector.buy(record7)

    recordCollector2.buy(record1)
    recordCollector2.buy(record2)
    recordCollector2.buy(record5)
    recordCollector2.buy(record6)
    recordCollector2.buy(record7)

    assert.deepStrictEqual(recordCollector.compare(recordCollector, recordCollector2), "Brian has a more valuable collection! (£50 vs £32)");
  });

  it("should be able to have an equal collection value to another collector", function(){
    recordCollector.buy(record5)
    recordCollector.buy(record6)
    recordCollector.buy(record7)

    recordCollector2.buy(record5)
    recordCollector2.buy(record6)
    recordCollector2.buy(record7)

    assert.deepStrictEqual(recordCollector.compare(recordCollector, recordCollector2), "The value of both collectors' records are the same! (£32)");
  });

});
