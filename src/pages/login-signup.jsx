import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

import { userService } from '../service/user.service.js'
import { signup, login } from '../store/user.action.js'
import logoLogin from "../assets/img/logoLogin.png"
import { utilService } from '../service/util.service.js'
import { showErrorMsg, showSuccessMsg } from '../service/event-bus.service.js'



export function LoginSignup() {
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())
    const [isSignupState, setIsSignupState] = useState(false)
    const { signupState } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        if (signupState === 'loginState') setIsSignupState(false)
        else if (signupState === 'signupState') setIsSignupState(true)
    }, [signupState])




    function onToggleSignupState(ev) {
        ev.preventDefault()
        setIsSignupState(!isSignupState)
    }


    function handleCredentialsChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials((prevCreds) => ({ ...prevCreds, [field]: value }))
    }

    function loginAsGuest() {
        try {
            login({
                _id: utilService.makeId(),
                username: 'guest',
                imgUrl: "https://robohash.org/set=set3"
            })
            showSuccessMsg(`Welcome ${credentials.username}`)
            navigate('/')
        } catch (err) {
            showErrorMsg('OOps try again')

        }
    }


    function onSubmit(ev) {
        ev.preventDefault();
        if (isSignupState) {
            signup({ ...credentials, fullname: credentials.fullname })
                .then(() => {
                    showSuccessMsg(`Welcome ${credentials.username}`)
                    navigate('/')
                })
                .catch(err => {
                    showErrorMsg('OOps try again')
                });
        } else {
            login(credentials)
                .then(() => {
                    showSuccessMsg(`Welcome ${credentials.username}`)
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
                <button className="guest-btn" onClick={loginAsGuest}>Login as a guest</button>

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