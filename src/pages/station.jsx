import { useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from "react"

import { Loader } from "../cmps/loader"
import { SongList } from "../cmps/song-list"
import { StationHeader } from "../cmps/station-header"

import { stationService } from "../service/station.service"
import { uploadService } from "../service/upload.service"
import { removeStation, setColor, updateStation } from "../store/station.actions"
import { saveStation } from "../store/station.actions";
import { utilService } from "../service/util.service"
import { useSelector } from "react-redux"

export function Station() {
  const [station, setStation] = useState(null)
  const color = useSelector(storeState => storeState.stationModule.color)
  const { stationId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!stationId) {
      saveEmptyStation()
    }
    else loadStation()
  }, [stationId])

  async function saveEmptyStation() {
    const newStation = await saveStation(stationService.getEmptyStation())
    console.log('newStation:', newStation)
    setStation(newStation)
  }

  async function loadStation() {
    const currStation = await stationService.get(stationId)
    const clr = await utilService.getMainColor(currStation.imgUrl)
    setColor(clr)
    setStation(currStation)
  }

  async function onSelectImg(ev) {
    try {
      const imgUrl = await uploadService.uploadImg(ev)
      station.imgUrl = imgUrl
      const color = await utilService.getMainColor(imgUrl)
      setColor(color)
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
    navigate(-1)
  }

  if (!station) return <Loader />
  else return (
    <main className="station-details">
      <div className='clr-container' style={{ backgroundColor: `${color || '#121212'}` }}>
        <StationHeader station={station} deleteStation={deleteStation} saveChanges={saveChanges} onSelectImg={onSelectImg} handleChange={handleChange} onSaveStation={onSaveStation} />
      </div>
      <SongList station={station} handleChange={handleChange} onDeleteSong={onDeleteSong} />
    </main>
  )

}