import { PlayerController } from "./player-controller"
import { SoundPlayer } from "./sound-player"
import { useSelector } from "react-redux"
import { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import { useEffect } from "react"


export function PlayerBar() {
    const player = useSelector(storeState => storeState.playerModule.player)
    const state = useSelector(storeState => storeState.playerModule.state)
    const song = useSelector(storeState => storeState.playerModule.song)
    const [volume, setVolume] = useState(80)
    const lastVolumeRef = useRef(0)
    const [volumeColor, setVolumeColor] = useState('#ffffff')

    function onSetVolume({ target }) {
        if (target.type != 'range') {
            if (volume === 0) {
                player.setVolume(lastVolumeRef.current)
                setVolume(lastVolumeRef.current)
            } else {
                lastVolumeRef.current = volume
                player.setVolume(0)
                setVolume(0)
            }
        } else {
            if (!player) return
            player.setVolume(target.value)
            setVolume(target.value)
        }
    }

    function openFullscreen(ev) {
        const elImg = document.querySelector('song-img')
        elImg.msRequestFullscreen()
    }

    function onToggleHover(ev) {
        if (!player) return
        if (ev.type === 'mousemove') setVolumeColor('#1ed760')
        else setVolumeColor('#ffffff')
    }

    return (<div className="media-player" >
        {song && <SoundPlayer />}
        {player && Promise.all(player.videoTitle, player.playerInfo.videoData.author) && <div className="information">
            <img src={song.imgUrl} alt="no image" className="song-img" />
            <div className="details">
                <h4>{song.title}</h4>
                <h5>{song.artist}</h5>
            </div>
        </div>}
        <PlayerController />
        <div className="actions-btns">
            {volume > 0 ? <FontAwesomeIcon icon={faVolumeHigh} onClick={onSetVolume} />
                : <FontAwesomeIcon icon={faVolumeMute} onClick={onSetVolume} />}
            <input
                type="range"
                name="volume-range"
                id="volume-range"
                className="volume-range"
                value={volume}
                max={100}
                onChange={onSetVolume}
                onMouseMove={onToggleHover}
                onMouseLeave={onToggleHover}
                style={{ background: `linear-gradient(to right, ${volumeColor} 0%, ${volumeColor} ${volume}%, #b3b3b3 ${volume}%, #b3b3b3 100%)` }}
            />
        </div>
    </div>
    )
}
