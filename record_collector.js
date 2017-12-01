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
    }

}

module.exports = RecordCollector;
