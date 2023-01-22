import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Draggable, Droppable } from 'react-beautiful-dnd'




import { setSong } from "../store/player.action"
// import { loadCurrStation } from '../store/station.actions'
import { utilService } from '../service/util.service'
// import { loadCurrStation } from '../store/station.actions'
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
        <Draggable draggableId={song._id} index={idx} key={song._id}>
            {(provided) => (
                <div className="song-preview" ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <p className="song-number">{idx + 1}</p>
                    <div className="song-img-title">
                        <div className="song-img"
                            onClick={() => onSetSong({ _id: song.id, imgUrl: song.imgUrl })}
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
                        <span><FontAwesomeIcon icon={faHeart} /></span>
                        {user && station.createdBy._id === user._id &&
                            <span onClick={() => onDeleteSong(song.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </span>}

                    </p>
                    <p className="song-duration">
                        3:12
                    </p>
                </div>
            )
            }
        </Draggable>
    )
}