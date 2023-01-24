import { stationService } from "../service/station.service"
import { SET_STATIONS, UPDATE_CURRENT_STATION, ADD_STATION, UPDATE_STATION, REMOVE_STATION, LIKE_SONG, SET_COLOR } from "./station.reducer"
import { store } from "./store"

export async function loadStations(filterBy) {
    try {
        const stations = await stationService.query(filterBy)
        store.dispatch({ type: SET_STATIONS, stations })
    } catch (err) {
        console.log('Had issues loading stations', err)
        throw err
    }
}

export async function loadCurrStation(stationId) {
    try {
        const currStation = await stationService.get(stationId)
        store.dispatch({ type: UPDATE_CURRENT_STATION, currStation })
    } catch (err) {
        console.log('Had issues loading current station', err)
        throw err
    }
}

export async function saveStation(station) {
    try {
        const newStation = await stationService.save(station)
        store.dispatch({ type: ADD_STATION, station: newStation })
        return newStation
    } catch (err) {
        console.log('Had issues to get current station', err)
        throw err
    }
}

export async function updateStation(station) {
    try {
        const updatedStation = await stationService.save(station)
        store.dispatch({ type: UPDATE_STATION, station: updatedStation })
    } catch (err) {
        console.log('Had issues to get current station', err)
        throw err
    }
}

export async function removeStation(stationId) {
    try {
        await stationService.remove(stationId)
        store.dispatch({ type: REMOVE_STATION, stationId})
    } catch (err) {
        console.log('Had issues to get current station', err)
        throw err
    }
}

// export async function likeSong(songId, minimalUser) {
//     try {
//        const stations = await stationService.likeSong(songId, minimalUser)
//         store.dispatch({ type: SET_STATIONS, stations})
//     } catch (err) {
//         console.log('Had issues to toggle song like', err)
//         throw err
//     }
// }

export async function likeStation(stationId, minimalUser) {
    try {
       const station = await stationService.likeStation(stationId, minimalUser)
        store.dispatch({ type: UPDATE_STATION, station})
    } catch (err) {
        console.log('Had issues to toggle station like', err)
        throw err
    }
}

export async function setColor(color) {
    try {
        store.dispatch({ type: SET_COLOR, color})
    } catch (err) {
        console.log('Had issues to set color', err)
        throw err
    }
}
