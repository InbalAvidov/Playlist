export const SET_STATIONS = 'SET_STATIONS'
export const REMOVE_STATION = 'REMOVE_STATION'
export const ADD_STATION = 'ADD_STATION'
export const UPDATE_STATION = 'UPDATE_STATION'
export const UPDATE_CURRENT_STATION = 'UPDATE_CURRENT_STATION'
export const LIKE_SONG = 'LIKE_SONG'

const initialState = {
    stations: null,
    currStation: null
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
        case REMOVE_STATION:
            stations = state.stations.filter(station => station._id !== action.stationId)
            return { ...state, stations }
        case UPDATE_CURRENT_STATION:
            return { ...state, currStation: action.currStation }
        case LIKE_SONG:
            const { stationId, songId, minimalUser } = action
            stations = state.stations.map(station => {
                if (station._id !== stationId) return station

                station.songs = station.songs.map(song => {
                    if (song.id !== songId) return song

                    song.likedByUsers ||= []
                    const likesIdx = song.likedByUsers.findIndex(user => user._id === minimalUser._id)
                    if (likesIdx > -1) {
                        song.likedByUsers.splice(likesIdx, 1)
                    } else {
                        song.likedByUsers.push(minimalUser)
                    }
                    return { ...song }
                })
                return { ...station }
            })

            return { ...state, stations }
        default:
            return state
    }
} 
