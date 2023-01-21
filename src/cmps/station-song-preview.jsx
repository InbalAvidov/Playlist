import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faListDots } from '@fortawesome/free-solid-svg-icons'

import { setSong } from "../store/player.action"
// import { loadCurrStation } from '../store/station.actions'
import { utilService } from '../service/util.service'

export function SongPreview({ song, idx, onDeleteSong }) {
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
                <div className="song-img"
                    onClick={() => onSetSong({ _id: song.id, imgUrl: song.imgUrl })}
                    style={{
                        backgroundImage: `url("${song.imgUrl}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: '50px', height: '50px'
                    }}>
                </div>
                <div className="song-title">
                    <h4>{song.title}</h4>
                    {song.channelTitle && <p>{song.channelTitle}</p>}
                </div>
            </div>
            <div className="song-date">
                <p>{utilService.randomPastTime()}</p>
            </div>
            <p className="song-duration">
                <span><FontAwesomeIcon icon={faHeart} /></span>
                3:12
                <span onClick={() => onDeleteSong(song.id)}>
                    <FontAwesomeIcon icon={faListDots} />
                </span>
            </p>
        </div>
    )
}