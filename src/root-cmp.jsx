import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
// import { AppHeader } from './cmps/app-header'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'
import { Loader } from './cmps/loader'
import { AppHeader } from './cmps/app-header'
import { Example } from './cmps/youtube-react'
import { Search } from './cmps/search'
import { MediaPlayer } from './cmps/media-player'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'



export function App() {
    const track = {
        _id: 'RgKAFK5djSk',
        title: 'See You Again'
    }
    return (
        <Provider store={store}>
            <Router>
                <AppHeader />
                <section className="main-layout app">
                    <Search searchedTrack={track} />
                    {/* <Loader /> */}
                    <MediaPlayer />
                </section>
            </Router>
        </Provider>
    )
}