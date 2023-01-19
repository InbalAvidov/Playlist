import { setSongId } from "../store/player.action"

export function SongPreview({ song, idx }) {

    function onSetSong(songId){
        setSongId(songId)
    }
    return (
        <div key={idx} className="song-preview">
            <p className="song-number">{idx + 1}</p>
            <div className="song-img-title">
            <div onClick={()=>onSetSong(song.id)} className="song-img" style={{
                backgroundImage: `url("${song.imgUrl}")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: '50px', height: '50px'
            }}></div>
            <div className="song-title">
                <h4>{song.title}</h4>
                {song.channelTitle && <p>{song.channelTitle}</p>}
            </div>
            </div>
            <div className="song-date-added">
            <p>Date</p>
            </div>
            <p className="song-duration">03:00</p>
        </div>
    )
}