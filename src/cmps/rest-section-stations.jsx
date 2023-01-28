import { Link } from 'react-router-dom'

import { CardStationPreview } from './card-station-preview'

export function RestSectionStations({ stations }) {
    
    return (
        <section
            className='rest-section-stations'>
            {stations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
                <CardStationPreview station={station} />
            </Link>)}
        </section>
    )
}

