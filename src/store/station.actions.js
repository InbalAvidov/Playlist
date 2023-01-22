import { stationService } from "../service/station.service"
import { SET_STATIONS, UPDATE_CURRENT_STATION, ADD_STATION, UPDATE_STATION, REMOVE_STATION, LIKE_SONG } from "./station.reducer"
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
    console.log('ACTION LOADCURRSTATION CALLED')
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
        store.dispatch({ type: REMOVE_STATION, stationId, })
    } catch (err) {
        console.log('Had issues to get current station', err)
        throw err
    }
}

export async function likeSong(stationId, songId, minimalUser) {
    try {
        await stationService.likeSong(stationId, songId, minimalUser)
        store.dispatch({ type: LIKE_SONG, stationId, songId, minimalUser })
    } catch (err) {
        console.log('Had issues to toggle song like', err)
        throw err
    }
}
