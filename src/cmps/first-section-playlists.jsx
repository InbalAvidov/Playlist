import { Link } from 'react-router-dom'

export function FirstSectionPlaylists({ stations }) {
    return (
        <section className="first-section-playlists">
            {stations.map(station => <Link to={`/station/${station._id}`}>
                <div className="first-section-playlist-preview" >
                    <div style=
                        {{
                            backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs[0].imgUrl}")`,
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