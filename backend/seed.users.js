const dbService = require('./services/db.service')
const authService = require('./api/auth/auth.service')

async function seedDB() {
  try {
    console.log('creating users')
    collection = await dbService.getCollection('user')
    await collection.drop()

    const users = [
      {
        fullname: 'Inbal Avidov',
        email: 'inbal.avidov@gmail.com',
        username: 'inbal.avidov',
        password: 'inbal',
        likedSongs: [],
        likedStations: []
      }, {
        fullname: 'Omri Hazan',
        email: 'omrihazan1313@gmail.com',
        username: 'omri.hazan',
        password: 'omri',
        likedSongs: [],
        likedStations: []
      },
      {
        fullname: 'Hila Shor',
        email: 'hilashor@gmail.com',
        username: 'hila.shor',
        password: 'hila',
        likedSongs: [],
        likedStations: []
      },
      {
        fullname: 'Guest',
        email: 'guest@gmail.com',
        username: 'guest',
        password: 'guest',
        likedSongs: [],
        likedStations: []
      }
    ]
    for (user of users) {
      const newUser = await authService.signup(user)
      console.log('newUser', newUser)
    }

  } catch (err) {
    console.log('unexpected error', err.stack);
  }

}

(async () => {
  const txt = await seedDB()
  process.exit()
})();

