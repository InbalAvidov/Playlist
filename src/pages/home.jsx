import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadStations } from "../store/station.actions"
import { StationDetails } from "./station-details"
import { Link } from 'react-router-dom'

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
                
            <Link to={`/station/${station._id}`}><img src={station.songs[0].imgUrl}/></Link>
                <p>{station.name}</p>
            </div>
                )}
            </div>}

    </main>
    )
}