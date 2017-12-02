var _ = require("lodash");

var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype = {
  buy: function(record){
    this.collection.push(record);
    this.cash -= record.price;
  },

  sell: function(record){
    this.collection.splice( this.collection.indexOf(record), 1 );
  },

  valueOfRecords: function(collection){
    var total = 0;
    for (var record of collection){
      total += record.price;
    }
    return total;
  },

  valueByGenre: function(genreInput){
    var genreCollection = _.filter(this.collection, { genre: genreInput });
    return this.valueOfRecords(genreCollection);
  },

  mostValueable: function(){
    return _.maxBy(this.collection, "price");
  },

  sort: function(price){
    return _.orderBy(this.collection, [price], ["desc"]);
  },

  compare: function(collector1, collector2){
    var collector1Value = collector1.valueOfRecords(collector1.collection);
    var collector2Value = collector2.valueOfRecords(collector2.collection);

    if (collector1Value > collector2Value) {
      return collector1.name + " has a more valuable collection!" + "(value: " + collector1Value + ")";
    } else if (collector1Value === collector2Value) {
      return "The value of both collectors' records are the same!"
    } else {
      return collector2.name + " has a more valuable collection!" + " (value: " + collector2Value + ")";
    }
  }
};

  module.exports = RecordCollector;
