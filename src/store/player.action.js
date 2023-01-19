import { store } from './store.js'
import { SET_PLAYER } from '../store/player.reducer.js'

export async function loadplayer(player) {
    try {
        //TODO: send a requset to get the wanted video
        store.dispatch({ type: SET_PLAYER, player })
    } catch (err) {
        console.log('Cant load player', err)
    }
}
