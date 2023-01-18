import { useState } from "react";
import { useSelector } from "react-redux";

export function MediaPlayer() {
    const track = useSelector(storeState => storeState.trackModule.track)
    const [isPlaying, setIsPlaying] = useState(false)
    function togglePlay({ target }) {
        if (isPlaying) {
            target.innerText = 'Play'
            track.pauseVideo()
        } else {
            target.innerText = 'Pause'
            track.playVideo()
        }
        // console.log(track)
        setIsPlaying(prevIsPlaying => !prevIsPlaying)
    }
    return <div className="media-player" style={{position:'absolute', right:'0px'}}>
        <p>I'm media player</p>
        {track && <button onClick={togglePlay} >Play</button>}
    </div>
}