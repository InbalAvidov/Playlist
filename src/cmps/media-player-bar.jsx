import { MediaConroller } from "./media-controller"
import { Soundplayer } from "./youtube-react"

export function MediaPlayerBar({ selctedPlayer }) {
    return (<div className="media-player" >
        <Soundplayer playerId={selctedPlayer._id} />
        <div className="information">
            <img src={selctedPlayer.cover} alt="no image" />
            <div className="details">
                <h4>{selctedPlayer.title}</h4>
                <h5>{selctedPlayer.artist}</h5>
            </div>
        </div>
        <MediaConroller />
    </div>
    )
}