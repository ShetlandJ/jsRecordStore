var assert = require("assert")
var RecordStore = require("../record_store.js")
var Record = require("../record.js")
var RecordCollector = require("../record_collector.js")

describe( "Record Store", function(){

  var recordStore;
  var recordStore2;
  var record;
  var recordCollector;
  var recordCollector2


  beforeEach(function(){

    record1 = new Record("Les Savy Fav", "Go Forth", "Rock", 8);
    record2 = new Record("At The Drive-In", "Interalia", "Rock", 10);
    record3 = new Record("Rollins Band", "Weight", "Heavy Rock", 5);
    record4 = new Record("T-Bone Burnett", "Tooth Of Crime", "Folk", 13);
    record5 = new Record("XTC", "Nonsuch", "New Wave", 7);

    recordCollector = new RecordCollector("James", 100);

    recordCollector.collection.push(record3);
    recordCollector.collection.push(record4);
    recordCollector.collection.push(record5);


    recordStore = new RecordStore("Big Al's Records", "Glasgow", []);
    recordStore2 = new RecordStore("Big Steve's Records", "Lenzie", [record1, record2, record3, record4]);
  });

  it("should have a name", function(){
    assert.strictEqual(recordStore.name, "Big Al's Records");
  });

  it("should have a town", function(){
    assert.strictEqual(recordStore.city, "Glasgow");
  });

  it("should have an inventory that starts with 0", function(){
    assert.strictEqual(recordStore.inventory.length, 0);
  });

  it("should have a starting balance of 10,000", function(){
    assert.strictEqual(recordStore.balance, 10000)
  });

  it("should be able to add records to its inventory", function(){
    recordStore.add(record1)
    recordStore.add(record2)
    recordStore.add(record3)
    recordStore.add(record4)

    assert.strictEqual(recordStore.inventory.length, 4)
  });

  it("should be able to print out inventory", function(){
    var recordStoreInventory = recordStore2.inventory;
    assert.deepStrictEqual(recordStore2.getInventory(), recordStoreInventory );
  });

  it("should be able to sell a record", function(){
    recordStore2.sell(record1, recordCollector);

    assert.strictEqual(recordCollector.collection.length, 4);
    assert.strictEqual(recordCollector.cash, 92);

    assert.strictEqual(recordStore2.inventory.length, 3);
    assert.strictEqual(recordStore2.balance, 10008);
  });

  it("shouldn't be able to sell a record to a customer who can't afford", function(){
    recordCollector2 = new RecordCollector("Brian", 0);
    recordCollector2.collection.push(record1);

    assert.strictEqual(recordStore2.sell(record1, recordCollector2), "You don't have enough money!");

    assert.strictEqual(recordCollector2.collection.length, 1);
    assert.strictEqual(recordCollector2.cash, 0);
    //
    // assert.strictEqual(recordStore2.inventory.length, 3);
    // assert.strictEqual(recordStore2.balance, 10000);
  });

  it("can't purchase from a customer if the customer doesn't actually own the record", function(){

    assert.strictEqual(recordStore2.buy(record1, recordCollector), "You can't sell that return, you don't own it, pal!");
    assert.strictEqual(recordCollector.cash, 100);
    assert.strictEqual(recordCollector.collection.length, 3);
  });

  it("should be able to buy a record from a collector", function(){

    recordStore2.buy(record5, recordCollector);

    assert.strictEqual(recordCollector.cash, 112.25);
    assert.strictEqual(recordCollector.collection.length, 2);
    assert.strictEqual(recordStore2.balance, 9987.75);
  });

  it("should let the owner know if they try to sell a record that doesn't exist", function(){

    assert.strictEqual(recordStore2.buy(record5, recordCollector2), "You can't sell that return, you don't own it, pal!");
  });

  it("should be able to calculate the value of all the records in the inventory", function(){
    assert.strictEqual(recordStore2.valueOfRecords(), 36);
  });

  it("should be able to give the owner a financial report", function(){
    assert.strictEqual(recordStore2.financeReport(), "The shop's balance currently sits at: £10000. The total value of the records in your inventory is: £36. The total value of the shop is £10036");
  });

  it("should be able to return records by genre", function(){
    var rockArray = [record1, record2]
    assert.deepStrictEqual(recordStore2.byGenre("Rock"), rockArray);
  });



});
