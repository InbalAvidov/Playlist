import { useEffect, useState } from "react"

import { Loader } from "../cmps/loader"
import { FirstSectionStations } from "../cmps/first-section-stations"
import { RestSectionStations } from "../cmps/rest-section-stations"
import { stationService } from "../service/station.service"

export function Home() {
    const [stations, setStations] = useState(null)

    // const stations = useSelector((storeState) => storeState.stationModule.stations)

    useEffect(() => {
        loadHomeStations()
    }, [])

    async function loadHomeStations() {
        const searchStations = await stationService.query({ page: 'home' })
        setStations(searchStations)
    }


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