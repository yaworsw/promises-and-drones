var fps = 5;

var streams = $('.png-stream');

(function updateVideo() {

  streams.attr('src', '/png-stream?' + +new Date);

  setTimeout(updateVideo, 1000 / fps)
})();
