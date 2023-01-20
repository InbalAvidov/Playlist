import { store } from './store.js'
import { TOGGLE_PLAY, SET_PLAYER, SET_SONG } from '../store/player.reducer.js'

export async function loadPlayer(player) {
    try {
        console.log('player from actions:', player);
        store.dispatch({ type: SET_PLAYER, player })
    } catch (err) {
        console.log('Cant load player', err)
    }
}

export async function setSong(song) {
    console.log('song in action', song)
    try {
        store.dispatch({ type: SET_SONG, song })
    } catch (err) {
        console.log('Cant set song id', err)
    }
}

export async function togglePlay(isPlaying) {
    console.log('isPlaying in action', isPlaying)
    try {
        store.dispatch({ type: TOGGLE_PLAY, isPlaying })
    } catch (err) {
        console.log('Cant set is playing', err)
    }
}
