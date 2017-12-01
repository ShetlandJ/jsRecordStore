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
    if (this.inventory.contains(record)) {
      this.balance += record.price;
      this.inventory.splice( this.inventory.indexOf(record), 1 );
    } else {
      console.log("You don't have that record in your inventory!")
    }
  }
}
module.exports = RecordStore;
