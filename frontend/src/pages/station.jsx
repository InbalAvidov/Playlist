import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

import { Loader } from '../cmps/loader'
import { SongList } from '../cmps/song-list'
import { StationHeader } from '../cmps/station-header'

import { stationService } from '../service/station.service'
import { uploadService } from '../service/upload.service'
import { removeStation, setColor, updateStation } from '../store/station.actions'
import { saveStation } from '../store/station.actions'
import { utilService } from '../service/util.service'

import defaultPhoto from '../assets/img/default-photo.png'
import { socketService } from '../service/socket.service'


export function Station() {
  const [station, setStation] = useState(null)
  const { stationId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!stationId) saveEmptyStation()
    else loadStation()
  }, [stationId])

  useEffect(() => {
    socketService.on('station-updated', updateBySocket)
    return () => {
      socketService.off('station-updated', updateBySocket)
    }
  }, [])

  
  function updateBySocket(stationFromSocket) {
    setStation(stationFromSocket)
  }

  async function saveEmptyStation() {
    try {
      const newStation = await saveStation(stationService.getEmptyStation())
      setStation(newStation)
      const clr = await utilService.getMainColor(defaultPhoto)
      setColor(clr)
    } catch (err) {
      console.log('err:', err)
    }
  }

  async function loadStation() {
    try {
      const currStation = await stationService.get(stationId)
      socketService.emit('share-station', currStation._id)
      setStation(currStation)
      const clr = await utilService.getMainColor(currStation.imgUrl)
      setColor(clr)
    } catch (err) {
      console.log('err:', err)
    }
  }

  async function onSelectImg(ev) {
    try {
      const imgUrl = await uploadService.uploadImg(ev)
      station.imgUrl = imgUrl
      const clr = await utilService.getMainColor(imgUrl)
      setColor(clr)
      return imgUrl
    } catch (err) {
      console.log('Cant set image', err)
    }
  }

  async function addSong(songs) {
    try {
      // const stationToUpdate = await updateStation({ ...station, 'songs': songs })
      // setStation(stationToUpdate)
      station.songs = songs
      await saveChanges()
      return station.songs
    } catch (err) {
      console.log('err:', err)
    }
  }

  async function onDeleteSong(songId) {
    if (station.songs.length > 1) {
      try {
        const updatedStation = await stationService.removeSong(station._id, songId)
        setStation(updatedStation)
      } catch (err) {
        console.log('err:', err)
      }
    }
  }

  function onSaveStation() {
    saveStation(station)
  }

  async function saveChanges() {
    try {
      console.log('station-update', station)
      const updatedStation = await updateStation(station)
      socketService.emit('station-update', station)
      console.log('station-update', station)
      const color = await utilService.getMainColor(station.imgUrl)
      setColor(color)
      return updatedStation
    } catch (err) {
      console.log('err:', err)
    }
  }

  async function deleteStation(stationId) {
    try {
      await removeStation(stationId)
      navigate(-1)
    } catch (err) {
      console.log('err:', err)
    }
  }

  if (!station) return <Loader />
  if (station) return (
    <main className='station-details'>
      <StationHeader station={station} deleteStation={deleteStation} saveChanges={saveChanges} onSelectImg={onSelectImg} onSaveStation={onSaveStation} />
      <SongList station={station} addSong={addSong} onDeleteSong={onDeleteSong} saveChanges={saveChanges} />
    </main>
  )

}