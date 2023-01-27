import { userService } from '../service/user.service.js'
import { store } from '../store/store.js'
import { SET_USER, SET_USERS } from '../store/user.reducer.js'

export async function login(credentials) {
    try {
        const user = await userService.login(credentials)
        store.dispatch({ type: SET_USER, user })
        return user
    } catch (err) {
        console.error('Cannot login:', err)
        throw err
    }
}

export async function signup(credentials) {
    try {
        const user = await userService.signup(credentials)
        store.dispatch({ type: SET_USER, user: { ...user, username: credentials.username } })
        return user
    } catch (err) {
        console.error('Cannot signup:', err)
        throw err
    }
}


export async function logout() {
    try{
        await userService.logout()
        store.dispatch({ type: SET_USER, user: null })
    }catch(err){
        console.error('Cannot logout:', err)
        throw err
    }
}

export async function loadUsers() {
    try{
        const users = await userService.getUsers()
        store.dispatch({ type: SET_USERS, users })
    }catch(err){
        console.error('Cannot set users:', err)
        throw err
    }
}

export async function updateLikeSong(song) {
    try{
        const updatedUser = await userService.updateLikeSong(song)
        store.dispatch({ type: SET_USER, user: updatedUser })
    }catch(err){
        console.error('Cannot logout:', err)
        throw err
    }
}

export async function updateLikeStation(station) {
    try{
        const updatedUser = await userService.updateLikeStation(station)
        store.dispatch({ type: SET_USER, user: updatedUser })
    }catch(err){
        console.error('Cannot logout:', err)
        throw err
    }
}

