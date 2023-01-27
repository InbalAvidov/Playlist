import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

import { loadStations } from "../store/station.actions"
import { Loader } from "../cmps/loader"
import { stationService } from "../service/station.service"
import defaultPhoto from '../assets/img/default-photo.png'
import { RestSectionStations } from "../cmps/rest-section-stations"


export function UserLibrary() {
  const stations = useSelector((storeState) => storeState.stationModule.stations)
  const user = useSelector((storeState => storeState.userModule.user))
  const [userStations, setUserStations] = useState(null)

  useEffect(() => {
    loadStations()
  }, [])

  useEffect(() => {
    if (user) {
      getUserStations(user)
    }
  }, [user, stations])

  async function getUserStations(user) {
    let userStations = await stationService.query({ userId: user._id })
    userStations = [...userStations, ...user.likedStations]
    setUserStations(userStations)
  }

  if (!user) {
    return (
      <main className="main-library">
        <h1> User Library </h1>
        <h4>Please login first</h4>
      </main>
    )
  }
  if (!stations || !userStations) return <Loader />
  return (
    <main className='main-library clr-container'>
      <h1> Playlists </h1>
      <div className="playlists">
        <Link className="liked-song-playlist" to="/liked">
          <div className="library-liked-songs" >
            <div className="img-liked-container flex">
              <p>Listen to all the songs you liked</p>
              <h2>Liked songs</h2>
            </div>
          </div>
        </Link>
        <RestSectionStations stations={userStations} />
        {/* {
          userStations.map((station, idx) => (
            <Link
              to={`/station/${station._id}`}
              key={station._id}
              className={idx}
            >
              {station.imgUrl 
                ?
                <div className="img-container"
                  style={{
                    backgroundImage: `url("${station.imgUrl}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "230px", height: "230px"
                  }}>
                </div>
                :
                station.songs.length > 0 ?
                <div class="song-img" style={{
                  width: '180px',
                  height: '180px',
                  overflow: 'hidden',
                }}>
                  <img src={station.songs[0].imgUrl} style={{ width: '390px', height: '390px', marginTop: '-80px', marginLeft: '-100px' }} />
                </div>
                :
                <div className="img-container"
                  style={{
                    backgroundImage: `url("${defaultPhoto}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    width: "230px", height: "230px"
                  }}>
                </div>
              }
              <h2>{station.name}</h2>
              <p>{station.description ? station.description.slice(0, 15) : `By ${user.username}`}</p>
            </Link>
          ))
        } */}
      </div>
    </main >
  )
}