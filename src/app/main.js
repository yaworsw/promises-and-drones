window.config = require('../../config/config');

require('./reveal/reveal').then(function(Reveal) {

  require('./control/control');

  require('./png-stream/png-stream');

  // require('dronestream/dronestream');

  Reveal.initialize({

    parallaxBackgroundImage: '/assets/bg.png',
    parallaxBackgroundSize: '120px 120px',

    dependencies: [

      // {
      //   src: '/vendor/reveal.js/plugin/highlight/highlight.js',
      //   async: true,
      //   callback: function() { hljs.initHighlightingOnLoad(); }
      // }

    ]

  });

  require('./hud/hud');

});
