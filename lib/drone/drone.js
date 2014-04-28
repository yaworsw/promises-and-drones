module.exports = require('ar-drone').createClient(config.droneConfig || {});

module.exports.config('video:video_channel', 0);
