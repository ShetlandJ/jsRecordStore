var assert = require("assert")
var RecordCollector = require("../record_collector.js")

describe( "Record Collector", function(){

  var recordCollector;

  beforeEach(function(){
    recordCollector = new RecordCollector("James");
  });

  it("should have a name", function(){
    assert.strictEqual(recordCollector.name, "James");
  });
