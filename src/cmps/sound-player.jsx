import { useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import { loadPlayer } from '../store/player.action'

export function SoundPlayer({ onEnd }) {
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
    if (event.target.i.h.videoId === 'aFG7MR6ld1M') return event.target.pauseVideo()
    event.target.playVideo()
  }

  return <div hidden>
    <YouTube videoId={song.id} opts={opts} onReady={onReady} onEnd={onEnd} />
  </div>
}


