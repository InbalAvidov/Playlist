import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { SongPreview } from "./station-song-preview";
import { SearchSongs } from '../pages/search-page';
import { useState } from 'react';

export function SongList({ station, isCreateStation, handleChange, onDeleteSong }) {
    const [stationSongs, setStationSongs] = useState([])
    function onAddSong(song) {
        setStationSongs(prevSongs => [...prevSongs, song])
        handleChange('songs', [...stationSongs, song])
    }


    return (
        <main className='main-songs-list'>
            <div className='songs-add'>
                {!station.songs.length > 0 && <h2>Let's find something for your playlist</h2>}
                <SearchSongs onAddSong={onAddSong} isCreateStation={isCreateStation} />
            </div>
            {station.songs.length > 0 &&
                <section className="songs-list">
                    <div className="song-preview songs-list-header">
                        <p className="song-number">#</p>
                        <p className="song-img-title">Title</p>
                        <p className="song-date">Date Added</p>
                        <p className="song-duration"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></p>
                    </div>
                    {station.songs.map((song, idx) =>
                        <SongPreview song={song} idx={idx} onDeleteSong={onDeleteSong} />)
                    }
                </section>
            }
        </main>
    )
}