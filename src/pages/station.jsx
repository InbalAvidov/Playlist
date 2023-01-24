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
import { utilService } from "../service/util.service"


export function Station() {
  const [station, setStation] = useState(null)
  const [colorByImg, setColorByImg] = useState(null)
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
    const currStation = await stationService.get(stationId)
    setStation(currStation)
  }

  async function onSelectImg(ev) {
    try {
      const imgUrl = await uploadService.uploadImg(ev)
      station.imgUrl = imgUrl
      const color = await utilService.getMainColor(imgUrl)
      setColorByImg(color)
      return imgUrl
    } catch (err) {
      console.log('Cant set image', err)
    }
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

  function onSaveStation() {
    saveStation(station)
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
      <div className='clr-container' style={{ background: `linear-gradient( ${colorByImg || '#121212'} 0%, #121212 100%)` }}>
        <StationHeader station={station} deleteStation={deleteStation} saveChanges={saveChanges} onSelectImg={onSelectImg} handleChange={handleChange} onSaveStation={onSaveStation} />
      </div>
      <SongList station={station} handleChange={handleChange} onDeleteSong={onDeleteSong} />
    </main>
  )

}