import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const saveTime = localStorage.getItem(STORAGE_KEY);
if (saveTime) {
  player.setCurrentTime(saveTime);
}
