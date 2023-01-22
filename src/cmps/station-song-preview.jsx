import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
// import {Draggable } from 'react-beautiful-dnd'

import { setSong } from "../store/player.action"
import { loadCurrStation } from '../store/station.actions'
import { likeSong } from '../store/station.actions'
import { utilService } from '../service/util.service'

export function SongPreview({ song, idx, station, onDeleteSong }) {
    const user = useSelector((storeState => storeState.userModule.user))
    const { stationId } = useParams()

    function onSetSong(songToStore) {
        console.log('SONG TO STORE', songToStore)
        setSong(songToStore)
        console.log(stationId)
        loadCurrStation(stationId)
    }

    function deleteSong() {
        onDeleteSong && onDeleteSong(song.id)
    }

    function toggleLike() {
        likeSong(station._id, song.id, {_id: user._id, fullname: user.fullname})
    }

    const isLiked = user && (song.likedByUsers || []).find(minimalUser => minimalUser._id === user._id)
    console.log('SongPreview.isLiked', isLiked, song.likedByUsers)

    return (
        // <Draggable draggableId={song._id} index={idx} key={song._id}>
        //     {(provided) => (
                <div className="song-preview"
                    //  ref={provided.innerRef}
                    // {...provided.draggableProps}
                    // {...provided.dragHandleProps}
                    >
                    <p className="song-number">{idx + 1}</p>
                    <div className="song-img-title">
                        <div className="song-img"
                            onClick={() => onSetSong({ _id: song.id, imgUrl: song.imgUrl, title: song.title, artist: song.channelTitle })}
                            style={{
                                backgroundImage: `url("${song.imgUrl}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                width: '45px', height: '45px'
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
                    <p className='song-actions'>
                        {user && <span onClick={toggleLike}>
                    <FontAwesomeIcon icon={faHeart} color={isLiked ? 'green': 'white'} /></span>
                        }
                
                {user && station && station.createdBy._id === user._id &&
                            <span onClick={deleteSong}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>}
                    </p>
                    <p className="song-duration">
                        3:12
                    </p>
                </div>
            // )
            // }

        // </Draggable>
    )
}