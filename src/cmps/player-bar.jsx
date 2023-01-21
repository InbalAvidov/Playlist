import { PlayerController } from "./player-controller"
import { SoundPlayer } from "./sound-player"
import { useSelector } from "react-redux"
import { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowsUpDownLeftRight, faPhoneVolume, faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons"

export function PlayerBar() {
    const player = useSelector(storeState => storeState.playerModule.player)
    const song = useSelector(storeState => storeState.playerModule.song)
    const [volume, setVolume] = useState(80)
    const lastVolumeRef = useRef(0)
    console.log('song from player bar', song)
    song ? console.log('song from player bar', song) : console.log('no song')

    function onSetVolume({ target }) {
        if (target.type != 'range') {
            if (volume === 0) {
                console.log('RETURNING SOUND')
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

    return (<div className="media-player" >
        {song && <SoundPlayer playerId={song._id} />}
        {player && <div className="information">
            <img src={song.imgUrl} alt="no image" className="song-img" />
            <div className="details">
                <h4>{player.videoTitle}</h4>
                <h5>{player.artist}</h5>
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
                style={{ background: `linear-gradient(to right, #ffffff 0%, #ffffff ${volume}%, #b3b3b3 ${volume}%, #b3b3b3 100%)` }}
            />
            {/* <FontAwesomeIcon icon={faArrowsUpDownLeftRight} onClick={openFullscreen} /> */}
        </div>
    </div>
    )
}