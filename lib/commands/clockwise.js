module.exports = function(entities) {

  var amount = 0.5;

  this.clockwise(amount);

  this.after(500, this.stop);

};
