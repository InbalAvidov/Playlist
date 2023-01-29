import { httpService } from './http.service.js'
import { userService } from './user.service.js'

const STATION_URL = 'station/'

let stationNum = 1

export const stationService = {
  query,
  get,
  remove,
  save,
  removeSong,
  getEmptyStation
}

async function query(filterBy = getEmptyFilter()) {
  console.log('filterBy:',filterBy)
  httpService.get(STATION_URL, filterBy)
  console.log('todo bien')
  return httpService.get(STATION_URL, filterBy)
  
}

function getEmptyFilter() {
  return { userId: null, page: null }
}

async function get(stationId) {
  return httpService.get(STATION_URL + stationId)
}

async function remove(stationId) {
  return httpService.delete(STATION_URL + stationId)
}

async function save(station) {
  if (station._id) {
    console.log(' front-station.service save. station.shareWith', station.shareWith)
    return httpService.put(STATION_URL + station._id, station)
  } else {
    return httpService.post(STATION_URL, station)
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
  if (!user) console.warn('station.service getEmptyStation - No User !!! should we be here ?')
  return {
    "_id": "",
    "name": _getStationDefaultName(),
    "tags": [],
    "createdBy": user ? user : {
      _id: '5cksxjas89xjsa8xjsa8GGG7',
      username: 'guest',
      fullname: 'Guest'
    },
    "likedByUsers": [],
    "songs": [],
    "msgs": [],
  }
}
function _getStationDefaultName() {
  const stationName = `My Playlist #${stationNum}`
  stationNum++
  return stationName
}
