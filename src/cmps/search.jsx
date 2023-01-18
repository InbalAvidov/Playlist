import { useState } from "react"
import { SoundTreck } from "./youtube-react"

export function Search({ searchedTrack }) {
    console.log(searchedTrack)
    const [isSearch, setIsSearch] = useState(false)
    return (
        <div>
            {!isSearch && <button onClick={() => setIsSearch(true)}> Search</button>}
            {isSearch && <SoundTreck trackId={searchedTrack._id} />}
        </div>
    )
}