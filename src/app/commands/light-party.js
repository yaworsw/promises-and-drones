var socket = require('../socket/socket');

var times = 0;

var lightParty = function() {

  socket.emit('left-green-right-red');

  setTimeout(function() {
    socket.emit('left-red-right-green');
    if (times++ < 10) setTimeout(lightParty, 500);
  }, 500);

};

module.exports = function() {
  times = 0;
  lightParty();
};
