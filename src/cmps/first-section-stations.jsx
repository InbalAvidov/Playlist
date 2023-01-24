import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import defaultPhoto from '../assets/img/default-photo.jpeg'
import { setSong } from '../store/player.action'
import { loadCurrStation } from '../store/station.actions'

export function FirstSectionStations({ stations }) {
    const player = useSelector(storeState => storeState.playerModule.player)

    function onPlayStation(ev, station) {
        ev.preventDefault()
        const firstSong = station.songs[0]
        const songToStore =
        {
            _id: firstSong.id,
            imgUrl: firstSong.imgUrl,
            title: firstSong.title,
            artist: firstSong.channelTitle
        }
        setSong(songToStore)
        loadCurrStation(station._id)
    } 

    return (
        <section className="first-section-stations">
            {stations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
                <div className="first-section-station-preview" >
                    <div style=
                        {{
                            backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs ? station.songs[0].imgUrl : defaultPhoto}")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            width: '80px', height: '80px'
                        }}>
                    </div>
                    <p>{station.name}</p>
                    <button className='green-play-pause-btn' onClick={(event) => onPlayStation(event, station)}>
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </button>
                </div>
            </Link>
            )}
        </section>
    )
}