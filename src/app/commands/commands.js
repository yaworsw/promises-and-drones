var socket   = require('../socket/socket');

var localCommands = {
  'light-party':      require('./light-party'),
  'panorama-update':  require('./panorama-update')
};

var def = $.Deferred();

var makeCommand = function(command) {
  return function() {
    console.log('Sending command: ', command);
    socket.emit(command);
  };
};

socket.on('commands', function(commandsArray) {

  var remoteCommands = {};

  console.log('Available commands', commandsArray);

  _.each(commandsArray, function(command) {
    window[command] = remoteCommands[command] = makeCommand(command);
  });

  def.resolve({
    local:  localCommands,
    remote: remoteCommands
  });

});

module.exports = def.promise();
