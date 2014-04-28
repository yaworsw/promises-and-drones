var modal = $('#emergency-modal');

require('../commands/commands').then(function(commands) {

  _.each(commands.remote, function(fn, command) {
    var btn = $('<div class="btn ' + command + '"></div>').html(command).on('click', fn);
    modal.find('.modal-content').append(btn);
  });

});

Mousetrap.bind('ctrl+c', function() {
  $('#emergency-modal').modal('show');
});

module.exports = modal;
