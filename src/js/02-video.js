
import throttle from 'lodash.throttle';
    
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const currentTime = localStorage.getItem("videoplayer-current-time");
 
    player.on('timeupdate', throttle(getCurrentTime, 1000));

function getCurrentTime(currentTime) {
        
   
        console.log(currentTime.seconds);
        localStorage.setItem("videoplayer-current-time", currentTime.seconds);

     
    }

    
if (currentTime) {
    player.setCurrentTime(currentTime)
}


