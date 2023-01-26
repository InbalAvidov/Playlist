
export const SET_PLAYER = 'SET_PLAYER'
export const SET_SONG = 'SET_SONG'
export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const SET_SONGS = 'SET_SONGS'
export const SET_QUEUE = 'SET_QUEUE'

const initialState = {
    player: null,
    song: null,
    isPlaying: false,
    songs : null,
    queue : false
}

export function playerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYER:
            return { ...state, player: action.player }
        case SET_SONG:
            return { ...state, song: action.song, isPlaying: true }
        case SET_SONGS:
            return { ...state, songs: action.songs}
        case SET_QUEUE:
            return { ...state, queue: action.queue}
        case TOGGLE_PLAY:
            state.isPlaying ? state.player.pauseVideo() : state.player.playVideo()
            return { ...state, isPlaying: action.isPlaying }
        default:
            return state
    }
}