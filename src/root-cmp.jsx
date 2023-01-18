import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
// import { AppHeader } from './cmps/app-header'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'
import { Loader } from './cmps/loader'
import { AppHeader } from './cmps/app-header'
import Player from './cmps/mp3-player'
import { Example } from './cmps/youtube-react'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'

export function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppHeader />
                <section className="main-layout app">
                    <Example forceVideo={true}/>
                    {/* <Loader /> */}
                </section>
            </Router>
        </Provider>
    )
}
