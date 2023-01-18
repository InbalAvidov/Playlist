import { store } from '../store/store.js'
import { SET_TRACK } from '../store/track.reducer.js'

export async function loadTrack(track) {
    try {
        //TODO: send a requset to get the wanted video
        store.dispatch({ type: SET_TRACK, track })
    } catch (err) {
        console.log('Cant load track', err)
    }
}
