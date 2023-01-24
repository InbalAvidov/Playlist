import { store } from './store.js'
import { TOGGLE_PLAY, SET_PLAYER, SET_SONG } from '../store/player.reducer.js'

export async function loadPlayer(player) {
    try {
        store.dispatch({ type: SET_PLAYER, player })
    } catch (err) {
        console.log('Cant load player', err)
    }
}

export async function setSong(song) {
    try {
        store.dispatch({ type: SET_SONG, song })
    } catch (err) {
        console.log('Cant set song id', err)
    }
}

export async function togglePlay(isPlaying) {
    try {
        store.dispatch({ type: TOGGLE_PLAY, isPlaying })
    } catch (err) {
        console.log('Cant set is playing', err)
    }
}
