import { togglePlay } from "./player.action"

export const SET_PLAYER = 'SET_PLAYER'
export const SET_SONG = 'SET_SONG'
export const TOGGLE_PLAY = 'TOGGLE_PLAY'

const initialState = {
    player: {},
    song: null,
    isPlaying: false
}

export function playerReducer(state = initialState, action) {
    console.log('STATE', state)
    switch (action.type) {
        case SET_PLAYER:
            return { ...state, player: action.player }
        case SET_SONG:
            console.log('song was set')
            return { ...state, song: action.song, isPlaying: true }
        case TOGGLE_PLAY:
            // console.log('tring to set play/pause', action.isPlaying)
            state.isPlaying ? state.player.pauseVideo() : state.player.playVideo()
            return { ...state, isPlaying: action.isPlaying }
        default:
            return { state }
    }
}