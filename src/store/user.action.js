import { userService } from '../service/user.service.js'
import { store } from '../store/store.js'
import { SET_USER } from '../store/user.reducer.js'

export async function login(credentials) {
    console.log('login from user.action,credentials ', credentials)
    try {
        const user = await userService.login(credentials)
        console.log('user:', user)
        store.dispatch({ type: SET_USER, user })
        return user
    } catch (err) {
        console.error('Cannot login:', err)
        throw err
    }
}

export function signup(credentials) {
    return userService.signup(credentials)
        .then(user => {
            store.dispatch({ type: SET_USER, user: { ...user, username: credentials.username } })
            // console.log('user.action , dispatch SET_USER, user', user)
            return user
        })
        .catch(err => {
            console.error('Cannot signup:', err)
            throw err
        })
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

// export function checkout(amount) {
//     return userService.updateScore(amount)
//         .then(newScore => {
//             store.dispatch({ type: UPDATE_USER_SCORE, score: newScore })
//             // store.dispatch({ type: CLEAR_CART })
//             return newScore
//         })
//         .catch(err => {
//             console.error('Cannot checkout:', err)
//             throw err
//         })
// }
