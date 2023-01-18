import { NavLink } from "react-router-dom"
import logo from "../assets/img/logo.png"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch ,faHome , faLinesLeaning , faPlus , faHeart } from '@fortawesome/free-solid-svg-icons'

export function AppHeader() {
    return (
        <main className="main-header">
            <div className="logo">
                <img className="logo-img" src={logo} />
                <h1>Playlist</h1>
            </div>
            <nav>
                <NavLink to="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon><span>Home</span></NavLink>
                <NavLink to="/search"><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon><span>Search</span></NavLink>
                <NavLink to="/library"><FontAwesomeIcon icon={faLinesLeaning}></FontAwesomeIcon><span>Your Library</span></NavLink>
                <NavLink to="/create playlist"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><span>Create Playlist</span></NavLink>
                <NavLink to="/liked songs"><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon><span>Liked Songs</span></NavLink>
            </nav>
        </main>
    )
}