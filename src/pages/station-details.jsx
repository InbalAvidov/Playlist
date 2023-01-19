import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from 'react-router-dom'
import { Loader } from "../cmps/loader"
import { PlaylistSongList } from "../cmps/station-song-list"
import { StationHeader } from "../cmps/station-header"

import { loadStationById } from "../store/station.actions"

export function StationDetails() {
  const station = useSelector((storeState) => storeState.stationModule.currStation)
  const { stationId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadStationById(stationId)
  }, [])

  if (Object.keys(station).length === 0) return <Loader />
  return (
    <main className="station-details">
      <button className="back-btn" onClick={() => navigate(-1)}>❮</button>
      < StationHeader station={station} />
      <PlaylistSongList songs={station.songs} />
    </main>
  )

}