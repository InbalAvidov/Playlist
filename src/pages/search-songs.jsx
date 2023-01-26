import { useEffect, useRef } from "react";
import { useState } from "react"
import { useSelector } from "react-redux";

import { YoutubeService } from "../service/youtube.service";
import { utilService } from "../service/util.service";
import { setSong } from "../store/player.action";
import { loadStations } from "../store/station.actions";
import { RestSectionStations } from "../cmps/rest-section-stations";
import { Loader } from "../cmps/loader";
import { NavLink } from "react-router-dom";

export function SearchSongs({ onAddSong, isForStation }) {
    const stations = useSelector((storeState) => storeState.stationModule.stations)
    const [search, setSearch] = useState('')
    const [songsBySearch, setSongsBySearch] = useState(null)
    const searchSongs = useRef(utilService.debounce(getSearchReasults, 700))

    useEffect(() => {
        if (isForStation) return
        loadStations({ page: 'search' })
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

    function onSetSong(song) {
        const songToStore =
        {
            id: song.id,
            imgUrl: song.imgUrl,
            title: song.title,
            channelTitle: song.channelTitle
        }
        setSong(songToStore)
    }

    if (!stations) return <Loader />
    return (
        <main className="main-search" >
            <div className="search-container">
                <div className="svg-wrapper">
                </div>
                <input className={`search-input ${isForStation ? "add-songs-search" : "main-input-search"}`}
                    type='txt' value={search}
                    placeholder={isForStation ? 'Search for songs' : 'What do you want to listen to?'}
                    onChange={handleChange}
                />
            </div>

            {songsBySearch
                ?
                <div className="search-results">
                    {songsBySearch.map(song => <div className="search-result" key={song.id}>
                        {isForStation && <button className="add-song-btn" onClick={() => addSong(song)}>+</button>}
                        <img src={song.imgUrl} onClick={() => onSetSong(song)} />
                        <div className="song-details">
                            <h4>{song.title} </h4>
                            <p>{song.channelTitle}</p>
                        </div>
                    </div>
                    )}
                </div>
                :
                !isForStation && <div className="genres">
                    <h1>Browse all</h1>
                    <div className="ganres-section">
                        {stations.map(station => <NavLink to={`/station/${station._id}`}>
                            <img key={station._id} src={station.imgUrl} />
                        </NavLink>
                        )}
                    </div>
                </div>
            }
        </main>
    )
}