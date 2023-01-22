import { useEffect } from "react"
import { useSelector } from "react-redux"

export function PlayerInfo({song}) {
    // const player = useSelector(storeState => storeState.playerModule.player)
    
    // useEffect(() => {
    //     console.log('GOT PLAYER AUTHOR')
    // }, [player])
    // return Promise.all(player.playerInfo.videoData.author, player.videoTitle) &&
    return <div className="details">
        <h4>{song.title}</h4>
        <h5>{song.artist}</h5>
    </div>
}