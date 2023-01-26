import { useEffect, useState } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd"
import { useSelector } from "react-redux"
import { Loader } from "../cmps/loader"
import { SongPreview } from "../cmps/song-preview"
import { setQueue, setSongs } from "../store/player.action"
import { updateStation } from "../store/station.actions"

export function Queue() {
    const station = useSelector(storeState => storeState.stationModule.currStation)
    const song = useSelector(storeState => storeState.playerModule.song)
    const songs = useSelector(storeState => storeState.playerModule.songs)
    const [items, setItems] = useState(null)
    const [songsToPlay , setSongsToPlay] = useState(null)

    useEffect(() => {
        const nowPlayingIdx = songs.findIndex((currSong => currSong.id === song.id))
        const songsToPlay = songs.slice(nowPlayingIdx+1 , songs.length)
        setSongsToPlay([...songsToPlay])
        setItems([...songsToPlay])
    }, [songs , song])

    async function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        const newItems = [...items];
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        const afterDrugSongs = newItems
        const newSongsOrder = await setSongs(afterDrugSongs)
        setItems(newSongsOrder)
    }
    console.log('songs:', songs)
    if (!songsToPlay || !song ) return <Loader />
    return (
        <main className="clr-container queue-main">
            <h1>Queue</h1>
            {songsToPlay && song &&
                <div className="song-list">
                    <h3>Now playing</h3>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <SongPreview song={song} idx={0}
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
                                    className="song-list"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {songsToPlay.map((song, idx) => (
                                        <SongPreview song={song} idx={idx + 1}
                                        // onDeleteSong={onDeleteSong} station={station} isLikedSongsPage={isLikedSongsPage}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>

            }
        </main>
    )
}