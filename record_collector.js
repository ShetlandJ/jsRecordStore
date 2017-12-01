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
  },
  valueOfRecords: function(){
    var total = 0;
    for (var record of this.collection){
      total += record.price;
    }
    return total;
  },

}

module.exports = RecordCollector;
