import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Loader } from '../cmps/loader'
import { RestSectionStations } from '../cmps/rest-section-stations'

export function ShowAll() {
    const { category } = useParams()
    const [categoryStations, setCategoryStations] = useState(null)
    const stations = useSelector((storeState) => storeState.stationModule.stations)


    useEffect(() => {
        loadStations()
    }, [])

    async function loadStations() {
        const categoryStations = stations.filter(station => station.tags.includes(category))
        setCategoryStations(categoryStations)
    }

    if (!categoryStations) return <Loader />
    return (
        <main className='show-all clr-container'>
            <h2>{category}</h2>
            <RestSectionStations stations={categoryStations} />
        </main>
    )
}