import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faLinesLeaning, faPlus, faHeart } from '@fortawesome/free-solid-svg-icons'

import { stationService } from "../service/station.service"
import { loadStations } from "../store/station.actions"

import logo from "../assets/img/logo-white.png"

export function AppNav() {
    const user = useSelector((storeState => storeState.userModule.user))
    const [userStations, setUserStations] = useState(null)
    const stations = useSelector((storeState) => storeState.stationModule.stations)

    useEffect(() => {
        loadStations()
        console.log('checkkkkk')

    }, [])

    useEffect(() => {
        if (user) {
            getUserStations(user)
        }
    }, [user, stations])

    async function getUserStations(user) {
        const userStations = await stationService.query({ userId: user._id })
        console.log('userStations:', userStations)
        setUserStations(userStations)
    }
    console.log('userStations:',userStations)
    return (
        <main className="app-nav">
            <div className="logo">
                <img className="logo-img" src={logo} />
                {/* Playlist */}
            </div>
            <nav className='nav-menu'>
                <NavLink to="/">
                    <FontAwesomeIcon icon={faHome} />
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
            {userStations && <nav className="nav-menu user-station-nav">
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