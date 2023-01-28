import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Draggable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'

import { setSong } from '../store/player.action'
import { loadCurrStation } from '../store/station.actions'
import { utilService } from '../service/util.service'
import { updateLikeSong } from '../store/user.action'
import { YoutubeService } from '../service/youtube.service'

export function SongPreview({ song, idx, onDeleteSong, isSearchPage }) {
    const user = useSelector((storeState => storeState.userModule.user))
    const currSong = useSelector(storeState => storeState.playerModule.song)
    const [duration, setDuration] = useState('--:--')
    const { stationId } = useParams()

    useEffect(() => {
        getSongDuration()
    }, [])

    function onSetSong(song) {
        const songToStore = {
            id: song.id,
            imgUrl: song.imgUrl,
            title: song.title,
            channelTitle: song.channelTitle,
            addedAt: song.addedAt
        }
        setSong(songToStore)
        loadCurrStation(stationId)
    }

    function deleteSong(ev) {
        ev.stopPropagation()
        onDeleteSong && onDeleteSong(song.id)
    }

    async function toggleLike(ev) {
        ev.stopPropagation()
        await updateLikeSong(song)
    }

    async function getSongDuration() {
        try{
            const duration = await YoutubeService.getSongDuration(song.id)
            setDuration(duration)
        }catch(err){
            setDuration('--:--')
        }
    }

    return (
        <Draggable draggableId={song.id} index={idx} key={song.id}>
            {(provided) => (
                <div className='song-preview'
                    onClick={() => onSetSong(song)}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p className={currSong?.id === song.id ? 'song-number playing' : 'song-number'}>{idx + 1}</p>
                    <p onClick={() => onSetSong(song)} className='song-play'><svg role='img' height='24' width='24' aria-hidden='true' className='Svg-sc-ytk21e-0 uPxdw UIBT7E6ZYMcSDl1KL62g' viewBox='0 0 24 24' data-encore-id='icon'><path d='M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z'></path></svg></p>
                    <div className={isSearchPage ? 'song-img-title search' : 'song-img-title'}>
                        <div class='song-img' style={{
                            width: '45px',
                            height: '45px',
                            overflow: 'hidden',
                        }}>
                            <img src={song.imgUrl} style={{ width: '100px', height: '65px', marginTop: '-10px', marginLeft: '-25px' }} />
                        </div>
                        <div className='song-title'>
                            <p className={currSong?.id === song.id ? 'song-name playing' : 'song-name'}>{song.title}</p>
                            {song.channelTitle && <p className='song-artist'>{song.channelTitle}</p>}
                        </div>
                    </div>
                    <div className='song-date'>
                        {isSearchPage ?
                            <p></p>
                            :
                            <p>{utilService.getFormattedDate(song.addedAt)}</p>
                        }
                    </div>
                    <span onClick={toggleLike} className={isSearchPage ? 'song-like search' : 'song-like'}>
                        {user?.likedSongs.find(({ id }) => id === song.id) ?
                            <svg fill='#1ed760' role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='liked Svg-sc-ytk21e-0 uPxdw'><path d='M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z'></path></svg>
                            :
                            <svg fill='white' role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='un-liked Svg-sc-ytk21e-0 uPxdw'><path d='M1.69 2A4.582 4.582 0 018 2.023 4.583 4.583 0 0111.88.817h.002a4.618 4.618 0 013.782 3.65v.003a4.543 4.543 0 01-1.011 3.84L9.35 14.629a1.765 1.765 0 01-2.093.464 1.762 1.762 0 01-.605-.463L1.348 8.309A4.582 4.582 0 011.689 2zm3.158.252A3.082 3.082 0 002.49 7.337l.005.005L7.8 13.664a.264.264 0 00.311.069.262.262 0 00.09-.069l5.312-6.33a3.043 3.043 0 00.68-2.573 3.118 3.118 0 00-2.551-2.463 3.079 3.079 0 00-2.612.816l-.007.007a1.501 1.501 0 01-2.045 0l-.009-.008a3.082 3.082 0 00-2.121-.861z'></path></svg>
                        }
                    </span>
                    <p className={isSearchPage ? 'song-duration last' : 'song-duration'}>{duration}</p>
                    <span className='song-delete' onClick={deleteSong}>
                        <FontAwesomeIcon icon={faTrash} />
                    </span>
                </div>
            )
            }

        </Draggable>
    )
}