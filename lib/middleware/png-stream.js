var stream = require('../drone/png-stream');

var img;

var startStream = (function() {
  var started = false;
  return function() {
    if (started) return;
    stream.on('data', function(data) {
      img = data;
    });
  };
})();

module.exports = function(params) {

  params.app.get('/png-stream', function(req, res) {

    startStream();

    if (!img) {
      res.status(500);
      res.end();
      return;
    }

    res.writeHead(200, {'Content-Type': 'image/png'});
    return res.end(img, 'binary');

  });

};
