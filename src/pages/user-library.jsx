import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadStations } from '../store/station.actions'
import { Loader } from '../cmps/loader'
import { stationService } from '../service/station.service'
import { CardStationPreview } from '../cmps/card-station-preview'


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
    try{
      let userStations = await stationService.query({ userId: user._id })
      userStations = [...userStations, ...user.likedStations]
      setUserStations(userStations)
    }catch(err){
      console.log('err:',err)
    }
  }

  if (!user) {
    return (
      <main className='main-library'>
        <h1> User Library </h1>
        <h4>Please login first</h4>
      </main>
    )
  }
  if (!stations || !userStations) return <Loader />
  return (
    <main className='user-library clr-container'>
      <h1> Playlists </h1>
      <div className='user-station'>
        <Link className='liked-song-playlist' to='/liked'>
          <div className='library-liked-songs' >
            <div className='img-liked-container flex'>
              <p>Listen to all the songs you liked</p>
              <h2>Liked songs</h2>
              <p>{user.likedSongs.length} liked songs</p>
            </div>
          </div>
        </Link>
        {userStations.map(station => <Link to={`/station/${station._id}`} key={station._id}>
          <CardStationPreview station={station} />
        </Link>)}
      </div>
    </main >
  )
}