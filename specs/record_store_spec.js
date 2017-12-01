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

    var inventory = [record1, record2, record3, record4];

    recordStore = new RecordStore("Big Al's Records", "Glasgow", inventory);
  });

  xit("should have a name");
  xit("should have a town");
  xit("should have an inventory");
  xit("should have a balance");
  xit("should have be able to add records to its inventory");

  });
