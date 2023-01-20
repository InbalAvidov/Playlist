
export const SET_STATIONS = 'SET_STATIONS'
export const REMOVE_STATION = 'REMOVE_STATION'
export const ADD_STATION = 'ADD_STATION'
export const UPDATE_STATION = 'UPDATE_STATION'

const initialState = {
    stations: null,
    // currStation: stationService.getEmptyStation()
}

export function stationReducer(state = initialState, action) {
    let stations
    console.log('STATE', state)
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

        default:
            return state
    }
} 
