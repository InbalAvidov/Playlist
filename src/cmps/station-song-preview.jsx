import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faListDots } from '@fortawesome/free-solid-svg-icons'

import { setSongId } from "../store/player.action"
import { utilService } from '../service/util.service'

export function SongPreview({ song, idx, onDeleteSong }) {

    function onSetSong(songId) {
        setSongId(songId)
    }

    return (
        <div className="song-preview">
            <p className="song-number">{idx + 1}</p>
            <div className="song-img-title">
                <div onClick={() => onSetSong(song.id)} className="song-img" style={{
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
            <p className="song-duration">
                <span><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span>
                3:12
                <span onClick={() => onDeleteSong(song.id)}>
                    <FontAwesomeIcon icon={faListDots}></FontAwesomeIcon>
                </span>
            </p>
        </div>
    )
}