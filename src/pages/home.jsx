import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadStations } from "../store/station.actions"
import { Loader } from "../cmps/loader"
import { FirstSectionPlaylists } from "../cmps/first-section-playlists"
import { RestSectionPlaylists } from "../cmps/rest-section-playlists"

export function Home() {
    const stations = useSelector((storeState) => storeState.stationModule.stations)

    useEffect(() => {
        loadStations()
    }, [])

    function getCurrentTime() {
        const hour = new Date().getHours()
        if (hour > 5 && hour < 12) return 'Good morning'
        else if (hour >= 12 && hour < 19) return 'Good afternoon'
        else if (hour >= 19 && hour <= 23) return 'Good evning'
    }
    if (!stations.length > 0) return <Loader />
    return (<main className="main-home">
        {stations && <div className="home-playlists">
            <h1>{getCurrentTime()}</h1>
            <FirstSectionPlaylists stations={stations.slice(0, 6)} />
            <h2>Made For You</h2>
            <RestSectionPlaylists stations={stations.splice(6, 4)} />
        </div>
        }
    </main>
    )
}