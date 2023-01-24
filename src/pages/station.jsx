import { useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from "react"

import { Loader } from "../cmps/loader"
import { SongList } from "../cmps/station-song-list"
import { StationHeader } from "../cmps/station-header"
import { stationService } from "../service/station.service"
import { uploadService } from "../service/upload.service"
import { removeStation, updateStation } from "../store/station.actions"
import { saveStation } from "../store/station.actions";
import { utilService } from "../service/util.service"


export function Station() {
  const [station, setStation] = useState(null)
  const [colorByImg, setColorByImg] = useState(null)
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
    setStation(newStation)
  }

  async function loadStation() {
    try {
      const currStation = await stationService.get(stationId)
      const color = await utilService.getMainColor(currStation.imgUrl)
      setColorByImg(color)
      setStation(currStation)
      console.log('cloooooorrrrrr', color)
    } catch (err) {
      console.log('Cant load station', err)
    }
  }

  async function onSelectImg(ev) {
    try {
      const imgUrl = await uploadService.uploadImg(ev)
      console.log('onSelectImg(ev), imgurl', imgUrl)
      station.imgUrl = imgUrl
      const color = await utilService.getMainColor(imgUrl)
      setColorByImg(color)
      console.log('cloooooorrrrrr', color)
      return imgUrl
    } catch (err) {
      console.log('Cant set image', err)
    }
  }

  function handleChange(field, val) {
    setStation(prevStation => ({ ...prevStation, [field]: val }))
  }

  async function onDeleteSong(songId) {
    try {
      if (station.songs.length > 1) {
        const updatedStation = await stationService.removeSong(station._id, songId)
        setStation(updatedStation)
      }
    } catch (err) {
      console.log('Cannot delet song', err)
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