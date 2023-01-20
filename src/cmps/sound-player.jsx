import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { loadPlayer } from '../store/player.action';

export function SoundPlayer({ playerId }) {
  const player = useSelector(storeState => storeState.playerModule.player)
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
    console.log('event.target', event.target)
    try {
      console.log('TRING TO LOAD A NEW SONG')
      await loadPlayer(event.target)
      console.log('LOADED A NEW SONG')
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


