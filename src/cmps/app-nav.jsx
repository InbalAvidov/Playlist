import { NavLink } from "react-router-dom"
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { faSearch, faHome, faLinesLeaning, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { stationService } from "../service/station.service"
import { loadStations } from "../store/station.actions"

import logo from "../assets/img/logo-white.png"

export function AppNav() {
    const user = useSelector((storeState => storeState.userModule.user))
    const [userStations, setUserStations] = useState(null)
    const stations = useSelector((storeState) => storeState.stationModule.stations)

    useEffect(() => {
        loadStations()
    }, [])

    useEffect(() => {
        if (user) {
            getUserStations(user)
        }
    }, [user, stations])

    async function getUserStations(user) {
        const userStations = await stationService.query({ userId: user._id })
        console.log('userStations:',userStations)
        setUserStations(userStations)
    }

    return (
        <main className="app-nav">
            <div className="logo">
                <img className="logo-img" src={logo} />
            </div>
            <nav>
                <NavLink to="/"><FontAwesomeIcon icon={faHome} />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/search">
                    <FontAwesomeIcon icon={faSearch} />
                    <span>Search</span>
                </NavLink>
                <NavLink to="/library" className="library-nav">
                    <FontAwesomeIcon icon={faLinesLeaning} />
                    <span>Your Library</span>
                </NavLink>
                <NavLink to="/createStation">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>Create Playlist</span>
                </NavLink>
                <NavLink to="/liked">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>Liked Songs</span>
                </NavLink>
            </nav>
            {userStations && <div className="hr-line"></div>}
            {userStations && <nav className="user-laylist-nav">
                {userStations.map(userStation =>
                    <NavLink key={userStation._id} to={`/station/${userStation._id}`}>
                        <span className="user-station">
                            {userStation.name}
                        </span>
                    </NavLink>)}
            </nav>}
        </main>
    )
}