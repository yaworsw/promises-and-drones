var images = $('.panorama-image');

var update = (function() {
  var i       = 0;
  var updateFunctions = _.reduce(images, function(acc, img, index) {
    var $img = $(img);
    var src  = $img.attr('src');
    acc.push(function() {
      $img.attr('src', src + '?' + i++);
    });
    return acc;
  }, []);
  return function() {
    for (var i = updateFunctions.length - 1; i >= 0; i--) {
      updateFunctions[i]();
    }
  };
})();

module.exports = function() {

  for (var i = 1; i < 600; i++) {
    setTimeout(update, i * 100);
  }

};
