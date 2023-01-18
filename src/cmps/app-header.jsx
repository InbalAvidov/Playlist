// import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"
import React from 'react'
// import axios from 'axios'



export function AppHeader() {
return (
    <main className="main-header">
        <div className="logo">
            <img src={logo} />
            <h1>Playlist</h1>

            <nav>
            </nav>
        </div>
    </main>
)
}