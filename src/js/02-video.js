
 const Vimeo = require('@vimeo/player');


 const playerEl = document.querySelector('#vimeo-player');
 const player = new Vimeo.Player(playerEl);
//     player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });