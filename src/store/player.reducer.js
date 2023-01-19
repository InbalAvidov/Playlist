export const SET_PLAYER = 'SET_PLAYER'

const initialState = {
    player: {}
}

export function playerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PLAYER:
            return { player: action.player }
        default:
            return { state }
    }
}