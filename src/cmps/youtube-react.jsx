import YouTube from 'react-youtube';
import { loadPlayer } from '../store/player.action';


export function Soundplayer({ playerId }) {
  const opts = {
    height: '00',
    width: '00',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  function _onReady(event) {
    event.target.pauseVideo()
    loadPlayer(event.target)
    // console.log('event.target',event.target)
    // console.log('event.target',event.target.getDuration())    
  }

  return <div>
    <YouTube videoId={playerId} opts={opts} onReady={_onReady} />

  </div>
}


