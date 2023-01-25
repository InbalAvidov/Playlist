import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { loadPlayer } from '../store/player.action';

export function SoundPlayer() {
  const song = useSelector(storeState => storeState.playerModule.song)
  const opts = {
    height: '00',
    width: '00',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  function onReady(event) {
    loadPlayer(event.target)
    event.target.playVideo()
  }

  return <div>
    <YouTube videoId={song._id} opts={opts} onReady={onReady} />
  </div>
}


