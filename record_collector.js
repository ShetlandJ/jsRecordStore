var _ = require("lodash");

var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype = {
  add: function(record){
    this.collection.push(record)
  }
}

module.exports = RecordCollector;
