import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate, useParams } from 'react-router-dom'

import { loadStations } from "../store/station.actions"
import { Loader } from "../cmps/loader"
import defaultPhoto from '../assets/img/default-photo.jpeg'

export function UserLibrary() {
  const stations = useSelector((storeState) => storeState.stationModule.stations)
  const user = useSelector((storeState => storeState.userModule.user))

  useEffect(() => {
    loadStations()
  }, [])

  if (!user) {
    return (
      <main className="main-library">
        <h1> User Library </h1>
        <h4>Please login first</h4>
      </main>
    )
  }

  if (!stations) return <Loader />

  const userStations = stations.filter(station => station.createdBy._id === user._id)

  return (
    <main className="main-library">
      <h1> Playlists </h1>

      <Link to="/liked">
        <div className="library-liked-songs" >
          <div className="img-container" style=
            {{
              backgroundImage: `url("${defaultPhoto}")`,
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
              backgroundSize: "auto",
              width: '240px', height: '240px', margin: 'auto'
            }}>
          </div>
          <h2>Liked songs</h2>
          <p>Listen to all the songs you liked</p>
        </div>
      </Link>

      {
        userStations.map((station, idx) => (
          <Link to={`/station/${station._id}`} key={station._id}>
            <div className="library-station-preview" >
              <div className="img-container" style=
                {{
                  backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs.length > 0 ? station.songs[0].imgUrl : defaultPhoto}")`,
                  backgroundRepeat: "repeat",
                  backgroundPosition: "center",
                  backgroundSize: "auto",
                  width: '160px', height: '160px', margin: 'auto'
                }}>
              </div>
              <h2>{station.name}</h2>
              <p>{station.description?.slice(0, 15)}</p>
            </div>
          </Link>
        ))
      }
    </main>
  )
}