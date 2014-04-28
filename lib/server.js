var express = require('express');
var app     = express();
var server  = require('http').createServer(app);

var params  = {
  express: express,
  app:     app,
  server:  server
};

_.each(require('./middleware/'), (function() {
  return function(fn) {
    fn(params);
  };
})());

// exports

module.exports = {
  start: function() {
    var port = process.env.PORT || config.port || 3000;
    server.listen(port, function() {
      console.log();
      console.log('App is now listening on port: '.grey + ('' + port).underline.cyan);
      console.log();
    });
  }
};
