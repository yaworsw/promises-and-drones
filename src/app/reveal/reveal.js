var def = $.Deferred();

require('../commands/commands').then(function(commands) {

  var registerCommandGroup = (function() {
    var registerCommand = function(fn, command) {
      Reveal.addEventListener(command, fn);
    };
    return function(commands) {
      _.each(commands, registerCommand);
    };
  })();

  _.each(commands, registerCommandGroup);

  Reveal.addEventListener('fragmentshown', function(e) {
    var state = $(e.fragment).attr('data-state');
    if (state !== undefined ) {
      if (commands.remote[state] !== undefined) {
        commands.remote[state]();
      } else if (commands.local[state] !== undefined) {
        commands.local[state]();
      }
    }
  });

  def.resolve(Reveal);

});

module.exports = def.promise();
