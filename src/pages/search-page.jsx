import { useRef } from "react";
import { useState } from "react"

import { YoutubeService } from "../service/youtube.service";
import { utilService } from "../service/util.service";


export function SearchSongs({ isCreateStation, onAddSong, isForStation }) {
    const [search, setSearch] = useState('')
    const [songsBySearch, setSongsBySearch] = useState([])
    const searchSongs = useRef(utilService.debounce(getSearchReasults, 700))

    function handleChange({ target }) {
        const { value } = target
        setSearch(value)
        searchSongs.current(value)
    }

    async function getSearchReasults(val) {
        if (val.length === 0) {
            setSongsBySearch([])
            return
        }
        const results = await YoutubeService.getYoutubeReasults(val)
        setSongsBySearch(results)
    }

    function addSong(song) {
        onAddSong(song)
    }
    return (
        <main className="main-search">
            <input className={isForStation ? "add-songs-search" : "main-input-search"}
                type='txt' value={search}
                placeholder={isForStation ? 'Add more songs' : 'What do you want to listen to?'}
                onChange={handleChange} />
            {songsBySearch.length > 0 && <div className="search-results">
                {songsBySearch.map(song => <div className="search-result" key={song.id}>
                    {isForStation && <button className="add-song-btn" onClick={() => addSong(song)}>+</button>}
                    <img src={song.imgUrl} />
                    <div className="song-details">
                        <h4>{song.title} </h4>
                        <p>{song.channelTitle}</p>
                    </div>
                </div>
                )}
            </div>}
        </main>
    )
}