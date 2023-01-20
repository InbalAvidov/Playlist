import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


import { logout} from '../store/user.action.js'

export function AppHeader(){
  const user = useSelector((storeState => storeState.userModule.user))
  console.log('Appheader cmp, user:',user)

  function onLogout() {
    logout()
        .then(() => {
            user=(null)
        })
}

  return (
    <section className="app-header">
      <div className="header-details flex">
        <nav className="flex">

          <div className="btn-go-back">
            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M15.957 2.793a1 1 0 010 1.414L8.164 12l7.793 7.793a1 1 0 11-1.414 1.414L5.336 12l9.207-9.207a1 1 0 011.414 0z"></path></svg>
          </div>
          <div className="btn-go-next">
            <svg role="img" height="24" width="24" aria-hidden="true" className="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF" viewBox="0 0 24 24"><path d="M8.043 2.793a1 1 0 000 1.414L15.836 12l-7.793 7.793a1 1 0 101.414 1.414L18.664 12 9.457 2.793a1 1 0 00-1.414 0z"></path></svg>
          </div>
        </nav>

        {!user && <NavLink className="login-signup" to="/login-signup"><div>Log in</div></NavLink>}
        {!user && <NavLink className="login-signup" to="/login-signup"><div>Sign up</div></NavLink>}

        {user && <><button onClick={onLogout}>hi {user.fullname}/Logout</button>
        <img src={user.imgUrl}></img></>} 
        
      </div>
    </section>
  )
}