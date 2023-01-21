import { stationService } from "../service/station.service"
import { SET_STATIONS, ADD_STATION, UPDATE_STATION, REMOVE_STATION } from "./station.reducer"
import { store } from "./store"

export async function loadStations() {
    try {
        const stations = await stationService.query()
        store.dispatch({ type: SET_STATIONS, stations })
    } catch (err) {
        console.log('Had issues loading stations', err)
        throw err
    }
}

export async function saveStation(station) {
    try {
        const newStation = await stationService.save(station)
        store.dispatch({ type: ADD_STATION, station: newStation })
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

export async function removeStation(stationId){
    try {
        await stationService.remove(stationId)
        store.dispatch({ type: REMOVE_STATION, stationId, })
    } catch (err) {
        console.log('Had issues to get current station', err)
        throw err
    }  
}
