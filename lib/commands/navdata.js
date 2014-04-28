var drone = require('./../drone/drone');

drone.config('general:navdata_demo', 'TRUE');

module.exports = function(entities) {

  var def = Q.defer();

  drone.once('navdata', function(data) {
    def.resolve(data);
  });

  return def.promise;

};
