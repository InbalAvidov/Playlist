import {stationService} from "../service/station.service"
import { SET_STATIONS } from "./station.reducer"
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

// export async function removeToy(toyId) {
//     try {
//         const toy = await toyService.remove(toyId)
//         store.dispatch({ type: REMOVE_TOY, toyId })

//     } catch (err) {
//         console.log('Had issues removing toy', err)
//         throw err
//     }
// }

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