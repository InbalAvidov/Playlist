import { createStore, combineReducers } from 'redux'
import { userReducer } from './user.reducer'
import { stationReducer } from './station.reducer'
import { playerReducer } from './player.reducer'

const rootReducer = combineReducers({
    userModule: userReducer,
    stationModule: stationReducer,
    playerModule: playerReducer
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)


store.subscribe(() => {
    // console.log('storeState:\n', store.getState())
})



