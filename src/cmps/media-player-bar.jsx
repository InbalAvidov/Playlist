import { MediaConroller } from "./media-controller"
import { Soundplayer } from "./youtube-react"
import cover from '../assets/img/see you again.png'
import { useSelector } from "react-redux"

export function MediaPlayerBar() {
    const songId = useSelector(storeState => storeState.playerModule.songId)
    console.log(songId);
    // const player = {
    //     _id: 'RgKAFK5djSk',
    //     title: 'See You Again',
    //     cover,
    //     artist: 'Wiz Khalifa'
    // }
    // const player = useSelector(storeState => storeState.playerModule.player)

    return (<div className="media-player" >
        <Soundplayer playerId={songId} />
        <div className="information">
            <img src={cover} alt="no image" />
            <div className="details">
                <h4>title</h4>
                <h5>artist</h5>
            </div>
        </div>
        <MediaConroller />
    </div>
    )
}