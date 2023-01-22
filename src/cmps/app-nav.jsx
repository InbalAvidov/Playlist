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

    return (
        <main className="app-nav">
            <div className="logo">
                <img className="logo-img" src={logo} />
                {/* Playlist */}
            </div>
            <nav className='nav-menu'>
                <NavLink to="/">
                    <svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw home-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path>
                        <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path></svg>
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
            {userStations && <nav className="user-station-nav">
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