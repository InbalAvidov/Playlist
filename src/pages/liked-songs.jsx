import { useEffect } from "react"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { loadStations } from "../store/station.actions"
import { Loader } from "../cmps/loader"
import { SongPreview } from "../cmps/station-song-preview"

export function LikedSongs() {
  const stations = useSelector((storeState) => storeState.stationModule.stations)
  const user = useSelector((storeState => storeState.userModule.user))

  console.log('LikedSongs user', user)
  console.log('LikedSongs stations', stations)

  useEffect(() => {
      loadStations()
  }, [])

  if (!user) {
    return (
      <main className="liked-songs">
        <h1>Liked Songs</h1>
        <h4>Please login first</h4>
      </main>
    )
  }

  if (!stations) return <Loader />

  const likedSongs = stations.flatMap(station => 
    station.songs.filter(song => 
      (song.likedByUsers || []).find(minimalUser => minimalUser._id === user._id)))

      console.log('LikedSongs likedSongs', likedSongs)
  return (
    <main className="liked-songs">
      <h1>Liked Songs</h1>
      <section className="songs-list">
          <div className="song-preview songs-list-header">
              <p className="song-number">#</p>
              <p className="song-img-title">Title</p>
              <p className="song-date">Date Added</p>
              <p className="song-duration"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></p>
          </div>
          {likedSongs.map((song, idx) =>
              <SongPreview key={idx} song={song} idx={idx} />)
          }
      </section>
    </main>
  )
}