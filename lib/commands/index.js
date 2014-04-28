module.exports = {};

var blacklist = [
  /^index\.(js|coffee)$/,
  /^\./
];

require('fs').readdirSync(__dirname)
  .filter(function(file) {
    return !_.any(blacklist, function(regex) {
      return regex.test(file);
    })
  })
  .forEach(function(file) {
    moduleName = file.replace(/\.(js|coffee)$/, '');
    module.exports[moduleName] = require('./' + moduleName);
  });
