import { LoginSignup } from "../cmps/login-signup"


export function LikedSongs(){


  return (
    <>
    <section className="liked-song grid">
        <section className="login-signup">
          <LoginSignup/>
        </section>

        <section className="liked-header">
          <h2>Liked songs header</h2>
        </section>

        <section className="main-liked-songs">
          <h2>Liked song</h2>
        </section>
      </section>
      
    </>
  )
}