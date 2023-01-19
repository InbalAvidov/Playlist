import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store/store'
// import { AppHeader } from './cmps/app-header'
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'
import { Loader } from './cmps/loader'
import { AppHeader } from './cmps/app-header'
import { Home } from './pages/home'
import { StationDetails } from './pages/station-details.jsx'
import { SearchSongs } from './pages/search-page'
import { DemeSearch } from './cmps/deme-search'
import { CreateStation } from './pages/create-station'
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
                    {/* <DemeSearch searchedTrack={track} /> */}
                    <main className='main-app'>
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<StationDetails />} path="/station/:stationId" />
                            <Route element={<SearchSongs />} path="/search" />
                            <Route element={<CreateStation />} path="/create" />
                            {/* <Route element={<Playlist />} path="/playlist/:stationId" /> */}
                        </Routes>
                    </main>
                    {/* <Loader /> */}
                </section>
            </Router>
        </Provider>
    )
}
