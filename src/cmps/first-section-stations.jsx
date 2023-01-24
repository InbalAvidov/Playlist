import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import defaultPhoto from '../assets/img/default-photo.jpeg'
import { utilService } from '../service/util.service'
import { setSong } from '../store/player.action'
import { loadCurrStation } from '../store/station.actions'

export function FirstSectionStations({ stations }) {
    const player = useSelector(storeState => storeState.playerModule.player)
    const [colorByImg, setColorByImg] = useState('rgb(72, 32, 176)')
    
    async function onSetBGColor(url) {
        try {
            const color = await utilService.getMainColor(url)
            console.log(color)
            setColorByImg(color)
        } catch (err) {
            console.log('Cannot set color', err)
        }
    }


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
        <div className='clr-container' style={{ backgroundImage: `linear-gradient( ${colorByImg} 0%, #121212 100%)` }}>
            <h1>{utilService.getCurrentTimeGreet()}</h1>
            <section className="first-section-stations">
                {stations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
                    <div
                        className="first-section-station-preview"
                        onMouseMove={() => onSetBGColor(station.imgUrl)}
                        onMouseLeave={() => onSetBGColor(stations[0].imgUrl)}
                    >
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
                            <svg role="img" height="28" width="28" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="play-pause Svg-sc-ytk21e-0 uPxdw"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                        </button>
                    </div>
                </Link>
                )
                }
            </section >
        </div>
    )
}