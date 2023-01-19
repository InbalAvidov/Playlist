import { LoginSignup } from "../cmps/login-signup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'




export function LikedSongs(){


  return (
    <>
    <section className="liked-songs">
        <section className="login-signup">
          <LoginSignup/>
        </section>

        <section className="liked-header">
          <div className="liked-header-details">
            <p>PLAYLIST</p>
            <h2>Liked Songs</h2>
            <div className="loged-user-liked-songs">
              <p>{}</p>
            </div>

          </div>
          <div className="img-wrapper">
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          </div>
        </section>

        <section className="main-liked-songs">
          <h2>Liked song</h2>
        </section>
      </section>
      
    </>
  )
}