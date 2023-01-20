import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faForwardStep, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { utilService } from "../service/util.service";
import { togglePlay } from "../store/player.action";


export function PlayerController() {
    const player = useSelector(storeState => storeState.playerModule.player)
    const isPlaying = useSelector(storeState => storeState.playerModule.isPlaying)
    const [progress, setProgress] = useState(0)
    const timerId = useRef(null)
    useEffect(() => {
        console.log('hello', player)
        timerId.current = setInterval(() => {
            if (isPlaying && player) {
                setProgress(player.getCurrentTime())
            }
        }, 1000);
    }, [isPlaying, player])

    function onTogglePlay() {
        if (isPlaying) clearInterval(timerId.current)
        togglePlay(!isPlaying)
        console.log('progress', progress)
    }

    function changeTime({ target }, val) {
        if (!player) return
        if (val) return player.seekTo(player.getCurrentTime() + val)
        player.seekTo(target.value)
        // setProgress(target.value)
    }

    function getPBStyle() {
        return player?.getCurrentTime() / player?.getDuration() * 100
    }

    return <div className="controller">
        <div className="conrtoller-btns">
            <FontAwesomeIcon icon={faBackwardStep} onClick={(ev) => changeTime(ev, -10)} />
            {!isPlaying && <FontAwesomeIcon icon={faPlayCircle} onClick={onTogglePlay} className='play-pause' />}
            {isPlaying && <FontAwesomeIcon icon={faPauseCircle} onClick={onTogglePlay} className='play-pause' />}
            <FontAwesomeIcon icon={faForwardStep} onClick={(ev) => changeTime(ev, 10)} />
        </div>
        <div className="player-progress-container">
            <p>{utilService.secondsToMinutesAndSeconds(player?.getCurrentTime())}</p>
            <input
                type="range"
                name="player-progress"
                id="player-progress"
                className="player-progress"
                // value={progress}
                value={Math.floor(player?.getCurrentTime()) || 0}
                max={player?.getDuration()}
                onChange={changeTime}
                style={{ background: `linear-gradient(to right, #ffffff 0%, #ffffff ${getPBStyle()}%, #b3b3b3 ${getPBStyle()}%, #b3b3b3 100%)` }}
            />
            <p>{utilService.secondsToMinutesAndSeconds(player?.getDuration())}</p>
        </div>

    </div>
}