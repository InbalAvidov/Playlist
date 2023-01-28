import { useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from "react"
import { useSelector } from "react-redux"

import { Loader } from "../cmps/loader"
import { SongList } from "../cmps/song-list"
import { StationHeader } from "../cmps/station-header"

import { stationService } from "../service/station.service"
import { uploadService } from "../service/upload.service"
import { removeStation, setColor, updateStation } from "../store/station.actions"
import { saveStation } from "../store/station.actions";
import { utilService } from "../service/util.service"
import defaultPhoto from '../assets/img/default-photo.png'


export function Station() {
  const [station, setStation] = useState(null)
  const color = useSelector(storeState => storeState.stationModule.color)
  const { stationId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!stationId) saveEmptyStation()
    else loadStation()
  }, [stationId])

  async function saveEmptyStation() {
    const newStation = await saveStation(stationService.getEmptyStation())
    const clr = await utilService.getMainColor(defaultPhoto)
    setColor(clr)
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
      const clr = await utilService.getMainColor(imgUrl)
      setColor(clr)
      return imgUrl
    } catch (err) {
      console.log('Cant set image', err)
    }
  }

  async function addSong(songs) {
    const stationToUpdate = await updateStation({ ...station, 'songs': songs })
    setStation(stationToUpdate)
    return stationToUpdate.songs
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
    const color = await utilService.getMainColor(station.imgUrl)
    setColor(color)
  }

  async function deleteStation(stationId) {
    await removeStation(stationId)
    navigate(-1)
  }

  if (!station) return <Loader />
  if (station) return (
    <main className="station-details">
      {/* <div className='clr-container' style={{ backgroundColor: `${color || '#121212'}` }}> */}
      <StationHeader station={station} deleteStation={deleteStation} saveChanges={saveChanges} onSelectImg={onSelectImg} onSaveStation={onSaveStation} />
      {/* </div> */}
      <SongList station={station} addSong={addSong} onDeleteSong={onDeleteSong} saveChanges={saveChanges} />
    </main>
  )

}