var _ = require("lodash");

var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype = {
  buy: function(record){
    this.collection.push(record)
  },
  sell: function(record){
    this.collection.splice( this.collection.indexOf(record), 1 );
  }
}

module.exports = RecordCollector;
