import { useState } from "react"
import { MediaPlayer } from "./media-player"
import { SoundTreck } from "./youtube-react"

export function DemeSearch({ searchedTrack }) {
    console.log(searchedTrack)
    const [isSearch, setIsSearch] = useState(false)
    return (
        <div className="media-player" >
            {!isSearch && <button onClick={() => setIsSearch(true)}> Search</button>}
            {isSearch && <SoundTreck trackId={searchedTrack._id} />}
            <MediaPlayer />
        </div>
    )
}