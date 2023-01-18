import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadStations } from "../store/station.actions"

export function Home(){
    const stations = useSelector((storeState) => storeState.stationModule.stations)

    useEffect(()=>{
        loadStations()
    },[])
    function getCurrentTime(){
        const hour = new Date().getHours()
        if (hour>5 && hour < 12) return 'Good morning'
        else if(hour >= 12 && hour <19) return 'Good afternoon'
        else if(hour >= 19 && hour <= 5) return 'Good night'
    }
    console.log('stations:',stations)
    return( <main className="main-home">
        <h1>{getCurrentTime()}</h1>
        {stations && <div className="home-playlists">
            {stations.map(station => <div className="playlist-preview" >
                <img src={station.songs[0].imgUrl}/>
                <p>{station.name}</p>
            </div>
                )}
            {stations.map(station => <div className="playlist-preview">
                <img src={station.songs[0].imgUrl}/>
                <p>{station.name}</p>
            </div>
                )}
            {stations.map(station => <div className="playlist-preview">
                <img src={station.songs[0].imgUrl}/>
                <p>{station.name}</p>
            </div>
                )}
            </div>}
            <h1>Made For You</h1>
    </main>
    )
}