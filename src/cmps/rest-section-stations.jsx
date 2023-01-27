import { Link } from 'react-router-dom'

import defaultPhoto from '../assets/img/default-photo.png'
import { setSong } from '../store/player.action'
import { loadCurrStation } from '../store/station.actions'


export function RestSectionStations({ stations }) {

    function onPlayStation(ev, station) {
        ev.preventDefault()

        const firstSong = station.songs[0]
        const {id , imgUrl , title , channelTitle , addedAt} = firstSong
        const songToStore =
        {
            id,
            imgUrl,
            title,
            channelTitle,
            addedAt
        }
        setSong(songToStore)
        loadCurrStation(station._id)
    }

    function getStationDescription(station) {
        const channelTitles = station.songs.map(song => song.channelTitle);
        const uniqueTitles = [...new Set(channelTitles)];
        let combinedTitle = uniqueTitles.slice(0, 2).join(' • ');
        if (combinedTitle.length > 20) combinedTitle = combinedTitle.slice(0, 20) + "..";

        // if (combinedTitle.length > 35) combinedTitle = combinedTitle.slice(0, 35) + "..";
        return combinedTitle;
    }


    return (
        <section
            className="rest-section-stations">
            {stations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
                <div className="rest-section-station-preview" >
                    <div className="img-container" >
                        <img src={station.imgUrl ? station.imgUrl : station.songs.length > 0 ? station.songs[0].imgUrl : defaultPhoto} alt="" />
                        <span className='green-play-pause-btn' onClick={(event) => onPlayStation(event, station)}>
                            <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                        </span>
                    </div>
                    <div className='description'>
                        <h3>{station.name}</h3>
                        <p>{getStationDescription(station)}</p>
                    </div>
                </div>
                {/* </div> */}
            </Link>)}
        </section>
    )
}

