import { useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from "react"

import { Loader } from "../cmps/loader"
import { SongList } from "../cmps/station-song-list"
import { StationHeader } from "../cmps/station-header"
import { stationService } from "../service/station.service"
import { uploadService } from "../service/upload.service"
import { loadStations, removeStation, updateStation } from "../store/station.actions"
import { saveStation } from "../store/station.actions";
import { useSelector } from "react-redux"


export function Station() {
  const [station, setStation] = useState(null)
  const stations = useSelector((storeState) => storeState.stationModule.stations)
  console.log('Station stations', stations);
  const { stationId } = useParams()
  console.log('Station stationId', stationId);
  const navigate = useNavigate()


  

  useEffect(() => {
    if (!stationId) {
      saveEmptyStation()
    }
    else loadStation()
  }, [stationId])

  
  async function saveEmptyStation() {
    const newStation = await saveStation(stationService.getEmptyStation())
    setStation(newStation)
  }
  
  async function loadStation() {  
    const currStation = stationService.get(stationId)
    setStation(currStation)
  }

  async function onSelectImg(ev) {
    const imgUrl = await uploadService.uploadImg(ev)
    station.imgUrl = imgUrl
    return imgUrl
  }

  function handleChange(field, val) {
    setStation(prevStation => ({ ...prevStation, [field]: val }))
  }

  async function onDeleteSong(songId) {
    if (station.songs.length > 1) {
      const updatedStation = await stationService.removeSong(station._id, songId)
      setStation(updatedStation)
    }
  }

  async function saveChanges() {
    await updateStation(station)
  }

  async function deleteStation(stationId) {
    await removeStation(stationId)
    navigate('/')
  }

  if (!station) return <Loader />
  else return (
    <main className="station-details">
      <StationHeader station={station} deleteStation={deleteStation} saveChanges={saveChanges} onSelectImg={onSelectImg} handleChange={handleChange} />
      <SongList station={station} handleChange={handleChange} onDeleteSong={onDeleteSong} />
    </main>
  )

}