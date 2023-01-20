import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
// import { AppHeader } from './cmps/app-header'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'
import { Loader } from './cmps/loader'
import { AppNav } from './cmps/app-nav'
import { Home } from './pages/home'
import { LikedSongs } from './pages/liked-songs'
import { StationDetails } from './pages/station-details.jsx'
import { SearchSongs } from './pages/search-page'
import { MediaPlayerBar } from './cmps/media-player-bar'
import { CreateStation } from './pages/create-station'
import { LoginSignup } from './pages/login-signup';
// import { UserMsg } from './cmps/user-msg'


export function App() {

    return (
        <Provider store={store}>
            <Router basename="/">
                <section className="main-layout app">
                    <AppNav />
                    <main className='main-app'>
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<StationDetails />} path="/station/:stationId" />
                            <Route element={<SearchSongs />} path="/search" />
                            <Route element={<CreateStation />} path="/create" />
                            <Route element={<LikedSongs />} path="/liked" />
                            <Route element={<LoginSignup/>} path="/login-signup"/>
                            {/* <Route element={<Playlist />} path="/playlist/:stationId" /> */}
                        </Routes>
                    </main>
                    <MediaPlayerBar />
                    {/* <Loader /> */}
                </section>
            </Router>

        </Provider>
    )
}
