var assert = require("assert")
var RecordStore = require("../record_store")
var Record = require("../record")

describe( "Record Store", function(){

  var recordStore;
  var record;


  beforeEach(function(){

    record1 = new Record("Les Savy Fav", "Go Forth", "Rock", 8);
    record2 = new Record("At The Drive-In", "Interalia", "Rock", 10);
    record3 = new Record("Rollins Band", "Weight", "Heavy Rock", 5);
    record4 = new Record("T-Bone Burnett", "Tooth Of Crime", "Folk", 13);
    record5 = new Record("XTC", "Nonsuch", "New Wave", 7);


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
    assert.deepStrictEqual(recordStore2.getInventory(), recordStoreInventory )
  });

  it("should be able to sell a record", function(){
    recordStore2.sell(record1);
    assert.strictEqual(recordStore2.inventory.length, 3)
    assert.strictEqual(recordStore2.balance, 10008)
  });

  it("should let the owner know if they try to sell a record that doesn't exist", function(){
    assert.strictEqual(recordStore2.sell(record5), "You don't have that record in your inventory!")
  });



});
