import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"
export function AppHeader(){
    return (
        <main className="main-header">
            <div className="logo">
                <img src={logo} />
                <h1>Playlist</h1>
                <nav>
                    <NavLink></NavLink>
                </nav>
            </div>
        </main>
    )
}