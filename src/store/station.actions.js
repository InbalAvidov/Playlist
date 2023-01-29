import { stationService } from "../service/station.service"
import { SET_STATIONS, UPDATE_CURRENT_STATION, ADD_STATION, UPDATE_STATION, REMOVE_STATION, SET_COLOR } from "./station.reducer"
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
        console.log('saveStation', station)
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
        // console.log('updateStation, station', station)
        const updatedStation = await stationService.save(station)
        store.dispatch({ type: UPDATE_STATION, station: updatedStation })
        return updatedStation
    } catch (err) {
        console.log('Had issues to get current station', err)
        throw err
    }
}

export async function removeStation(stationId) {
    try {
        await stationService.remove(stationId)
        store.dispatch({ type: REMOVE_STATION, stationId })
    } catch (err) {
        console.log('Had issues to get current station', err)
        throw err
    }
}


export async function setColor(color) {
    try {
        store.dispatch({ type: SET_COLOR, color })
    } catch (err) {
        console.log('Had issues to set color', err)
        throw err
    }
}

