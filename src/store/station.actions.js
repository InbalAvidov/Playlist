import { stationService } from "../service/station.service"
import { SET_STATIONS, SET_CURR_STATION, REMOVE_SONG } from "./station.reducer"
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

export async function loadStationById(stationId) {
    try {
        const currStation = await stationService.get(stationId)
        console.log('currStation:', currStation)
        store.dispatch({ type: SET_CURR_STATION, currStation })
        return currStation
    } catch (err) {
        console.log('Had issues to get current station', err)
        throw err
    }
}
export async function removeSong(stationId, songId) {
    try {
        await stationService.removeSong(stationId, songId)
        store.dispatch({ type: REMOVE_SONG, songId })
    } catch (err) {
        console.log('Had issues removing song', err)
        throw err
    }
}

// export async function saveToy(toy) {
//     const type = (toy._id) ? UPDATE_TOY : ADD_TOY
//     try {
//         const savedToy = await toyService.save(toy)
//         store.dispatch({ type, toy: savedToy })

//     } catch (err) {
//         console.log('Had issues save toy', err)
//         throw err
//     }
// }

// export function setFilter(filter) {
//     store.dispatch({ type: FILTER_TODOS, filter })
// }