import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


import defaultPhoto from '../assets/img/default-photo.jpeg'
import { setSong } from '../store/player.action'
import { loadCurrStation } from '../store/station.actions'


export function RestSectionStations({ stations }) {
    const player = useSelector(storeState => storeState.playerModule.player)

    function onPlayStation(ev, station) {
        ev.stopPropagation()
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


    function getStationDescription(station) {
        const channelTitles = station.songs.map(song => song.channelTitle);
        const uniqueTitles = [...new Set(channelTitles)];
        let combinedTitle = uniqueTitles.slice(0, 2).join(' • ');
        if (combinedTitle.length > 27) combinedTitle = combinedTitle.slice(0, 27) + "..";
        return combinedTitle;
    }



return (
    <section
        className="rest-section-stations">
        {stations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
            <div className="rest-section-station-preview" >
                <div className="img-container" style=
                    {{
                        backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs.length > 0 ? station.songs[0].imgUrl : defaultPhoto}")`,
                        backgroundRepeat: "repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: '190px', height: '190px', margin: 'auto'
                    }}>
                    <button className='green-play-pause-btn' onClick={(event) => onPlayStation(event, station)}>
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </button>
                </div>
                <h3>{station.name}</h3>
                <p>{station.description?.slice(0, 15)}</p>
                <p>{getStationDescription(station)}</p>
            </div>
        </Link>)}
    </section>
)
}

