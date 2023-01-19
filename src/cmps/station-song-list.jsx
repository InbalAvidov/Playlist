import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { SongPreview } from "./station-song-preview";

export function PlaylistSongList({ songs }) {
    return (
        <section className="songs-list">
            <div className="song-preview songs-list-header">
                <p className="song-number">#</p>
                <p className="song-img-title">Title</p>
                <p className="song-date">Date Added</p>
                <p className="song-duration"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></p>
            </div>
            {songs.map((song, idx) =>
                <SongPreview song={song} idx={idx} />)}
        </section>
    )
}