var drone  = require('./drone');
var stream = drone.getPngStream();

stream.setMaxListeners(100);

module.exports = stream;
