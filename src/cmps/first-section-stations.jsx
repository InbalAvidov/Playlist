import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import defaultPhoto from '../assets/img/default-photo.jpeg'


export function FirstSectionStations({ stations }) {
    const player = useSelector(storeState => storeState.playerModule.player)
    console.log('Player at FirstSectionStations', player)
    return (
        <section className="first-section-stations">
            {stations.map(station => <Link to={`/station/${station._id}`}>
                <div className="first-section-station-preview" >
                    <div style=
                        {{
                            backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs ? station.songs[0].imgUrl : defaultPhoto}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            width: '70px', height: '70px'
                        }}>

                    </div>
                    <p>{station.name}</p>
                </div>
            </Link>
            )}
        </section>
    )
}