import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons"

import { PlayerController } from "./player-controller"
import { SoundPlayer } from "./sound-player"
import { updateLikeSong } from "../store/user.action"
import { setQueue, setSong, setSongs } from "../store/player.action"
import { utilService } from "../service/util.service"
import { useNavigate } from "react-router-dom"


export function PlayerBar() {
    const player = useSelector(storeState => storeState.playerModule.player)
    const song = useSelector(storeState => storeState.playerModule.song)
    const user = useSelector((storeState => storeState.userModule.user))
    const station = useSelector(storeState => storeState.stationModule.currStation)
    const songs = useSelector(storeState => storeState.playerModule.songs)
    const [isShuffled, setIsShuffled] = useState(false)
    const [volume, setVolume] = useState(80)
    const [volumeColor, setVolumeColor] = useState('#ffffff')
    const lastVolumeRef = useRef(0)
    const [isRepeat, setIsRepeat] = useState(false)
    const OriginalSongsOrder = useRef(null)
    const isQueue = useSelector(storeState => storeState.playerModule.queue)
    const navigate = useNavigate()

    useEffect(() => {
        if (station) {
            setSongs([...station.songs])
            // setSongs(station.songs)
            OriginalSongsOrder.current = [...station.songs]
        }
    }, [station])

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

    async function toggleLike() {
        await updateLikeSong(song)
    }

    function onPrevNextSong(val) {
        const currSongIdx = songs.findIndex(song => song.id === player.i?.h.videoId)
        if (val === -1) {
            if (currSongIdx === 0 || (player.getCurrentTime() > 10)) {
                return player.seekTo(0)
            }
        }
        const song = songs[currSongIdx + val]
        const nextSong = {
            id: song.id,
            imgUrl: song.imgUrl,
            title: song.title,
            artist: song.channelTitle,
            addedAt: song.addedAt
        }
        setSong(nextSong)
    }

    function onShuffle() {
        if (!player || !songs) return
        setIsShuffled(!isShuffled)
        if (!isShuffled) {
            const songsToShuffle = songs.filter(({ id }) => id !== song.id)
            const shuffledSongs = utilService.shuffle(songsToShuffle)
            setSongs([song,...shuffledSongs])
        }
        else {
            setSongs([...OriginalSongsOrder.current])
        }
    }

    function onEnd() {
        isRepeat ? player.seekTo(0) : onPrevNextSong(1)
    }

    function onToggleRepeat() {
        setIsRepeat(!isRepeat)
    }

    function onQueue(){
        setQueue(!isQueue)
        console.log('isQueue:',isQueue)
        if(!isQueue) navigate ('/queue')
        else navigate (-1)
    }
   
    return (<div className="media-player" >
        {song && <SoundPlayer onEnd={onEnd} />}
        {player && <div className="information">
            <img src={song.imgUrl} alt="no image" className="song-img" />
            <div className="details">
                <h4>{song.title.slice(0, 30)}{song.title.length > 30 && '...'}</h4>
                <h5>{song.artist.slice(0, 30)}{song.artist.length > 30 && '...'}</h5>
            </div>
            {user && <span onClick={toggleLike}>
                {user.likedSongs.find(({ id }) => id === song.id) ?
                    <svg fill='#1ed760' role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"></path></svg>
                    :
                    <svg fill='white' role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z"></path></svg>
                }
            </span>
            }
        </div>}
        <PlayerController isRepeat={isRepeat} onToggleRepeat={onToggleRepeat} onPrevNextSong={onPrevNextSong} onShuffle={onShuffle} isShuffled={isShuffled} />
        <div className="actions-btns">
            <button onClick={onQueue} className="queue">
                <svg fill={isQueue ? "#1ed760" : "white"} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path></svg>
            </button>
            {volume > 0 ? <svg onClick={onSetVolume} fill="white" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volume high" id="volume-icon" viewBox="0 0 16 16" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path></svg>
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
