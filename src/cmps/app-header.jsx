import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { logout } from '../store/user.action.js'
import { useState } from 'react'

export function AppHeader() {
  const navigate = useNavigate()
  const user = useSelector((storeState => storeState.userModule.user))
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function onLogout() {
    navigate('/')
    logout()
  }

  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section className="app-header">
      <div className="header-details flex">
        <nav className="flex">
          <div className="btn-go-back" onClick={() => navigate(-1)}>
            <svg  role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF arrow" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>
          </div>
          <div className="btn-go-next">
            <svg  role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF arrow" viewBox="0 0 24 24"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg>
          </div>
        </nav>
        {!user ?
          <div className='btns-login-singup'>
            {/* {!user && <NavLink className="login-signup" to="/login-signup"><div>Sign up</div></NavLink>} */}
            {!user && <NavLink className="login-signup" to="/login-signup/signupState"><div>Sign up</div></NavLink>}
            {!user && <NavLink className="login-signup focus" to="/login-signup/loginState"><div>Log in</div></NavLink>}
          </div>
          :
          <div onClick={onToggleMenu} className="user-section">
            <button className='user-menu-btn'>
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <span> {user.fullname}</span>
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </button>
            <div className={isMenuOpen ? "user-menu" : "user-menu close"}>
              <p onClick={onLogout}>Logout</p>
            </div>
          </div>
        }
      </div>
    </section>
  )
}