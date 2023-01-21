import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadStations } from "../store/station.actions"
import { Loader } from "../cmps/loader"
import { FirstSectionStations } from "../cmps/first-section-stations"
import { RestSectionStations } from "../cmps/rest-section-stations"

export function Home() {
    const stations = useSelector((storeState) => storeState.stationModule.stations)
    const player = useSelector(storeState => storeState.playerModule.player)
    console.log('PLAYER IM HOME CMP', player)

    useEffect(() => {
        loadStations()
    }, [])

    function getCurrentTimeGreet() {
        const hour = new Date().getHours()
        if (hour > 5 && hour < 12) return 'Good morning'
        else if (hour >= 12 && hour < 19) return 'Good afternoon'
        else if (hour >= 19 && hour <= 23) return 'Good evning'
    }

    if (!stations) return <Loader />
    return (<main className="main-home">
        {stations && <div className="home-stations">
            <h1>{getCurrentTimeGreet()}</h1>
            <FirstSectionStations stations={stations.slice(0, 6)} />
            <h2>Made For You</h2>
            <RestSectionStations stations={stations.slice(6)} />
            {/* <h2>Chill</h2>
            <RestSectionStations stations={stations.splice(10, 1)} /> */}
        </div>
        }
    </main>
    )
}