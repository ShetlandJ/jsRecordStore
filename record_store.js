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
  sell: function(record){
    if (this.inventory.includes(record)) {
      this.balance += record.price;
      this.inventory.splice( this.inventory.indexOf(record), 1 );
    } else {
      return "You don't have that record in your inventory!";
    }
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
