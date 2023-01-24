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
  getEmptyStation,
  likeStation
}

async function query(filterBy = getEmptyFilter()) {
  console.log('filterBy:', filterBy)
  try {
    let stations = await storageService.query(STATION_KEY)
    if (filterBy.userId) {
      let userStations = []
      stations.forEach(station => {
        if (station.createdBy._id === filterBy.userId && station.name !== 'Liked Songs') userStations.push(station)
        station.likedByUsers.forEach(user => {
          if (user._id === filterBy.userId) userStations.push(station)
        })
      })
      stations = userStations
    }
    if (filterBy.page === 'home') {
      stations = stations.filter(station => station.tags.includes('home'))
    }
    return stations
  } catch (err) {
    throw err
  }
}

function getEmptyFilter() {
  return { user: null, likedBy: userService.getLoggedinUser()?._id }
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

// async function likeSong(songId, minimalUser) {
//   try {
//     const stations = await query()
//     stations.forEach(station => {
//       const newStation = {...station}
//       station.songs.forEach(song => {
//         console.log('song.id !== songId:', song.id !== songId)
//         if (song.id !== songId) return
//         if (!song.likedByUsers) newStation.song.likedByUsers = [{ minimalUser }]
//         else {
//           const userIdx = song.likedByUsers.findIndex(user => user._id === minimalUser._id)
//           if (userIdx === -1) newStation.song.likedByUsers.push(minimalUser)
//           else newStation.song.likedByUsers.splice(userIdx, 1)
//         }
//       })
//       // const newStation = 
//       save(newStation)
//       // console.log('newStation:',newStation)
//     })
//     // const song = station.songs.find(song => song.id === songId)
//     // song.likedByUsers ||= []
//     // const likesIdx = song.likedByUsers.findIndex(user => user._id === minimalUser._id)
//     // if (likesIdx > -1) {
//     //   song.likedByUsers.splice(likesIdx, 1)
//     //   if (station.name === 'Liked Songs') {
//     //     const songIdx = station.songs.findIndex(song => song.id === songId)
//     //     station.songs.splice(songIdx , 1)
//     //   }
//     // } else {
//     //   song.likedByUsers.push(minimalUser)
//     // }
//     // const UpdatedStations = await query()
//     return '?'
//   } catch (err) {
//     return err
//   }
// }

async function likeStation(stationId, minimalUser) {
  try {
    const station = await get(stationId)
    const userIdx = station.likedByUsers.findIndex(user => user._id === minimalUser._id)
    if (userIdx > -1) {
      station.likedByUsers.splice(userIdx, 1)
    } else {
      station.likedByUsers.push(minimalUser)
    }
    await save(station)
    return station
  } catch (err) {
    throw err
  }

}

function getEmptyStation() {
  const user = userService.getLoggedinUser()
  return {
    "_id": "",
    "name": "My Playlist",
    "tags": [],
    "createdBy": user ? user : {
      _id: '5cksxjas89xjsa8xjsa8GGG7',
      username: 'guest',
      imgUrl: "https://robohash.org/set=set3",
      fullname: 'Guest'
    },
    "likedByUsers": [],
    "songs": [],
    "msgs": [],
  }
}

function _createStations() {
  let stations = utilService.loadFromStorage(STATION_KEY)
  if (!stations || !stations.length) {
    stations = homeStations
    utilService.saveToStorage(STATION_KEY, stations)
  }
}

