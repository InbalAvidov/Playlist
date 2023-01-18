import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
// import { AppHeader } from './cmps/app-header'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'
import { Loader } from './cmps/loader'
import { AppHeader } from './cmps/app-header'
import { Home } from './pages/home'
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
                <section className="main-layout app">
                    <AppHeader />
                    <Search searchedTrack={track} />
                    <main className='main-app'>
                        <Routes>
                            <Route element={<Home />} path="/" />
                        </Routes>
                    </main>
                    {/* <Loader /> */}
                    <MediaPlayer />
                </section>
            </Router>
        </Provider>
    )
}
