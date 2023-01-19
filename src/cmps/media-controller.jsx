import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { utilService } from "../service/util.service";


export function MediaConroller() {
    const player = useSelector(storeState => storeState.playerModule.player)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState('0:00')
        const timerID = setInterval(() => {
            setCurrentTime(utilService.secondsMinutesAndSeconds(player.getCurrentTime()))
        }, 1000);
    function togglePlay({ target }) {
        if (isPlaying) {
            player.pauseVideo()
        } else {
            player.playVideo()
        }
        console.log('return from getTime', player.getCurrentTime())

        // console.log(player)
        setIsPlaying(prevIsPlaying => !prevIsPlaying)
    }
    return <div className="player">
        <div className="player-btns">
            {!isPlaying && <FontAwesomeIcon icon={faPlayCircle} onClick={togglePlay} />}
            {isPlaying && <FontAwesomeIcon icon={faPauseCircle} onClick={togglePlay} />}
        </div>
        <div className="player-progress-container">
            {player ? <p>{currentTime}</p> : <p>0:00</p>}
            <input
                type="range"
                name="player-progress"
                id="player-progress"
                className="player-progress"
            />
            {player ? <p>{utilService.secondsMinutesAndSeconds(player.getDuration())}</p> : <p>0:00</p>}
        </div>

    </div>
}