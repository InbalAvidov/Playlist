import { store } from './store.js'
import { TOGGLE_PLAY, SET_PLAYER, SET_SONG, SET_SONGS, SET_QUEUE } from '../store/player.reducer.js'

export async function loadPlayer(player) {
    console.log('LOADING PLAYER')
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
export async function setQueue(bool) {
    try {
        store.dispatch({ type: SET_QUEUE, queue: bool })
    } catch (err) {
        console.log('Cant set song id', err)
    }
}

export async function setSongs(songs) {
    try {
        store.dispatch({ type: SET_SONGS, songs })
        return songs
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
