var _ = require("lodash");

var RecordStore = function(name, city, inventory){
  this.name = name;
  this.city = city;
  this.inventory = inventory;
  this.balance = 10000;
};

RecordStore.prototype = {
  add: function(record){
    this.inventory.push(record);
  },

  getInventory: function() {
    var recordDetails = [];
    for (var record of this.inventory){
      recordDetails.push(record);
    }
    return recordDetails;
  },

  buy: function(record, collector){
    if (collector.collection.includes(record)) {
      if (this.inventory.includes(collector.sell(record))) {

        var recordBuyCostHalved = (record.price / 2);
        this.balance -= recordBuyCostHalved;
        collector.cash += recordBuyCostHalved;

      } else {
        var recordBuyCost = (record.price + (record.price * 0.75));
        this.balance -= recordBuyCost;
        collector.cash += recordBuyCost;
      }
      this.add(record);
    } else {
      return "You can't sell that return, you don't own it, pal!"
    }
  },

  sell: function(record, recordCollector){

    if (recordCollector.cash >= record.price){
      if (this.inventory.includes(record)) {
        this.balance += record.price;
        this.inventory.splice( this.inventory.indexOf(record), 1 );
        recordCollector.buy(record);
      } else {
        return "You don't have that record in your inventory!";
      }
    }
    return "You don't have enough money!"
  },

  valueOfRecords: function(){
    var total = 0;
    for (var record of this.inventory){
      total += record.price;
    }
    return total;
  },

  financeReport: function(){
    var total = (this.balance + this.valueOfRecords());

    return "The shop's balance currently sits at: £" + this.balance + ". The total value of the records in your inventory is: £" + this.valueOfRecords() + ". The total value of the shop is £" + total;
  },

  byGenre: function(genreInput){
    return _.filter(this.inventory, { genre: genreInput });
  },
}
module.exports = RecordStore;
