import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons'

import { stationService } from "../service/station.service"
import { loadStations } from "../store/station.actions"

import logo from "../assets/img/logo-white.png"
import plus from "../assets/img/plus.png"

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
                    <svg role="img" height="24" width="24" aria-hidden="true" color='white' class="Svg-sc-ytk21e-0 uPxdw home-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"></path></svg>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/search">
                    <svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw search-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
                    <span>Search</span>
                </NavLink>
                <NavLink to="/library" className="library-nav">
                    <svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw collection-icon" viewBox="0 0 24 24" data-encore-id="icon"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
                    <span>Your Library</span>
                </NavLink>
                <NavLink to="/createStation" className='a-create'>
                    <div className='create-station'>
                        <div className='create-station-box'>
                            {/* <svg role="img" height="12" width="12"  aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg> */}
                            <img src={plus}/>
                        </div>
                    </div>
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