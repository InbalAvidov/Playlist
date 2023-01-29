import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import { Loader } from '../cmps/loader'
import { RestSectionStations } from '../cmps/rest-section-stations'

export function Genre() {
    const { genreName } = useParams()
    const stations = useSelector((storeState) => storeState.stationModule.stations)
    const [artistStations, setArtistStations] = useState(null)
    const [newStations, setnewStations] = useState(null)

    useEffect(() => {
        loadStations()
    }, [])

    async function loadStations() {
        const genreStations =stations.filter(station => station.tags.includes(genreName))
        const byArtist = genreStations.filter(station => station.tags.includes('artist'))
        setArtistStations(byArtist)
        const newStations = genreStations.filter(station => station.tags.includes('new releases'))
        setnewStations(newStations)
    }
    
    if (!genreName || !newStations) return <Loader />
    return (
        <main className='main-genre clr-container'>
            <h1>{genreName}</h1>
            <div className='title-section'>
                <h2>{genreName} Artist</h2>
                <NavLink to='/show/artist'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={artistStations.slice(0, 4)} />
            <div className='title-section'>
                <h2>New Releases</h2>
                <NavLink to='/show/new releases'>
                <p>Show all</p>
                </NavLink>
            </div>
            <RestSectionStations stations={newStations.slice(0, 4)} />
        </main>
    )
}