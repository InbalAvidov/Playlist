import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
// import React, { useEffect } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


import { showErrorMsg, showSuccessMsg } from '../service/event-bus.service.js'
import { userService } from '../service/user.service.js'
import { signup, login, logout } from '../store/user.action.js'
import { SET_USER } from '../store/user.reducer.js'
import logoLogin from "../assets/img/logoLogin.png"



export function LoginSignup() {

    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    const [isSignupState, setIsSignupState] = useState(false)
    const {signupState}= useParams()
    
    // console.log('LOGIN-SIGNUP ,signupState: ', signupState)
    // console.log('LOGIN-SIGNUP isSignupState, ', isSignupState)

    useEffect(() =>{
            if(signupState === 'loginState') setIsSignupState(false)
            else  if(signupState === 'signupState') setIsSignupState(true)
        } , [signupState])



    const navigate = useNavigate()
    const dispatch = useDispatch()

    function onToggleSignupState(ev) {
        ev.preventDefault()
        setIsSignupState(!isSignupState)
    }


    function setUser(user) {
        dispatch({ type: SET_USER, user })
    }


    function handleCredentialsChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
    }


    function onSubmit(ev) {
        ev.preventDefault();
        if (isSignupState) {
            signup({ ...credentials, fullname: credentials.fullname })
                .then(() => {
                    // showSuccessMsg(`Welcome ${credentials.username}`)
                    navigate('/')
                })
                .catch(err => {
                    showErrorMsg('OOps try again')
                });
        } else {
            login(credentials)
                .then(() => {
                    // showSuccessMsg(`Welcome ${credentials.username}`)
                    navigate('/')
                })
                .catch(err => {
                    showErrorMsg('OOps try again')
                });
        }
    }

   
    return (
        <section className="login-signup">
            <div className="login-page">

                <header className="login-header ">
                    <div className="logo flex">
                        <img className="logo-img" src={logoLogin} />
                        <h1>Playlist</h1>
                    </div>
                    
                    {isSignupState
                        ?
                        <h2>Sign up for free to start listening</h2>
                        :
                        <hr></hr>
                    } 
                </header>
                <div className="back-btn">
                    <NavLink to="/">Login as a guest</NavLink>
                </div>
                
                <form className="login-form grid " onSubmit={onSubmit}>
                    <label>
                        User Name
                        <input
                            className="custom-placeholder"
                            type="text"
                            name="username"
                            value={credentials.username}
                            placeholder="Username"
                            onChange={handleCredentialsChange}
                            required
                        // autoFocus
                        />
                    </label>
                    <label>
                        Email
                        <input
                            className="custom-placeholder"
                            type="email"
                            name="email"
                            value={credentials.email}
                            placeholder="Enter your email"
                            onChange={handleCredentialsChange}
                            required
                        // autoFocus
                        />
                    </label>
                    <label>
                    Password
                    <input
                        className="custom-placeholder"
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleCredentialsChange}
                        required
                    />
                    </label>
                    {isSignupState && 
                    <label>
                        Full Name
                        <input
                            className="custom-placeholder"
                            type="text"
                            name="fullname"
                            value={credentials.fullname}
                            placeholder="Full name"
                            onChange={handleCredentialsChange}
                            required
                        />
                    </label>
                    }
                    
                    <button className="registration-btn">{isSignupState ? 'Signup' : 'Login'}</button>
                    
                    
                    <a href="#" onClick={onToggleSignupState}>
                        {isSignupState ? 'Have an account? Login' : "Don't have an account? Sign up here"}
                    </a >

                    
                </form>
            </div >
        </section>
    )
}