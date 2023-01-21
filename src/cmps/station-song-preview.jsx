import { useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'

import { setSong } from "../store/player.action"
import { utilService } from '../service/util.service'
import { loadCurrStation } from '../store/station.actions'
import { useSelector } from 'react-redux'

export function SongPreview({ song, idx, onDeleteSong, station }) {
    const user = useSelector((storeState => storeState.userModule.user))
    const { stationId } = useParams()

    function onSetSong(songToStore) {
        console.log('SONG TO STORE', songToStore)
        setSong(songToStore)
        console.log(stationId)
        // loadCurrStation(stationId)
    }

    return (
        <div className="song-preview">
            <p className="song-number">{idx + 1}</p>
            <div className="song-img-title">
                <div onClick={() => onSetSong({ _id: song.id, imgUrl: song.imgUrl })} className="song-img"
                    style={{
                        backgroundImage: `url("${song.imgUrl}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: '50px', height: '50px'
                    }}></div>
                <div className="song-title">
                    <h4>{song.title}</h4>
                    {song.channelTitle && <p>{song.channelTitle}</p>}
                </div>
            </div>
            <div className="song-date">
                <p>{utilService.randomPastTime()}</p>
            </div>
            <p className='song-actions'>
                <span><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span>
                {user && station.createdBy._id === user._id &&
                    <span onClick={() => onDeleteSong(song.id)}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </span>}

            </p>
            <p className="song-duration">
                3:12
            </p>
        </div>
    )
}