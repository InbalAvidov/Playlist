import { useEffect } from "react"
import {  useNavigate, useParams } from 'react-router-dom'
import { useState } from "react"

import { Loader } from "../cmps/loader"
import { SongList } from "../cmps/station-song-list"
import { StationHeader } from "../cmps/station-header"
import { stationService } from "../service/station.service"
import { uploadService } from "../service/upload.service"
import { removeStation, updateStation } from "../store/station.actions"

export function Station({ saveStation }) {
  const [station, setStation] = useState(null)
  const { stationId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!stationId) {
      setStation(stationService.getEmptyStation())
    }
    else loadStation()
  }, [stationId])

  async function loadStation() {
    const currStation = await stationService.get(stationId)
    console.log('currStation:',currStation)
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
      < StationHeader station={station} deleteStation={deleteStation} saveChanges={saveChanges} onSelectImg={onSelectImg} handleChange={handleChange} onSaveStation={onSaveStation} />
      <SongList station={station} handleChange={handleChange} onDeleteSong={onDeleteSong} />
    </main>
  )

}