import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { SongPreview } from "./station-song-preview";
import { SearchSongs } from '../pages/search-page';

export function SongList({ station, handleChange, onDeleteSong }) {
    const [stationSongs, setStationSongs] = useState(station.songs)
    const [items, setItems] = useState(station.songs)
    useEffect(()=>{
        console.log(station,"177777777777777777777");
    },[])
    function onAddSong(song) {
        setStationSongs(prevSongs => [...prevSongs, song])
        handleChange('songs', [...stationSongs, song])
    }

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const newItems = [...items];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        setItems(newItems)
    }

    return (
        <main className='main-songs-list'>
            {station.songs.length > 0 &&
                <section className="songs-list">
                    <div className="song-preview songs-list-header">
                        <p className="song-number">#</p>
                        <p className="song-img-title">Title</p>
                        <p className="song-date">Date Added</p>
                        <p className="song-actions"></p>
                        <p className="song-duration"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></p>
                    </div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {station.songs.map((song, idx) => (
                                        <SongPreview key={song._id} song={song} idx={idx} onDeleteSong={onDeleteSong} station={station} />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                </section>
            }
            <div className='songs-add'>
                {!station.songs.length > 0 && <h2>Let's find something for your playlist</h2>}
                <SearchSongs onAddSong={onAddSong} isForStation={true} />
            </div>
        </main>
    )
}