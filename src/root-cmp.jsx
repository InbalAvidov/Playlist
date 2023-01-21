import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { AppNav } from './cmps/app-nav'
import { Home } from './pages/home'
import { LikedSongs } from './pages/liked-songs'
import { Station } from './pages/station.jsx'
import { SearchSongs } from './pages/search-page'
import { PlayerBar } from './cmps/media-player-bar'
import { CreateStation } from './pages/create-station'
import { AppHeader } from './cmps/app-header'
// import { CreateStation } from './pages/create-station'
import { LoginSignup } from './pages/login-signup';
// import { UserMsg } from './cmps/user-msg'


export function App() {

    return (
        <Provider store={store}>
            <Router basename="/">
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
                            {/* <Route element={<LoginSignup/>} path="/login-signup" /> */}
                            <Route element={<LoginSignup/>} path="/login-signup/:signupState" />
                            <Route element={<LoginSignup/>} path="/login-signup/:loginState" />
                            {/* <Route element={<Playlist />} path="/playlist/:stationId" /> */}
                        </Routes>
                    </main>
                    <PlayerBar />
                    {/* <Loader /> */}
                </section>
            </Router>
            
        </Provider>
    )
}
