module.exports = function(entities) {

  var amount = 0.5;

  this.counterClockwise(amount);

  this.after(500, this.stop);

};

