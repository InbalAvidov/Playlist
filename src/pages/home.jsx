import { useEffect } from "react"
import { useSelector } from "react-redux"
import { loadStations } from "../store/station.actions"
import { Link } from 'react-router-dom'
import { Loader } from "../cmps/loader"

export function Home() {
    const stations = useSelector((storeState) => storeState.stationModule.stations)

    useEffect(() => {
        loadStations()
    }, [])

    function getCurrentTime() {
        const hour = new Date().getHours()
        if (hour > 5 && hour < 12) return 'Good morning'
        else if (hour >= 12 && hour < 19) return 'Good afternoon'
        else if (hour >= 19 && hour <= 23) return 'Good evning'
    }
    if (!stations.length > 0) return <Loader />
    return (<main className="main-home">
        {stations && <div className="home-playlists">
            <h1>{getCurrentTime()}</h1>
            <section className="first-section-playlists">
                {stations.slice(0, 6).map(station => <Link to={`/station/${station._id}`}>
                    <div className="first-section-playlist-preview" >
                        <div style={{backgroundImage : `url("${station.imgUrl ? station.imgUrl : station.songs[0].imgUrl}")`, backgroundRepeat : "no-repeat" , backgroundPosition : "center center" , backgroundSize:"auto", width:'70px' , height:'70px'}}></div>
                        <p>{station.name}</p>
                    </div>
                </Link>
                )}
            </section>
            <h2>Made For You</h2>
            <section className="rest-section-playlists">
                {stations.splice(6, 4).map(station => <Link to={`/station/${station._id}`}>
                    <div className="rest-section-playlist-preview" >
                        <div className="img-container" style={{backgroundImage : `url("${station.imgUrl ? station.imgUrl : station.songs[0].imgUrl}")`, backgroundRepeat : "repeat" , backgroundPosition : "center" , backgroundSize:"auto", width:'200px' , height:'200px' , margin : 'auto'}}>
                        </div>
                        <h2>{station.name}</h2>
                        <p>{station.discription?.slice(0,15)}</p>
                    </div>
                </Link>)}
            </section>
        </div>}
    </main>
    )
}