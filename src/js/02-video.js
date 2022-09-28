const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player
  .setLoop(true)
  .then(function (loop) {
    // loop was turned on
  })
  .catch(function (error) {
    // an error occurred
  });
