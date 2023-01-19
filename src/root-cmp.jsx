import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
// import { AppHeader } from './cmps/app-header'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'
import { Loader } from './cmps/loader'
import { AppHeader } from './cmps/app-header'
import { Home } from './pages/home'
import { LikedSongs } from './pages/liked-songs'
import { StationDetails } from './pages/station-details.jsx'
import { SearchSongs } from './pages/search-page'
import { MediaPlayerBar } from './cmps/media-player-bar'
import { CreateStation } from './pages/create-station'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'

import cover from './assets/img/see you again.png'

export function App() {
    const player = {
        _id: 'RgKAFK5djSk',
        title: 'See You Again',
        cover,
        artist: 'Wiz Khalifa'
    }
    return (
        <Provider store={store}>
            <Router>
                <section className="main-layout app">
                    <AppHeader />
                    <main className='main-app'>
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<StationDetails />} path="/station/:stationId" />
                            <Route element={<SearchSongs />} path="/search" />
                            <Route element={<CreateStation />} path="/create" />
                            <Route element={<LikedSongs />} path="/liked" />
                            {/* <Route element={<Playlist />} path="/playlist/:stationId" /> */}
                        </Routes>
                    </main>
                    <MediaPlayerBar selctedPlayer={player} />
                    {/* <Loader /> */}
                </section>
            </Router>
        </Provider>
    )
}
