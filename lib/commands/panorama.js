var stream = require('../drone/png-stream');

var takePic = (function() {
  var i = 1;
  return function(client) {
    var def = Q.defer();
    stream.once('data', function(data) {
      var fileName = path.join(ROOT, 'panorama', i++ + '.png');
      fs.writeFile(fileName, data, function(err) {
        if (err) def.reject(err);
        else     def.resolve(client);
      });
    });
    return def.promise;
  };
})();

var rotate = function(client) {
  var def = Q.defer();
  client.clockwise(0.2);
  client.after(500, function() {
    client.stop();
    setTimeout(function() {
      client.animateLeds('fire', 12, 1);
    }, 2500);
    setTimeout(function() {
      def.resolve(client);
    }, 3000);
  });
  return def.promise;
};

module.exports = function() {

  var drone  = this;

  var rotateAndTakePic = function(promise) {
    return Q.when(promise).then(rotate).then(takePic);
  };

  var promise = drone;
  for (var i = 0; i < 8; i++) {
    promise = rotateAndTakePic(promise);
  }

  promise.then(function() {
    console.log('Panorama finished!');
  });

};



