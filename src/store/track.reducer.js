export const SET_TRACK = 'SET_TRACK'

const initialState = {
    track: {}
}

export function trackReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TRACK:
            return { track: action.track }
        default:
            return { state }
    }
}