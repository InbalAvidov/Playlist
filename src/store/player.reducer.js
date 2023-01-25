
export const SET_PLAYER = 'SET_PLAYER'
export const SET_SONG = 'SET_SONG'
export const TOGGLE_PLAY = 'TOGGLE_PLAY'

const initialState = {
    player: null,
    song: null,
    isPlaying: false
}

export function playerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYER:
            return { ...state, player: action.player }
        case SET_SONG:
            return { ...state, song: action.song, isPlaying: true }
        case TOGGLE_PLAY:
            state.isPlaying ? state.player.pauseVideo() : state.player.playVideo()
            return { ...state, isPlaying: action.isPlaying }
        default:
            return state
    }
}