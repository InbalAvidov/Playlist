
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { AppHeader } from "../cmps/app-header"




export function LikedSongs(){


  return (
    <>
    <AppHeader/>
    <section className="liked-songs">
        <section className="login-signup">
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