export const SET_STATIONS = 'SET_STATIONS'
export const REMOVE_STATION = 'REMOVE_STATION'
export const ADD_STATION = 'ADD_STATION'
export const UPDATE_STATION = 'UPDATE_STATION'
export const UPDATE_CURRENT_STATION = 'UPDATE_CURRENT_STATION'
export const LIKE_SONG = 'LIKE_SONG'
export const SET_COLOR = 'SET_COLOR'

const initialState = {
    stations: null,
    currStation: null,
    color: 'rgb(83, 83, 83)'
}

export function stationReducer(state = initialState, action) {
    let stations
    switch (action.type) {
        case SET_STATIONS:
            return { ...state, stations: action.stations }
        case REMOVE_STATION:
            stations = state.stations.filter(s => s._id !== action.stationId)
            return { ...state, stations }
        case ADD_STATION:
            stations = [...state.stations, action.station]
            return { ...state, stations }
        case UPDATE_STATION:
            stations = state.stations.map(station => station._id === action.station._id ? action.station : station)
            return { ...state, stations }
        case UPDATE_CURRENT_STATION:
            return { ...state, currStation: action.currStation }
        case SET_COLOR:
            return { ...state, color: action.color }
        default:
            return state
    }
} 
