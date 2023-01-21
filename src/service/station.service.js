import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { userService } from './user.service.js'
import { homeStations } from '../data/station'
const STATION_KEY = 'stationDB'

_createStations()

export const stationService = {
  query,
  get,
  remove,
  save,
  removeSong,
  getEmptyStation
}

async function query(filterBy = getEmptyFilter()) {
  try {
    let stations = await storageService.query(STATION_KEY)
    if (filterBy.userId) {
      console.log('filter with user')
      stations = stations.filter(station => {
        if (station.tags.includes('home')) return
        return station.createdBy._id === filterBy.userId
      })
    }
    if(filterBy.page === 'home'){
      stations = stations.filter(station => station.tags.includes('home'))
    }
    return stations
  } catch (err) {
    throw err
  }
}

function getEmptyFilter() {
  return { user: null }
}

function get(stationId) {
  return storageService.get(STATION_KEY, stationId)

}

function remove(stationId) {
  return storageService.remove(STATION_KEY, stationId)
}

function save(station) {
  if (station._id) {
    return storageService.put(STATION_KEY, station)
  } else {
    return storageService.post(STATION_KEY, station)
  }
}

async function removeSong(stationId, songId) {
  try {
    const station = await get(stationId)
    const songs = station.songs.filter(song => song.id !== songId)
    station.songs = songs
    save(station)
    return station
  } catch (err) {
    return err
  }
}

function getEmptyStation() {
  const user = userService.getLoggedinUser()
  return {
    "_id": "",
    "name": "",
    "tags": [],
    "createdBy": user ? user : {
      "_id": utilService.makeId(),
      "fullname": "Geust",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [],
    "msgs": []
  }
}

function _createStations() {
  let stations = utilService.loadFromStorage(STATION_KEY)
  if (!stations || !stations.length) {
    stations = homeStations
    utilService.saveToStorage(STATION_KEY, stations)
  }
}

