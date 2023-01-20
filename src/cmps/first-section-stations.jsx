import { Link } from 'react-router-dom'
import  defaultPhoto  from '../assets/img/default-photo.jpeg'


export function FirstSectionStations({ stations }) {
    return (
        <section className="first-section-stations">
            {stations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
                <div className="first-section-station-preview" >
                    <div style=
                        {{
                            backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs ? station.songs[0].imgUrl : defaultPhoto}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            width: '80px', height: '80px'
                        }}>

                    </div>
                    <p>{station.name}</p>
                </div>
            </Link>
            )}
        </section>
    )
}