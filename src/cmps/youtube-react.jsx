import YouTube from 'react-youtube';
import { loadTrack } from '../store/track.action';


export function SoundTreck({ trackId }) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  function _onReady(event) {
    event.target.pauseVideo();
    loadTrack(event.target)
  }

  return <div>
    {/* {song && <button onClick={() => song.playVideo()}>PLAY</button>} */}
    <YouTube videoId={trackId} opts={opts} onReady={_onReady} />;
    {/* style={{ position:'absolute',top: '-9999px' }} */}
  </div>
}


