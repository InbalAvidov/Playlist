import { useEffect, useState } from "react"

import { Loader } from "../cmps/loader"
import { FirstSectionStations } from "../cmps/first-section-stations"
import { RestSectionStations } from "../cmps/rest-section-stations"
import { stationService } from "../service/station.service"
import { NavLink } from "react-router-dom"

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
            <div className="title-section">
                <h2>Made For You</h2>
                <NavLink to='show/Made For you'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={stations.slice(6, 10)} />
            <div className="title-section">
                <h2>Chill</h2>
                <NavLink to='show/Chill'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={stations.slice(10, 14)} />
            <div className="title-section">
                <h2>Recently played</h2>
                <NavLink to='show/Recently played'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={stations.slice(14, 18)} />
            <div className="title-section">
                <h2>More of what you like</h2>
                <NavLink to='show/More of what you like'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={stations.slice(18, 22)} />
        </div>
        }
    </main >
    )
}