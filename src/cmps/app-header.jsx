import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { logout } from '../store/user.action.js'

export function AppHeader({ opacity }) {
  const navigate = useNavigate()
  const user = useSelector((storeState => storeState.userModule.user))
  const color = useSelector((storeState => storeState.stationModule.color))
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function onLogout() {
    navigate('/')
    logout()
  }

  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section className='app-header' >
      <div className='header-bg' style={{ backgroundColor: `${color}`, opacity: `${opacity}` }}></div>
      <div className='header-details flex'>
        <nav className='flex'>
          <div className='nav-btn'>
            <div className='btn-go-back' onClick={() => navigate(-1)}>
              <svg role='img' height='24' width='24' aria-hidden='true' className='Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF arrow' viewBox='0 0 24 24'><path d='M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z'></path></svg>
            </div>
            <div className='btn-go-next'>
              <svg role='img' height='24' width='24' aria-hidden='true' className='Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF arrow' viewBox='0 0 24 24'><path d='M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z'></path></svg>
            </div>
          </div>
          {!user || user.fullname === 'Guest' ?
            <div className='btns-login-singup'>
              <NavLink className='login-signup' to='/login-signup/signupState'><div>Sign up</div></NavLink>
              <NavLink className='login-signup focus' to='/login-signup/loginState'><div>Log in</div></NavLink>
            </div>

            :
            <div onClick={onToggleMenu} className='user-section'>
              <button className='user-menu-btn'>
                <div className='user-icon'>
                  <svg role='img' height='16' width='16' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' ><path d='M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z'></path></svg>
                </div>
                <span> {user.fullname}</span>
                <FontAwesomeIcon icon={faCaretDown} className='arrow' />
              </button>
              <div className={isMenuOpen ? 'user-menu' : 'user-menu close'}>
                <p onClick={onLogout}>Logout</p>
              </div>
            </div>
          }
        </nav>
      </div>
    </section>
  )
}