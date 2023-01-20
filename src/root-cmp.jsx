import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { AppNav } from './cmps/app-nav'
import { Home } from './pages/home'
import { LikedSongs } from './pages/liked-songs'
import { Station } from './pages/station.jsx'
import { SearchSongs } from './pages/search-page'
import { MediaPlayerBar } from './cmps/media-player-bar'
import { CreateStation } from './pages/create-station'
import { AppHeader } from './cmps/app-header'
// import { CreateStation } from './pages/create-station'
// import { UserMsg } from './cmps/user-msg'


export function App() {

    return (
        <Provider store={store}>
            <Router>
                <section className="main-layout app">
                    <AppNav />
                    <AppHeader />
                    <main className='main-app'>
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Station />} path="/station/:stationId" />
                            <Route element={<SearchSongs />} path="/search" />
                            <Route element={<CreateStation />} path="/createStation" />
                            <Route element={<LikedSongs />} path="/liked" />
                        </Routes>
                    </main>
                    <MediaPlayerBar />
                    {/* <Loader /> */}
                </section>
            </Router>
        </Provider>
    )
}
