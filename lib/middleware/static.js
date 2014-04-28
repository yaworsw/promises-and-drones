module.exports = function(params) {

  var app     = params.app;
  var express = params.express;

  app.use(                       express.static(path.join(PUBLIC_DIR)));
  app.use('/vendor',             express.static(path.join(ROOT, 'bower_components')));
  app.use('/vendor/dronestream', express.static(path.join(ROOT, 'node_modules', 'dronestream')));

  app.use('/panorama',           express.static(path.join(ROOT, 'panorama')));

};
