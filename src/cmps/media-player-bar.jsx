import { PlayerController } from "./player-controller"
import { SoundPlayer } from "./sound-player"
import { useSelector } from "react-redux"

export function PlayerBar() {
    const player = useSelector(storeState => storeState.playerModule.player)
    const song = useSelector(storeState => storeState.playerModule.song)
    console.log('song from player bar', song)
    song ? console.log('song from player bar', song) : console.log('no song')

    return (<div className="media-player" >
        {song && <SoundPlayer playerId={song._id} />}
        {player && <div className="information">
            <img src={song.imgUrl} alt="no image" />
            <div className="details">
                <h4>{player.videoTitle}</h4>
                <h5>{player.artist}</h5>
            </div>
        </div>}
        <PlayerController />
    </div>
    )
}