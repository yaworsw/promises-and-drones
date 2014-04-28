require('../commands/commands').then(function(commands) {

  var socket     = require('../socket/socket');

  console.log(commands)

  var getNavData = commands.remote['navdata'];

  var hudElements = [
    require('./battery')
  ];


  socket.on('navdata', function(data) {

    _.each(hudElements, function(fn) {
      fn(data);
    });

    setTimeout(getNavData, 10000);
  });

  getNavData();

});
