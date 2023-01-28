import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const USERS_KEY = 'users'
_createUsers()

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    getEmptyCredentials,
    updateLikeSong,
    updateLikeStation
}

window.userService = userService


function getUsers() {
    return storageService.query(USERS_KEY)
}

async function getById(userId) {
    const user = await storageService.get(USERS_KEY, userId)
    return user
}

function remove(userId) {
    return storageService.remove(USERS_KEY, userId)
}

async function update(user) {
    const newUser = await storageService.put(USERS_KEY, user)
    if (getLoggedinUser()._id === user._id) saveLocalUser(newUser)
    return newUser
}

async function login(userCred) {
    const users = await storageService.query(USERS_KEY)
    const user = users.find(user => user.username === userCred.username)
    if (user) {
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    userCred.likedSongs = []
    userCred.likedStations = []
    const user = await storageService.post(USERS_KEY, userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}


function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, username: user.username, imgUrl: user.imgUrl, likedSongs: user.likedSongs, likedStations: user.likedStations }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function getEmptyCredentials() {
    return {
        fullname: '',
        email: '',
        username: '',
        password: '',
    }
}

async function updateLikeSong(song) {
    const user = getLoggedinUser()
    const isAdd = !user.likedSongs.find(({ id }) => id === song.id)
    if (isAdd) user.likedSongs.push(song)
    else user.likedSongs = user.likedSongs.filter(({ id }) => id !== song.id)
    const updatedUser = await update(user)
    return updatedUser
}
async function updateLikeStation(currStation) {
    const user = getLoggedinUser()
    const { _id, name, imgUrl, songs, description } = currStation
    const station = {
        _id,
        name,
        imgUrl,
        songs,
        description
    }
    const isAdd = !user.likedStations.find(({ _id }) => _id === station._id)
    if (isAdd) user.likedStations.push(station)
    else user.likedStations = user.likedStations.filter(({ _id }) => _id !== station._id)
    const updatedUser = await update(user)
    return updatedUser
}

function _createUsers() {
    let users = utilService.loadFromStorage(USERS_KEY)
    if (!users || !users.length) {
        users = [
            {
                _id: '5cksxjas89xjsa8xjsa8jld3',
                fullname: 'Inbal Avidov',
                email: 'inbal.avidov@gmail.com',
                username: 'inbal.avidov',
                password: 'inbal',
                likedSongs: [],
                likedStations: []
            }, {
                _id: '5cksxjas89xjsa8xjsa8jjj7',
                fullname: 'Omri Hazan',
                email: 'omrihazan1313@gmail.com',
                username: 'omri.hazan',
                password: 'omri',
                likedSongs: [],
                likedStations: []
            },
            {
                _id: '5cksxjas89xjsa8xjsa8hhh7',
                fullname: 'Hila Shor',
                email: 'hilashor@gmail.com',
                username: 'hila.shor',
                password: 'hila',
                likedSongs: [],
                likedStations: []
            },
            {
                _id: '5cksxjas89xjsa8xjsa8GGG7',
                fullname: 'Guest',
                email: 'guest@gmail.com',
                username: 'guest',
                password: 'guest',
                likedSongs: [],
                likedStations: []
            }
        ]
        utilService.saveToStorage(USERS_KEY, users)
    }
}



