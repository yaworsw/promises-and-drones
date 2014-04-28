var map = config.keyMap;
var def = $.Deferred();

require('../commands/commands').then(function(commands) {

  _.each(map, function(command, key) {
    Mousetrap.bind(key, commands.remote[command] || commands.local[command]);
  });

  def.resolve();

});

module.exports = def.promise();
