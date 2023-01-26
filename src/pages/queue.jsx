import { useEffect, useState } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useSelector } from "react-redux"
import { SongPreview } from "../cmps/song-preview"
import { updateStation } from "../store/station.actions"

export function Queue() {
    const station = useSelector(storeState => storeState.stationModule.currStation)
    const song = useSelector(storeState => storeState.playerModule.song)
    const songs = useSelector(storeState => storeState.playerModule.songs)
    const [items, setItems] = useState(null)
    let fullSong

    useEffect(() => {
        if(!song) return
        fullSong = songs.find(currSong => currSong.id === song.id)
        console.log('fullSong:',fullSong)
    }, [song])

    async function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const newItems = [...items];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        songs = newItems
        const updetedStation = await updateStation(station)
        setItems(updetedStation.songs)
    }
    console.log('songs:', songs)
    return (
        <main className="clr-container">
            <h1>Queue</h1>
            <h3>Now playing</h3>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <SongPreview song={songs.find(({id}) =>id === song.id)} idx={0}
                            // onDeleteSong={onDeleteSong} station={station} isLikedSongsPage={isLikedSongsPage}
                            />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <h3>Next from: {station?.name}</h3>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {songs.map((song, idx) => (
                                <SongPreview song={song} idx={idx+1}
                                // onDeleteSong={onDeleteSong} station={station} isLikedSongsPage={isLikedSongsPage}
                                />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </main>
    )
}