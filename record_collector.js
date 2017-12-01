var _ = require("lodash");

var RecordCollector = function(name, cash){
  this.name = name;
  this.cash = cash;
  this.collection = [];
};

RecordCollector.prototype = {

}

module.exports = RecordCollector;
