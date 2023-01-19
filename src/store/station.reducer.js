import { stationService } from '../service/station.service'

export const SET_STATIONS = 'SET_STATIONS'
export const REMOVE_STATION = 'REMOVE_STATION'
export const UNDO_REMOVE_STATION = 'UNDO_REMOVE_STATION'
export const ADD_STATION = 'ADD_STATION'
export const UPDATE_STATION = 'UPDATE_STATION'
export const SET_CURR_STATION = 'SET_CURR_STATION'
export const REMOVE_SONG = 'REMOVE_SONG'

const initialState = {
    stations: [],
    currStation: {}
}

export function stationReducer(state = initialState, action) {
    let stations

    switch (action.type) {
        case SET_STATIONS:
            return { ...state, stations: action.stations }
        case REMOVE_STATION:
            stations = state.stations.filter(t => t._id !== action.stationId)
            return { ...state, stations }

        case UNDO_REMOVE_STATION:
            stations = [...state.stations]
            return { ...state, stations }

        case ADD_STATION:
            stations = [...state.stations, action.station]
            return { ...state, stations }
        case UPDATE_STATION:
            stations = state.stations.map(station => station._id === action.station._id ? action.station : station)
            return { ...state, stations }

        case SET_CURR_STATION:
            return { ...state, currStation: action.currStation }

        case REMOVE_SONG:
            const { songId } = action
            const { currStation } = state
            currStation.songs = currStation.songs.filter(song => song.id !== songId)
            return { ...state, currStation: { ...currStation } }

        default:
            return state
    }
} 
