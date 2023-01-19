import { MediaConroller } from "./media-controller"
import { Soundplayer } from "./youtube-react"
import cover from '../assets/img/see you again.png'
import { useSelector } from "react-redux"

export function MediaPlayerBar() {
    // const songId = useSelector(storeState => storeState.playerModule.songId)
    const player = {
        _id: 'RgKAFK5djSk',
        title: 'See You Again',
        cover,
        artist: 'Wiz Khalifa'
    }

    return (<div className="media-player" >
        <Soundplayer playerId={player._id} />
        {player && <div className="information">
            <img src={player.cover} alt="no image" />
            <div className="details">
                <h4>{player.title}</h4>
                <h5>{player.artist}</h5>
            </div>
        </div>}
        <MediaConroller />
    </div>
    )
}