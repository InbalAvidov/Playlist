import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadStations } from "../store/station.actions"

export function Home(){
    const stations = useSelector((storeState) => storeState.stationModule.stations)

    useEffect(()=>{
        loadStations()
    },[])
    console.log('stations:',stations)
    return( <main className="main-home">
        <h1>Good Morning</h1>
        {stations && <div className="home-playlists">
            {stations.map(station => <div className="playlist-preview">
                <img src={station.songs[0].imgUrl}/>
                <p>{station.name}</p>
            </div>
                )}
            </div>}
    </main>
    )
}