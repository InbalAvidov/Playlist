import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"
import React from 'react'



export function AppHeader() {
return (
    <main className="main-header">
        <div className="logo">
            <img src={logo} className='logo-img' style={{width: '10px'}}/>
            <h1>Playlist</h1>

            <nav>
            </nav>
        </div>
    </main>
)
}