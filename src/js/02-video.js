const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const saveVideoTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(playOn, 500));

function playOn({ seconds }) {
    localStorage.setItem(saveVideoTime, seconds);
}

player.setCurrentTime(localStorage.getItem(saveVideoTime))
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            console.log('the time was less than 0 or greater than the video’s duration')
            break;

        default:
            console.log('some other error occurred')
            break;
    }
});



console.log(localStorage.getItem(saveVideoTime));