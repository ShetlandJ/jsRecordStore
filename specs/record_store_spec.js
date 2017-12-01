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

    recordStore = new RecordStore("Big Al's Records", "Glasgow", []);
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

  xit("should have a balance");
  xit("should have be able to add records to its inventory");

  });
