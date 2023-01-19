import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { SongPreview } from "./station-song-preview";

export function PlaylistSongList({ songs }) {
    return (
        <section className="songs-list">
            <div className="song-preview">
                <p className="song-number-header">#</p>
                <p className="song-title-header">Title</p>
                <p className="song-title-header">Date Added</p>
                <p className="song-duration-header"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></p>
            </div>
            {songs.map((song, idx) =>
                <SongPreview song={song} idx={idx} />)}
        </section>
    )
}