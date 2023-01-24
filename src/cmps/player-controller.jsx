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
            if (currSongIdx === 0 || (player.getCurrentTime() > 10)) {
                return player.seekTo(0)
            }
        }
        const nextSong = {
            _id: station.songs[currSongIdx + val].id,
            imgUrl: station.songs[currSongIdx + val].imgUrl,
            title : station.songs[currSongIdx + val].title,
            artist : station.songs[currSongIdx + val].channelTitle
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
            {!isPlaying &&
                <div className="player-play-pause-circle" onClick={onTogglePlay}>
                    <svg  role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="play-pause Svg-sc-ytk21e-0 uPxdw"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>
                </div>}
            {isPlaying &&
                <div className="player-play-pause-circle" onClick={onTogglePlay}>
                    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="play-pause Svg-sc-ytk21e-0 uPxdw"><path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path></svg>
                </div>
            }
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