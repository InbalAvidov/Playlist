import { useEffect } from "react"
import { useSelector } from "react-redux"

import { loadStations } from "../store/station.actions"
import { Loader } from "../cmps/loader"
import { FirstSectionStations } from "../cmps/first-section-stations"
import { RestSectionStations } from "../cmps/rest-section-stations"

export function Home() {
    const stations = useSelector((storeState) => storeState.stationModule.stations)

    useEffect(() => {
        loadStations({ page: 'home' })
    }, [])

    if (!stations) return <Loader />
    return (<main className="main-home">
        {stations && <div className="home-stations">
            <FirstSectionStations stations={stations.slice(0, 6)} />
            <h2>Made For You</h2>
            <RestSectionStations stations={stations.slice(6, 10)} />
            <h2>Chill</h2>
            <RestSectionStations stations={stations.slice(10, 14)} />
            <h2>Recently played</h2>
            <RestSectionStations stations={stations.slice(14, 18)} />
            <h2>More of what you like</h2>
            <RestSectionStations stations={stations.slice(18, 22)} />
        </div>
        }
    </main >
    )
}