import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import defaultPhoto from '../assets/img/default-photo.jpeg'


export function RestSectionStations({ stations }) {
    const player = useSelector(storeState => storeState.playerModule.player)
    console.log('PLAYER IM RestSectionStations CMP', player)
    return (
        <section
            className="rest-section-stations">
            {stations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
                <div className="rest-section-station-preview" >
                    <div className="img-container"
                        style={{
                            backgroundImage: `url("${station.imgUrl ? station.imgUrl : (station.songs.length > 0 ? station.songs[0].imgUrl : defaultPhoto)}")`,
                            backgroundRepeat: "repeat",
                            backgroundPosition: "center",
                            backgroundSize: "auto",
                            width: '200px', height: '200px', margin: 'auto'
                        }}>
                    </div>
                    <h2>{station.name}</h2>
                    <p>{station.description?.slice(0, 15)}</p>
                </div>
            </Link>)}
        </section>
    )
}