import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import defaultPhoto from '../assets/img/default-photo.jpeg'
import { utilService } from '../service/util.service'

export function FirstSectionStations({ stations }) {
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

    const player = useSelector(storeState => storeState.playerModule.player)
    return (
        <div className='clr-container' style={{ background: `linear-gradient( ${colorByImg} 0%, #121212 100%)` }}>
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
                    </div>
                </Link>
                )
                }
            </section >
        </div>
    )
}