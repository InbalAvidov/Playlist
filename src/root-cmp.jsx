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
// import { UserMsg } from './cmps/user-msg'
// import { AppNav } from './cmps/app-nav'

export function App() {
    return (
        <Provider store={store}>
            <Router>
                <section className="main-layout app">
                    <AppHeader />
                    <main>
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<StationDetails />} path="/station/:id" />
                        </Routes>
                    </main>
                    {/* <Loader /> */}
                </section>
            </Router>
        </Provider>
    )
}
