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
  }
};

module.exports = RecordStore;
