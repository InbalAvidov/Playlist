import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { AppNav } from './cmps/app-nav'
import { Home } from './pages/home'
import { LikedSongs } from './pages/liked-songs'
import { Station } from './pages/station.jsx'
import { SearchSongs } from './pages/search-songs'
import { UserLibrary } from './pages/user-library'
import { PlayerBar } from './cmps/player-bar'
import { AppHeader } from './cmps/app-header'
import { LoginSignup } from './pages/login-signup';
import { Queue } from './pages/queue'
import { Genre } from './pages/genre'
import { ShowAll } from './pages/show-all'
import { UserMsg } from './cmps/user-msg'


export function App() {
    const [opacity, setOpacity] = useState(0)

    function onScroll({ target }) {
        const opacity = (target.scrollTop - 80) / 100
        setOpacity(opacity)
    }

    return (
        <Provider store={store}>
            <Router basename="/">
                <section className="main-layout app">
                    <AppNav />
                    <AppHeader opacity={opacity} />
                    <main className='main-app' onScroll={onScroll}>
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Station />} path="/station/:stationId" />
                            <Route element={<SearchSongs scroll={opacity * 100 + 80} />} path="/search" />
                            <Route element={<UserLibrary />} path="/library" />
                            <Route element={<Station />} path="/createStation" />
                            <Route element={<LikedSongs />} path="/liked" />
                            <Route element={<LoginSignup />} path="/login-signup/:signupState" />
                            <Route element={<LoginSignup />} path="/login-signup/:loginState" />
                            <Route element={<Queue />} path="/queue" />
                            <Route element={<Genre />} path="/genre/:genreName" />
                            <Route element={<ShowAll />} path="/show/:category" />
                        </Routes>
                    <UserMsg />
                    </main>
                    <PlayerBar />
                </section>
            </Router>
        </Provider>
    )
}
