import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faLinesLeaning, faPlus, faHeart, faMusic } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux"
import { stationService } from "../service/station.service"
import { loadStations } from "../store/station.actions"

export function AppNav() {
    const user = useSelector((storeState => storeState.userModule.user))
    const [userStations, setUserStations] = useState([])
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
        setUserStations(userStations)
    }

    return (
        <main className="app-nav">
            <div className="logo">
                <img className="logo-img" src={logo} />
                <h1>Playlist</h1>
            </div>
            <nav>
                <NavLink to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon><span>Home</span></NavLink>
                <NavLink to="/search"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon><span>Search</span></NavLink>
                <NavLink to="/library" className="library-nav"><FontAwesomeIcon icon={faLinesLeaning}></FontAwesomeIcon><span>Your Library</span></NavLink>
                <NavLink to="/createStation"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span>Create Playlist</span></NavLink>
                <NavLink to="/liked"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon><span>Liked Songs</span></NavLink>
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