import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { removeSong } from "../store/station.actions"
import { SongPreview } from "./station-song-preview";

export function PlaylistSongList({station}) {

    function deleteSong(songId) {
        if (station.songs.length > 1) {
            removeSong(station._id, songId)
        }
    }

    return (
        <section className="songs-list">
            <div className="song-preview songs-list-header">
                <p className="song-number">#</p>
                <p className="song-img-title">Title</p>
                <p className="song-date">Date Added</p>
                <p className="song-duration"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></p>
            </div>
            {station.songs.map((song, idx) =>
                <SongPreview key={idx} song={song} idx={idx} onDeleteSong={deleteSong}/>)}
        </section>
    )
}