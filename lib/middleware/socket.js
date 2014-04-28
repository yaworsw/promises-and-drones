var drone    = require('./../drone/drone');
var commands = require('./../commands/');

module.exports = function(params) {

  var io = require('socket.io').listen(params.server, { log: false });

  io.on('connection', function(socket) {

    var commandKeys = Object.keys(commands);

    socket.emit('commands', commandKeys);

    _.each(commandKeys, function(command) {
      socket.on(command, function() {
        console.log();
        console.log('Received command'.grey, command.red);
        console.log();
        var result = commands[command].apply(drone, slice(arguments));
        if (result) {
          Q.when(result).then(function(result) {
            console.log();
            console.log('Sent response'.grey, command.red);
            console.log();
            socket.emit(command, result);
          });
        }
      });
    });

  });

};
