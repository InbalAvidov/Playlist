import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { utilService } from '../service/util.service'
import { togglePlay } from '../store/player.action'

export function PlayerController({ isRepeat, onToggleRepeat, onPrevNextSong, onShuffle, isShuffled }) {
    const player = useSelector(storeState => storeState.playerModule.player)
    const isPlaying = useSelector(storeState => storeState.playerModule.isPlaying)
    const [progress, setProgress] = useState(0)
    const [progColor, setProgColor] = useState('#ffffff')
    const timerId = useRef(null)

    useEffect(() => {
        const duration = player?.getDuration()
        timerId.current = setInterval(() => {
            if (isPlaying && player) {
                const time = player.getCurrentTime()
                setProgress(time)
            }
        }, 1000)
    }, [isPlaying, player])

    function onTogglePlay() {
        if (isPlaying) clearInterval(timerId.current)
        togglePlay(!isPlaying)
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

    function onToggleHover(ev) {
        if (!player) return
        if (ev.type === 'mousemove') setProgColor('#1ed760')
        else setProgColor('#ffffff')
    }

    return <div className='controller'>
        <div className='conrtoller-btns'>
            <button className='shuffle' onClick={onShuffle}>
                <svg fill={isShuffled ? '#1ed760' : '#a7a7a7'} role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z'></path><path d='M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z'></path></svg>
                {isShuffled && <p>.</p>}
            </button>
            <button onClick={() => onPrevNextSong(-1)}>
                <svg fill='#a7a7a7 ' role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z'></path></svg>
            </button>
            {!isPlaying &&
                <div className='player-play-pause-circle' onClick={onTogglePlay}>
                    <svg role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='play-pause Svg-sc-ytk21e-0 uPxdw'><path d='M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z'></path></svg>
                </div>}
            {isPlaying &&
                <div className='player-play-pause-circle' onClick={onTogglePlay}>
                    <svg role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='play-pause Svg-sc-ytk21e-0 uPxdw'><path d='M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z'></path></svg>
                </div>
            }
            <button onClick={() => onPrevNextSong(1)}>
                <svg fill='#a7a7a7' role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z'></path></svg>
            </button>
            <button onClick={onToggleRepeat} >
                {isRepeat ?
                    <svg fill='#1ed760' role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M0 4.75A3.75 3.75 0 013.75 1h.75v1.5h-.75A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5zM12.25 2.5h-.75V1h.75A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25z'></path><path d='M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z'></path></svg>
                    :
                    <svg fill='#a7a7a7' role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z'></path></svg>
                }
                {isRepeat && <p>.</p>}
            </button>
        </div>
        <div className='player-progress-container'>
            <p>{utilService.secondsToMinutesAndSeconds(player?.getCurrentTime())}</p>
            <input
                type='range'
                name='player-progress'
                id='player-progress'
                className='player-progress'
                value={Math.floor(player?.getCurrentTime()) || 0}
                //value ={progress}
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