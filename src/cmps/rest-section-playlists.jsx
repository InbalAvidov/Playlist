import { Link } from 'react-router-dom'

export function RestSectionPlaylists({ stations }) {
    return (
        <section
            className="rest-section-playlists">
            {stations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
                <div className="rest-section-playlist-preview" >
                    <div className="img-container" style=
                        {{
                            backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs[0].imgUrl}")`,
                            backgroundRepeat: "repeat",
                            backgroundPosition: "center",
                            backgroundSize: "auto",
                            width: '200px', height: '200px', margin: 'auto'
                        }}>
                    </div>
                    <h2>{station.name}</h2>
                    <p>{station.discription?.slice(0, 15)}</p>
                </div>
            </Link>)}
        </section>
    )
}