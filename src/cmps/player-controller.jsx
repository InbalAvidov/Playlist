import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faForwardStep, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

import { utilService } from "../service/util.service";
import { loadPlayer, setSong, togglePlay } from "../store/player.action";


export function PlayerController() {
    const player = useSelector(storeState => storeState.playerModule.player)
    const isPlaying = useSelector(storeState => storeState.playerModule.isPlaying)
    const station = useSelector(storeState => storeState.stationModule.currStation)
    const [progress, setProgress] = useState(0)
    const [progColor, setProgColor] = useState('#ffffff')
    const timerId = useRef(null)
    const backwardClick = useRef(0)

    useEffect(() => {
        console.log('PLAYER IN PLAYER CONTROLLER:', player)
        timerId.current = setInterval(() => {
            if (isPlaying && player) {
                setProgress(player.getCurrentTime())
            }
        }, 1000);
    }, [isPlaying, player])

    function onTogglePlay() {
        if (isPlaying) clearInterval(timerId.current)
        togglePlay(!isPlaying)
    }

    function changeTime({ target }, val) {
        if (!player) return
        if (val) return player.seekTo(player.getCurrentTime() + val)
        player.seekTo(target.value)
        setProgress(target.value)
    }

    function getPBStyle() {
        return player?.getCurrentTime() / player?.getDuration() * 100
    }

    function onPrevNextSong(val) {
        const currSongIdx = station.songs.findIndex(song => song.id === player.i.h.videoId)
        if (val === -1) {
            if (currSongIdx === 0 || (player.getCurrentTime() > 10)){
                return player.seekTo(0)
            }
        }
        const nextSong = {
            _id: station.songs[currSongIdx + val].id,
            imgUrl: station.songs[currSongIdx + val].imgUrl
        }
        setSong(nextSong)
    }

    function onToggleHover(ev) {
        if (!player) return
        if (ev.type === 'mousemove') setProgColor('#1ed760')
        else setProgColor('#ffffff')
    }

    return <div className="controller">
        <div className="conrtoller-btns">
            <FontAwesomeIcon icon={faBackwardStep} onClick={() => onPrevNextSong(-1)} />
            {!isPlaying && <FontAwesomeIcon icon={faPlayCircle} onClick={onTogglePlay} className='play-pause' />}
            {isPlaying && <FontAwesomeIcon icon={faPauseCircle} onClick={onTogglePlay} className='play-pause' />}
            <FontAwesomeIcon icon={faForwardStep} onClick={() => onPrevNextSong(1)} />
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
                onMouseMove={onToggleHover}
                onMouseLeave={onToggleHover}
                style={{ background: `linear-gradient(to right, ${progColor} 0%, ${progColor} ${getPBStyle()}%, #b3b3b3 ${getPBStyle()}%, #b3b3b3 100%)` }}
            />
            <p>{utilService.secondsToMinutesAndSeconds(player?.getDuration())}</p>
        </div>
    </div>
}