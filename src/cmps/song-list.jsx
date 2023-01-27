import { useEffect, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { SongPreview } from "./song-preview";
import { SearchSongs } from '../pages/search-songs';
import { updateStation } from '../store/station.actions';
import { useSelector } from 'react-redux';

export function SongList({ station, addSong, onDeleteSong, isLikedSongsPage }) {
    const color = useSelector(storeState => storeState.stationModule.color)
    const [items, setItems] = useState(station.songs)

    function onAddSong(song) {
        addSong([...station.songs, song])
    }

    async function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const newItems = [...items];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        station.songs = newItems
        const updetedStation = await updateStation(station)
        setItems(updetedStation.songs)
    }
   
    return (
        <main className='main-song-list'>
            {station.songs.length > 0 &&
                <section className="song-list">
                    <div className='liked-song-clr-container' style={{ backgroundColor: `${color}` }}></div>
                    <div className="song-preview songs-list-header">
                        <p className="song-number">#</p>
                        <p className="song-img-title">Title</p>
                        <p className="song-date">Date Added</p>
                        <p className="song-like"></p>
                        <p className="song-duration">
                            <svg fill="white" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path><path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path></svg>
                        </p>
                        <p className="song-delete"></p>
                    </div>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {station.songs.map((song, idx) => (
                                        <SongPreview song={song} idx={idx} onDeleteSong={onDeleteSong} station={station} isLikedSongsPage={isLikedSongsPage} />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>

                </section>
            }
            <div className="hr-line"></div>
            <div className='song-add'>
                <div className='' style={{ backgroundColor: `${color}` }}></div>
                <h2>Let's find something for your playlist</h2>
                <SearchSongs onAddSong={onAddSong} isForStation={true} />
            </div>

        </main>
    )
}