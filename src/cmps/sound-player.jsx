import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { loadPlayer } from '../store/player.action';

export function SoundPlayer({ playerId }) {
  const opts = {
    height: '00',
    width: '00',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  async function _onReady(event) {
    console.log('GOT A NEW SONG')
    console.log('SONG IS READY IN SOUND PLAYER:', event.target)
    try {
      await loadPlayer(event.target)
      event.target.playVideo()

    } catch (err) {
      console.log('cant load player:', err)

    }
    // console.log('event.target',event.target.getDuration())    
  }

  return <div>
    <YouTube videoId={playerId} opts={opts} onReady={_onReady} />
  </div>
}


