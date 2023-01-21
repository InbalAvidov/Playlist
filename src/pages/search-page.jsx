import { useEffect, useRef } from "react";
import { useState } from "react"

import { YoutubeService } from "../service/youtube.service";
import { utilService } from "../service/util.service";
import { setSong } from "../store/player.action";
import { loadStations } from "../store/station.actions";
import { RestSectionStations } from "../cmps/rest-section-stations";
import { useSelector } from "react-redux";
import { Loader } from "../cmps/loader";


export function SearchSongs({ isCreateStation, onAddSong, isForStation }) {
    const stations = useSelector((storeState) => storeState.stationModule.stations)
    const [search, setSearch] = useState('')
    const [songsBySearch, setSongsBySearch] = useState(null)
    const searchSongs = useRef(utilService.debounce(getSearchReasults, 700))

    useEffect(() => {
        loadStations({ page: 'home' })
        //later need to be changed to search
    }, [])


    function handleChange({ target }) {
        const { value } = target
        setSearch(value)
        searchSongs.current(value)
    }

    async function getSearchReasults(val) {
        if (val.length === 0) {
            setSongsBySearch(null)
            return
        }
        const results = await YoutubeService.getYoutubeReasults(val)
        setSongsBySearch(results)
    }

    function addSong(song) {
        onAddSong(song)
    }

    function onSetSong(songToStore) {
        setSong(songToStore)
    }

    if (!stations) return <Loader />
    return (
        <main className="main-search">
            <input className={isForStation ? "add-songs-search" : "main-input-search"}
                type='txt' value={search}
                placeholder={isForStation ? 'Add more songs' : 'What do you want to listen to?'}
                onChange={handleChange} />
            {songsBySearch ? <div className="search-results">
                {songsBySearch.map(song => <div className="search-result" key={song.id}>
                    {isForStation && <button className="add-song-btn" onClick={() => addSong(song)}>+</button>}
                    <img src={song.imgUrl} onClick={() => onSetSong({ _id: song.id, imgUrl: song.imgUrl })} />
                    <div className="song-details">
                        <h4>{song.title} </h4>
                        <p>{song.channelTitle}</p>
                    </div>
                </div>
                )}
            </div>
                :
                !isForStation &&
                <RestSectionStations stations={stations} />
            }
        </main>
    )
}