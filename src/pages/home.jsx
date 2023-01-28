import { useEffect, useState } from 'react'

import { Loader } from '../cmps/loader'
import { FirstSectionStations } from '../cmps/first-section-stations'
import { RestSectionStations } from '../cmps/rest-section-stations'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadStations } from '../store/station.actions'
import { loadUsers } from '../store/user.action'

export function Home() {
    const stations = useSelector((storeState) => storeState.stationModule.stations)
    const [homeStations, setHomeStations] = useState(null)

    useEffect(() => {
        loadStations()
        loadUsers()
    }, [])

    useEffect(() => {
        if(!stations) return
        loadHomeStations()
    }, [stations])


    function loadHomeStations() {
        const homeStations = stations.filter(station=>station.tags.includes('home'))
        setHomeStations(homeStations)
    }


    if (!homeStations) return <Loader />
    return (<main className='main-home'>
        {stations && <div className='home-stations'>
            <FirstSectionStations stations={homeStations.slice(0, 6)} />
            <div className='title-section'>
                <h2>Made For You</h2>
                <NavLink to='show/Made For you'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={homeStations.slice(7, 11)} />
            <div className='title-section'>
                <h2>Chill</h2>
                <NavLink to='show/Chill'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={homeStations.slice(11, 15)} />
            <div className='title-section'>
                <h2>Recently played</h2>
                <NavLink to='show/Recently played'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={homeStations.slice(15, 19)} />
            <div className='title-section'>
                <h2>More of what you like</h2>
                <NavLink to='show/More of what you like'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={homeStations.slice(19, 23)} />
        </div>
        }
    </main >
    )
}