import { useEffect } from "react"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { loadStations } from "../store/station.actions"
import { Loader } from "../cmps/loader"
import { SongPreview } from "../cmps/station-song-preview"
// import likedSongs from '../assets/img/likedSongs.png'
// import likedSong from '../assets/img/liked-songs.png'

export function LikedSongs() {
  const stations = useSelector((storeState) => storeState.stationModule.stations)
  const user = useSelector((storeState => storeState.userModule.user))
  
  const likedSongPic = require('../assets/img/likedSongPic.png')
  console.log('LikedSongs user', user)
  console.log('LikedSongs stations', stations)

  useEffect(() => {
      loadStations()
  }, [])

  // if (!user) {
  //   return (
  //     <main className="liked-songs">
  //       <h1>Liked Songs</h1>
  //       <h4>Please login first</h4>
  //     </main>
  //   ) 
  // }

  if (!stations) return <Loader />

  const likedSongs = stations.flatMap(station => 
    station.songs.filter(song => 
      (song.likedByUsers || []).find(minimalUser => minimalUser._id === user._id)))

  console.log('LikedSongs likedSongs', likedSongs)

  return (
        <>
          <section className="liked-header flex">

            <div className="img-container">
              <img alt="" 
                  src={likedSongPic}
                  style={{  
                    width: "200px", height: "200px"
                  }}/> 
            </div>
        
            <div className="info-liked-container">
                <p className="station">playlist</p>
                <h1>Liked Songs</h1>
                <p><span>{user.fullname} </span>
                  • {likedSongs.length + ' '} 
                  songs</p>
            </div>
            
          </section>

      <main className="liked-songs">
        <section className="songs-list">
            <div className="song-preview songs-list-header">
                <p className="song-number">#</p>
                <p className="song-img-title">Title</p>
                <p className="song-date">Date Added</p>
                <p className="song-duration"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon></p>
            </div>
            {likedSongs.map((song, idx) =>
                <SongPreview key={song.id} song={song} idx={idx} />)
            }
        </section>
      </main>
    </>
  )
}