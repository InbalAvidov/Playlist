const dbService = require('./services/db.service')
const authService = require('./api/auth/auth.service')


function getRandomTimeStamp() {
  const HOUR = 1000 * 60 * 60
  const DAY = 1000 * 60 * 60 * 24
  const WEEK = 1000 * 60 * 60 * 24 * 7
  const pastTime = getRandomIntInclusive(HOUR, WEEK)
  return Date.now() - pastTime
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

async function seedDB() {
  try {

    console.log('creating stations')
    let collection = await dbService.getCollection('station')

    await collection.insertMany([
      {
        "name": "Liked Songs",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674838098/likedSongPic_lrwwnc.png",
        "tags": ['home'],
        "songs": [],
        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Daily Mix 2",
        "imgUrl": "//res.cloudinary.com/damrhms1q/image/upload/v1674246586/cover1_veddql.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
        ],
        "songs": [{
          "id": "rYEDA3JcQqw",
          "title": "Rolling in the Deep",
          "channelTitle": "Adele",
          "imgUrl": "//i.ytimg.com/vi/rYEDA3JcQqw/hqdefault.jpg",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "ckObp0fTNmU", "title": " לבד על המיטה ", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/ckObp0fTNmU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ckObp0fTNmU",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "vK_LTSeQYdI", "title": " פילהרמונית של טירוף", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/vK_LTSeQYdI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=vK_LTSeQYdI",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "hLQl3WQQoQ0",
          "title": " Someone Like You",
          "channelTitle": "Adele",
          "imgUrl": "//i.ytimg.com/vi/hLQl3WQQoQ0/hqdefault.jpg",
          "url": "//www.youtube.com/embed?v=hLQl3WQQoQ0",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "CvBfHwUxHIk", "title": "Umbrella ", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/CvBfHwUxHIk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=CvBfHwUxHIk",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "jDvYDzFOK9A",
          "title": " I Drink Wine ",
          "channelTitle": "Adele",
          "imgUrl": "//i.ytimg.com/vi/jDvYDzFOK9A/hqdefault.jpg",
          "url": "//www.youtube.com/embed?v=jDvYDzFOK9A",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "YQHsXMglC9A",
          "title": " Hello",
          "channelTitle": "Adele",
          "imgUrl": "//i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
          "url": "//www.youtube.com/embed?v=YQHsXMglC9A",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "aIHF7u9Wwiw", "title": "Good News", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/aIHF7u9Wwiw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=aIHF7u9Wwiw",
          "addedAt": getRandomTimeStamp()

        },
        {
          "id": "OWKzRngush4", "title": "3 Nights", "channelTitle": "DominicFike", "imgUrl": "//i.ytimg.com/vi/OWKzRngush4/hqdefault.jpg", "url": "//www.youtube.com/embed?v=OWKzRngush4",
          "addedAt": getRandomTimeStamp()

        },
        {
          "id": "DwfPlzQ1x_g", "title": "Coast", "channelTitle": "HaileeSteinfeld", "imgUrl": "//i.ytimg.com/vi/DwfPlzQ1x_g/hqdefault.jpg", "url": "//www.youtube.com/embed?v=DwfPlzQ1x_g",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "niG3YMU6jFk", "title": " Oh My God ", "channelTitle": "Adele", "imgUrl": "//i.ytimg.com/vi/niG3YMU6jFk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=niG3YMU6jFk",
          "addedAt": getRandomTimeStamp()
        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {
        "name": "Big hits",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246586/cover2_nhihum.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill",
          "Recently played"
          ,
        ],
        "songs": [{
          "id": "tcYodQoapMg", "title": "positions", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=tcYodQoapMg",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "QYh6mYIJG2Y", "title": "7 rings ", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/QYh6mYIJG2Y/hqdefault.jpg", "url": "//www.youtube.com/embed?v=QYh6mYIJG2Y",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "SXiSVQZLje8", "title": "Side To Side", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=SXiSVQZLje8",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "h2jvHynuMjI", "title": "Stuck with U", "channelTitle": "JustinBieber", "imgUrl": "//i.ytimg.com/vi/h2jvHynuMjI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=h2jvHynuMjI",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "ffxKSjUwKdU", "title": "no tears left to cry ", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/ffxKSjUwKdU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ffxKSjUwKdU",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "yrtWLyp5gLI", "title": " CUFF IT ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/yrtWLyp5gLI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=yrtWLyp5gLI",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "bnVUHWCynig", "title": " Halo", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/bnVUHWCynig/hqdefault.jpg", "url": "//www.youtube.com/embed?v=bnVUHWCynig",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "k4YRWT_Aldo", "title": " 7/11", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/k4YRWT_Aldo/hqdefault.jpg", "url": "//www.youtube.com/embed?v=k4YRWT_Aldo",
          "addedAt": getRandomTimeStamp()
        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Weekend vibes",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246577/cover11_fx69zb.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          ,
        ],
        "songs": [{
          "id": "VBmMU_iwe6U", "title": " Run the World  ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/VBmMU_iwe6U/hqdefault.jpg", "url": "//www.youtube.com/embed?v=VBmMU_iwe6U", "addedAt": getRandomTimeStamp()
        },
        {
          "id": "ViwtNLUqkMY", "title": " Crazy In Love ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/ViwtNLUqkMY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ViwtNLUqkMY",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "Ob7vObnFUJc", "title": " Love On Top ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/Ob7vObnFUJc/hqdefault.jpg", "url": "//www.youtube.com/embed?v=Ob7vObnFUJc",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "PeonBmeFR8o", "title": " Hold Up ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/PeonBmeFR8o/hqdefault.jpg", "url": "//www.youtube.com/embed?v=PeonBmeFR8o",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "Mx_OexsUI2M", "title": " Lift Me Up", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/Mx_OexsUI2M/hqdefault.jpg", "url": "//www.youtube.com/embed?v=Mx_OexsUI2M"
          , "addedAt": getRandomTimeStamp()
        },
        {
          "id": "lWA2pjMjpBs", "title": " Diamonds", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/lWA2pjMjpBs/hqdefault.jpg", "url": "//www.youtube.com/embed?v=lWA2pjMjpBs",
          "addedAt": getRandomTimeStamp()
        },
        ],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Road trip",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246576/cover5_absghr.png",
        "tags": [
          "home",
          "Funk",
          "Happy",
        ],
        "songs": [{
          "id": "CvBfHwUxHIk", "title": " Umbrella ", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/CvBfHwUxHIk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=CvBfHwUxHIk",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "uelHwf8o7_U", "title": "Love The Way You Lie", "channelTitle": "Eminem", "imgUrl": "//i.ytimg.com/vi/uelHwf8o7_U/hqdefault.jpg", "url": "//www.youtube.com/embed?v=uelHwf8o7_U"
          , "addedAt": getRandomTimeStamp()
        },
        {
          "id": "ehcVomMexkY", "title": " Pour It Up ", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/ehcVomMexkY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ehcVomMexkY",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "pa14VNsdSYM", "title": " Only Girl", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/pa14VNsdSYM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=pa14VNsdSYM",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "7PmUtmfTmbg", "title": "Bubblin ", "channelTitle": "Anderson Paak", "imgUrl": "//i.ytimg.com/vi/7PmUtmfTmbg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=7PmUtmfTmbg",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "DwfPlzQ1x_g", "title": "Coast", "channelTitle": "HaileeSteinfeld", "imgUrl": "//i.ytimg.com/vi/DwfPlzQ1x_g/hqdefault.jpg", "url": "//www.youtube.com/embed?v=DwfPlzQ1x_g",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "LR3GQfryp9M", "title": " Dang! ", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/LR3GQfryp9M/hqdefault.jpg", "url": "//www.youtube.com/embed?v=LR3GQfryp9M",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "LqM5Fa3iE90", "title": "CUT EM IN ", "channelTitle": "Anderson Paak", "imgUrl": "//i.ytimg.com/vi/LqM5Fa3iE90/hqdefault.jpg", "url": "//www.youtube.com/embed?v=LqM5Fa3iE90",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "7Jj83FOlBF8", "title": "Make It Better ", "channelTitle": "AndersonPaak", "imgUrl": "//i.ytimg.com/vi/7Jj83FOlBF8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=7Jj83FOlBF8"
        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Teen beats",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246576/cover9_j1zkb1.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill",
          "Recently played"
        ],
        "songs": [{
          "id": "6gXlC3rD8jI", "title": "JEWELZ ", "channelTitle": "Anderson Paak", "imgUrl": "//i.ytimg.com/vi/6gXlC3rD8jI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=6gXlC3rD8jI"
          , "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "nFk20L7MrDw", "title": "KAYTRANADA, Twin Flame ", "channelTitle": "Kaytranada", "imgUrl": "//i.ytimg.com/vi/nFk20L7MrDw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=nFk20L7MrDw"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "vvPeJLcK2Lk", "title": "Am I Wrong ", "channelTitle": "Anderson Paak", "imgUrl": "//i.ytimg.com/vi/vvPeJLcK2Lk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=vvPeJLcK2Lk"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "OWKzRngush4", "title": " 3 Nights ", "channelTitle": "DominicFike", "imgUrl": "//i.ytimg.com/vi/OWKzRngush4/hqdefault.jpg", "url": "//www.youtube.com/embed?v=OWKzRngush4"

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "P0CMm9QccZg", "title": " King of Everything", "channelTitle": "VevoDSCVR", "imgUrl": "//i.ytimg.com/vi/P0CMm9QccZg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=P0CMm9QccZg"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "SUjD_nwooTg", "title": " Vampire ", "channelTitle": "Dominic Fike", "imgUrl": "//i.ytimg.com/vi/SUjD_nwooTg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=SUjD_nwooTg"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "DHgXhcjl4Bk", "title": " Phone Numbers ", "channelTitle": "Dominic Fike", "imgUrl": "//i.ytimg.com/vi/DHgXhcjl4Bk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=DHgXhcjl4Bk"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "PXyPiHt2weU", "title": " Why ", "channelTitle": "Dominic Fike", "imgUrl": "//i.ytimg.com/vi/PXyPiHt2weU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=PXyPiHt2weU"
        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Workout",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246575/cover6_stj2c7.png",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Recently played"
        ],
        "songs": [{
          "id": "QrR_gm6RqCo", "title": "NPR Music Tiny Desk Concert", "channelTitle": "NPR Music", "imgUrl": "//i.ytimg.com/vi/QrR_gm6RqCo/hqdefault.jpg", "url": "//www.youtube.com/embed?v=QrR_gm6RqCo",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "SsKT0s5J8ko", "title": " Self Care", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/SsKT0s5J8ko/hqdefault.jpg", "url": "//www.youtube.com/embed?v=SsKT0s5J8ko",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "aIHF7u9Wwiw", "title": " Good News", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/aIHF7u9Wwiw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=aIHF7u9Wwiw"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "5WU7oGiwiao", "title": " Stay", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/5WU7oGiwiao/hqdefault.jpg", "url": "//www.youtube.com/embed?v=5WU7oGiwiao"
        },
        {
          "id": "J_8xCOSekog", "title": " My Favorite Part", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/J_8xCOSekog/hqdefault.jpg", "url": "//www.youtube.com/embed?v=J_8xCOSekog",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "74TFS8r_SMI", "title": " Donald Trump", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/74TFS8r_SMI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=74TFS8r_SMI"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "6B3YwcjQ_bU", "title": " 2009", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/6B3YwcjQ_bU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=6B3YwcjQ_bU"
        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Top10",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246575/cover8_di8fap.webp",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Made For you"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "VPRjCeoBqrI", "title": " A Sky Full Of Stars ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/VPRjCeoBqrI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=VPRjCeoBqrI"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "YykjpeuMNEk", "title": " Hymn For The Weekend ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/YykjpeuMNEk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=YykjpeuMNEk"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "QtXby3twMmI", "title": " Adventure Of A Lifetime ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/QtXby3twMmI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=QtXby3twMmI"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "n66HAsqwibg", "title": "A Sky Full Of Stars  Coldplay | Lyrics/Vietsub", "channelTitle": "Radio Cảm Xúc", "imgUrl": "//i.ytimg.com/vi/n66HAsqwibg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=n66HAsqwibg"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "dvgZkm1xWPE", "title": " Viva La Vida ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/dvgZkm1xWPE/hqdefault.jpg", "url": "//www.youtube.com/embed?v=dvgZkm1xWPE"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "d020hcWA_Wg", "title": " Clocks ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/d020hcWA_Wg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=d020hcWA_Wg"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "yKNxeF4KMsY", "title": " Yellow ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/yKNxeF4KMsY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=yKNxeF4KMsY"

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Calm",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246575/cover10_wu97pr.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Made For you",
          "More of what you like"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "Cr8K88UcO0s", "title": "Tití Me Preguntó  | Un Verano Sin Ti", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/Cr8K88UcO0s/hqdefault.jpg", "url": "//www.youtube.com/embed?v=Cr8K88UcO0s"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "saGYMhApaH8", "title": "Me Porto Bonito | Un Verano Sin Ti", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/saGYMhApaH8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=saGYMhApaH8"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "doLMt10ytHY", "title": "Yonaguni ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/doLMt10ytHY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=doLMt10ytHY"
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "TmKh7lAwnBI", "title": "BAD BUNNY x JHAY CORTEZ  DÁKITI ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/TmKh7lAwnBI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=TmKh7lAwnBI"
          ,

        },
        {
          "id": "ARWg160eaX4", "title": "Neverita  | Un Verano Sin Ti", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/ARWg160eaX4/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ARWg160eaX4",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "p38WgakuYDo", "title": "Moscow Mule  | Un Verano Sin Ti", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/p38WgakuYDo/hqdefault.jpg", "url": "//www.youtube.com/embed?v=p38WgakuYDo"
          ,

        },
        {
          "id": "acEOASYioGY", "title": "BAD BUNNY  CALLAÍTA ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/acEOASYioGY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=acEOASYioGY",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "OSUxrSe5GbI", "title": "BAD BUNNY x DRAKE  MÍA ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/OSUxrSe5GbI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=OSUxrSe5GbI"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "90's",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246574/cover7_ee1lyg.webp",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Made For you"

        ],
        "songs": [
          {
            "addedAt": getRandomTimeStamp(), "id": "f5omY8jVrSM", "title": "BAD BUNNY x ROSALÍA  LA NOCHE DE ANOCHE ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/f5omY8jVrSM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=f5omY8jVrSM"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "kLpH1nSLJSs", "title": "BAD BUNNY  AMORFODA ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/kLpH1nSLJSs/hqdefault.jpg", "url": "//www.youtube.com/embed?v=kLpH1nSLJSs"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "eDfcyn5jLII", "title": "  היי בייב", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/eDfcyn5jLII/hqdefault.jpg", "url": "//www.youtube.com/embed?v=eDfcyn5jLII"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "dGy04XN9Spw", "title": "כנפיים |  מארח את מרגול | Coke Studio #1", "channelTitle": "CocaColaIsrael", "imgUrl": "//i.ytimg.com/vi/dGy04XN9Spw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=dGy04XN9Spw"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "9AvlUb4ObB8", "title": "  י״א 2", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/9AvlUb4ObB8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=9AvlUb4ObB8"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "GIRbXNousaI", "title": "Tuna  30 Rock //   רוק 30", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/GIRbXNousaI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=GIRbXNousaI"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "aFG7MR6ld1M", "title": "  סחרחורת // Tuna  Vertigo", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/aFG7MR6ld1M/hqdefault.jpg", "url": "//www.youtube.com/embed?v=aFG7MR6ld1M"
            ,

          },
        ],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Good vibes",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246573/cover4_dkdp4b.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill",
          "Made For you"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "ifpiFzu4c54", "title": " אני ", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/ifpiFzu4c54/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ifpiFzu4c54"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "PburljbLfo", "title": "תמיד שלך ", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/PburljbLfo/hqdefault.jpg", "url": "//www.youtube.com/embed?v=PburljbLfo"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "AwjhMPbeD0Y", "title": "חצי דפוק ", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/AwjhMPbeD0Y/hqdefault.jpg", "url": "//www.youtube.com/embed?v=AwjhMPbeD0Y"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "ckObp0fTNmU", "title": "לבד על המיטה", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/ckObp0fTNmU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ckObp0fTNmU"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "vK_LTSeQYdI", "title": "פילהרמונית של טירוף", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/vK_LTSeQYdI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=vK_LTSeQYdI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "tlkKybWF11c", "title": "חורף באוטו ", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/tlkKybWF11c/hqdefault.jpg", "url": "//www.youtube.com/embed?v=tlkKybWF11c"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "2D5DnahF3JI", "title": "בסוף הכל חולף", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/2D5DnahF3JI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=2D5DnahF3JI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "fXFLjct5agw", "title": "קאקדילה", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/fXFLjct5agw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=fXFLjct5agw"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "w6vEE4NxlYw", "title": "פרצופים", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/w6vEE4NxlYw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=w6vEE4NxlYw"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "mQiTfvht20I", "title": "תפילה", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/mQiTfvht20I/hqdefault.jpg", "url": "//www.youtube.com/embed?v=mQiTfvht20I"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "xmeCr9QPhkA", "title": "פסקול חיי", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/xmeCr9QPhkA/hqdefault.jpg", "url": "//www.youtube.com/embed?v=xmeCr9QPhkA"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Cool",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246573/cover3_wfw70s.webp",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "L6K90w9O7T0", "title": "עומר אדם  תגידו לה &amp; אהבה מטורפת", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/L6K90w9O7T0/hqdefault.jpg", "url": "//www.youtube.com/embed?v=L6K90w9O7T0"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "YZWd83Z9GlM", "title": "עומר אדם  שדות של תירוצים", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/YZWd83Z9GlM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=YZWd83Z9GlM"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "yjJcnqZqciU", "title": "  לבחור נכון", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/yjJcnqZqciU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=yjJcnqZqciU"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "wwoCnwVG4Ko", "title": "  כל יום כמו נס", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/wwoCnwVG4Ko/hqdefault.jpg", "url": "//www.youtube.com/embed?v=wwoCnwVG4Ko"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "sCJh9YcrL3k", "title": " ושולי רנד  בין קודש לחול", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/sCJh9YcrL3k/hqdefault.jpg", "url": "//www.youtube.com/embed?v=sCJh9YcrL3k"
          ,

        },
        ],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Sad and mad",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246573/cover21_vqvwrs.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "jeU9Sbq0D0A", "title": "  אור גדול  Amir Dadon  Or Gadol", "channelTitle": "Helicon Music  הליקון", "imgUrl": "//i.ytimg.com/vi/jeU9Sbq0D0A/hqdefault.jpg", "url": "//www.youtube.com/embed?v=jeU9Sbq0D0A"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "EAecWGT_lQ0", "title": "  יש אין סוף", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/EAecWGT_lQ0/hqdefault.jpg", "url": "//www.youtube.com/embed?v=EAecWGT_lQ0"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "45T15SXoxrM", "title": "  הרוח הטובה", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/45T15SXoxrM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=45T15SXoxrM"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "lainV5py0Rw", "title": "  בואי נדבר בינינו", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/lainV5py0Rw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=lainV5py0Rw"
          ,

        }],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Daily Mix 8",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246573/cover22_io8wmm.png",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill"
        ],
        "songs": [{
          "id": "rYEDA3JcQqw",
          "addedAt": getRandomTimeStamp(),
          "title": " Rolling in the Deep",
          "channelTitle": "Adele",

          "imgUrl": "//i.ytimg.com/vi/rYEDA3JcQqw/hqdefault.jpg"
        },
        {
          "id": "U3ASj1L6_sY",
          "addedAt": getRandomTimeStamp(),
          "title": " Easy On Me ",
          "channelTitle": "Adele",
          "imgUrl": "//i.ytimg.com/vi/U3ASj1L6_sY/hqdefault.jpg",
          "url": "//www.youtube.com/embed?v=U3ASj1L6_sY",
        },
        {
          "id": "a2giXO6eyuI",
          "addedAt": getRandomTimeStamp(),
          "title": "Set Fire to the Rain",
          "channelTitle": " Topic", "imgUrl": "//i.ytimg.com/vi/a2giXO6eyuI/hqdefault.jpg",
          "url": "//www.youtube.com/embed?v=a2giXO6eyuI",
        },
        {
          "id": "hLQl3WQQoQ0",
          "addedAt": getRandomTimeStamp(),
          "   title": " Someone Like You",
          "channelTitle": "Adele",
          "imgUrl": "//i.ytimg.com/vi/hLQl3WQQoQ0/hqdefault.jpg",
          "url": "//www.youtube.com/embed?v=hLQl3WQQoQ0",
          "addedAt": "20230121T17:13:44.298Z"
        },
        {
          "id": "jDvYDzFOK9A",
          "addedAt": getRandomTimeStamp(),
          "      title": " I Drink Wine ",
          "channelTitle": "Adele",
          "imgUrl": "//i.ytimg.com/vi/jDvYDzFOK9A/hqdefault.jpg",
          "url": "//www.youtube.com/embed?v=jDvYDzFOK9A",
        },
        {
          "id": "YQHsXMglC9A",
          "addedAt": getRandomTimeStamp(),
          "title": " Hello",
          "channelTitle": "Adele",
          "imgUrl": "//i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
          "url": "//www.youtube.com/embed?v=YQHsXMglC9A",
        },
        {
          "id": "niG3YMU6jFk", "title": " Oh My God ", "channelTitle": "Adele", "imgUrl": "//i.ytimg.com/vi/niG3YMU6jFk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=niG3YMU6jFk",
          "addedAt": getRandomTimeStamp(),
        },
        ],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Electronic",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246573/cover20_ipgrcr.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill"
        ],
        "songs": [{
          "id": "tcYodQoapMg", "title": "positions", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=tcYodQoapMg",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "QYh6mYIJG2Y", "title": "7 rings ", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/QYh6mYIJG2Y/hqdefault.jpg", "url": "//www.youtube.com/embed?v=QYh6mYIJG2Y",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "SXiSVQZLje8", "title": "Side To Side", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=SXiSVQZLje8",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "h2jvHynuMjI", "title": "Stuck with U", "channelTitle": "JustinBieber", "imgUrl": "//i.ytimg.com/vi/h2jvHynuMjI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=h2jvHynuMjI",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "ffxKSjUwKdU", "title": "no tears left to cry ", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/ffxKSjUwKdU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ffxKSjUwKdU"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "yrtWLyp5gLI", "title": " CUFF IT ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/yrtWLyp5gLI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=yrtWLyp5gLI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "bnVUHWCynig", "title": " Halo", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/bnVUHWCynig/hqdefault.jpg", "url": "//www.youtube.com/embed?v=bnVUHWCynig"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "k4YRWT_Aldo", "title": " 7/11", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/k4YRWT_Aldo/hqdefault.jpg", "url": "//www.youtube.com/embed?v=k4YRWT_Aldo"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "High",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246573/cover18_v3pb3j.png",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill",
          "Recently played"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "VBmMU_iwe6U", "title": " Run the World  ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/VBmMU_iwe6U/hqdefault.jpg", "url": "//www.youtube.com/embed?v=VBmMU_iwe6U"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "ViwtNLUqkMY", "title": " Crazy In Love", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/ViwtNLUqkMY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ViwtNLUqkMY"
          ,

        },
        {
          "id": "Ob7vObnFUJc", "title": " Love On Top ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/Ob7vObnFUJc/hqdefault.jpg", "url": "//www.youtube.com/embed?v=Ob7vObnFUJc",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "PeonBmeFR8o", "title": " Hold Up ", "channelTitle": "Beyoncé", "imgUrl": "//i.ytimg.com/vi/PeonBmeFR8o/hqdefault.jpg", "url": "//www.youtube.com/embed?v=PeonBmeFR8o",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "Mx_OexsUI2M", "title": " Lift Me Up", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/Mx_OexsUI2M/hqdefault.jpg", "url": "//www.youtube.com/embed?v=Mx_OexsUI2M"
          , "addedAt": getRandomTimeStamp()
        },
        {
          "id": "lWA2pjMjpBs", "title": " Diamonds", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/lWA2pjMjpBs/hqdefault.jpg", "url": "//www.youtube.com/embed?v=lWA2pjMjpBs",
          "addedAt": getRandomTimeStamp()
        },
        ],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Blossom",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246573/cover19_uh1qsn.webp",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "More of what you like",
          "Recently played"
        ],
        "songs": [{
          "id": "CvBfHwUxHIk", "title": " Umbrella ", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/CvBfHwUxHIk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=CvBfHwUxHIk",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "uelHwf8o7_U", "title": "Love The Way You Lie", "channelTitle": "Eminem", "imgUrl": "//i.ytimg.com/vi/uelHwf8o7_U/hqdefault.jpg", "url": "//www.youtube.com/embed?v=uelHwf8o7_U"
          , "addedAt": getRandomTimeStamp()
        },
        {
          "id": "ehcVomMexkY", "title": " Pour It Up", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/ehcVomMexkY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ehcVomMexkY",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "pa14VNsdSYM", "title": " Only Girl", "channelTitle": "Rihanna", "imgUrl": "//i.ytimg.com/vi/pa14VNsdSYM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=pa14VNsdSYM",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "7PmUtmfTmbg", "title": "Bubblin ", "channelTitle": "Anderson Paak", "imgUrl": "//i.ytimg.com/vi/7PmUtmfTmbg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=7PmUtmfTmbg",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "DwfPlzQ1x_g", "title": "Coast ", "channelTitle": "HaileeSteinfeld", "imgUrl": "//i.ytimg.com/vi/DwfPlzQ1x_g/hqdefault.jpg", "url": "//www.youtube.com/embed?v=DwfPlzQ1x_g",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "LR3GQfryp9M", "title": " Dang! ", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/LR3GQfryp9M/hqdefault.jpg", "url": "//www.youtube.com/embed?v=LR3GQfryp9M",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "LqM5Fa3iE90", "title": "Anderson .Paak feat. Rick Ross  CUT EM IN ", "channelTitle": "Anderson Paak", "imgUrl": "//i.ytimg.com/vi/LqM5Fa3iE90/hqdefault.jpg", "url": "//www.youtube.com/embed?v=LqM5Fa3iE90",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "7Jj83FOlBF8", "title": "Make It Better ", "channelTitle": "AndersonPaak", "imgUrl": "//i.ytimg.com/vi/7Jj83FOlBF8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=7Jj83FOlBF8"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Fresh Vibes",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246573/cover13_rriius.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Made For you",
          "Recently played"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "6gXlC3rD8jI", "title": "JEWELZ ", "channelTitle": "Anderson Paak", "imgUrl": "//i.ytimg.com/vi/6gXlC3rD8jI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=6gXlC3rD8jI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "nFk20L7MrDw", "title": "KAYTRANADA, Twin Flame ", "channelTitle": "Kaytranada", "imgUrl": "//i.ytimg.com/vi/nFk20L7MrDw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=nFk20L7MrDw"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "vvPeJLcK2Lk", "title": "Am I Wrong ", "channelTitle": "Anderson Paak", "imgUrl": "//i.ytimg.com/vi/vvPeJLcK2Lk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=vvPeJLcK2Lk"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "OWKzRngush4", "title": " 3 Nights ", "channelTitle": "DominicFike", "imgUrl": "//i.ytimg.com/vi/OWKzRngush4/hqdefault.jpg", "url": "//www.youtube.com/embed?v=OWKzRngush4"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "P0CMm9QccZg", "title": " King of Everything", "channelTitle": "VevoDSCVR", "imgUrl": "//i.ytimg.com/vi/P0CMm9QccZg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=P0CMm9QccZg"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "SUjD_nwooTg", "title": " Vampire ", "channelTitle": "Dominic Fike", "imgUrl": "//i.ytimg.com/vi/SUjD_nwooTg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=SUjD_nwooTg"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "DHgXhcjl4Bk", "title": " Phone Numbers ", "channelTitle": "Dominic Fike", "imgUrl": "//i.ytimg.com/vi/DHgXhcjl4Bk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=DHgXhcjl4Bk"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "PXyPiHt2weU", "title": " Why ", "channelTitle": "Dominic Fike", "imgUrl": "//i.ytimg.com/vi/PXyPiHt2weU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=PXyPiHt2weU"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Classics",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246571/cover14_rydluk.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Recently played"
        ],
        "songs": [{
          "id": "QrR_gm6RqCo", "title": "Mac Miller: NPR Music Tiny Desk Concert", "channelTitle": "NPR Music", "imgUrl": "//i.ytimg.com/vi/QrR_gm6RqCo/hqdefault.jpg", "url": "//www.youtube.com/embed?v=QrR_gm6RqCo",
          "addedAt": getRandomTimeStamp()
        },
        {
          "id": "SsKT0s5J8ko", "title": " Self Care", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/SsKT0s5J8ko/hqdefault.jpg", "url": "//www.youtube.com/embed?v=SsKT0s5J8ko",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "aIHF7u9Wwiw", "title": " Good News", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/aIHF7u9Wwiw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=aIHF7u9Wwiw"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "5WU7oGiwiao", "title": " Stay", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/5WU7oGiwiao/hqdefault.jpg", "url": "//www.youtube.com/embed?v=5WU7oGiwiao"
          ,

        },
        {
          "id": "J_8xCOSekog", "title": " My Favorite Part", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/J_8xCOSekog/hqdefault.jpg", "url": "//www.youtube.com/embed?v=J_8xCOSekog",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "74TFS8r_SMI", "title": " Donald Trump", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/74TFS8r_SMI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=74TFS8r_SMI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "6B3YwcjQ_bU", "title": " 2009", "channelTitle": "Mac Miller", "imgUrl": "//i.ytimg.com/vi/6B3YwcjQ_bU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=6B3YwcjQ_bU"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "On and on",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246571/cover17_pdq2z8.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Made For you",
          "More of what you like"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "VPRjCeoBqrI", "title": " A Sky Full Of Stars ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/VPRjCeoBqrI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=VPRjCeoBqrI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "YykjpeuMNEk", "title": " Hymn For The Weekend ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/YykjpeuMNEk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=YykjpeuMNEk"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "QtXby3twMmI", "title": " Adventure Of A Lifetime ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/QtXby3twMmI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=QtXby3twMmI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "n66HAsqwibg", "title": "A Sky Full Of Stars  Coldplay | Lyrics/Vietsub", "channelTitle": "Radio Cảm Xúc", "imgUrl": "//i.ytimg.com/vi/n66HAsqwibg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=n66HAsqwibg"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "dvgZkm1xWPE", "title": " Viva La Vida ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/dvgZkm1xWPE/hqdefault.jpg", "url": "//www.youtube.com/embed?v=dvgZkm1xWPE"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "d020hcWA_Wg", "title": " Clocks ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/d020hcWA_Wg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=d020hcWA_Wg"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "yKNxeF4KMsY", "title": " Yellow ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/yKNxeF4KMsY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=yKNxeF4KMsY"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Heart broken",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246571/cover12_sfziqj.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Chill",
          "Recently played",
          "More of what you like"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "Cr8K88UcO0s", "title": "Tití Me Preguntó  | Un Verano Sin Ti", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/Cr8K88UcO0s/hqdefault.jpg", "url": "//www.youtube.com/embed?v=Cr8K88UcO0s"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "saGYMhApaH8", "title": "Me Porto Bonito  | Un Verano Sin Ti", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/saGYMhApaH8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=saGYMhApaH8"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "doLMt10ytHY", "title": "Yonaguni ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/doLMt10ytHY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=doLMt10ytHY"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "TmKh7lAwnBI", "title": "BAD BUNNY x JHAY CORTEZ  DÁKITI ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/TmKh7lAwnBI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=TmKh7lAwnBI"
          ,

        },
        {
          "id": "ARWg160eaX4", "title": "Neverita  | Un Verano Sin Ti", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/ARWg160eaX4/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ARWg160eaX4",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "p38WgakuYDo", "title": "Moscow Mule  | Un Verano Sin Ti", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/p38WgakuYDo/hqdefault.jpg", "url": "//www.youtube.com/embed?v=p38WgakuYDo"
          ,

        },
        {
          "id": "acEOASYioGY", "title": "BAD BUNNY  CALLAÍTA ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/acEOASYioGY/hqdefault.jpg", "url": "//www.youtube.com/embed?v=acEOASYioGY",
          "addedAt": getRandomTimeStamp()
        },
        {
          "addedAt": getRandomTimeStamp(), "id": "OSUxrSe5GbI", "title": "BAD BUNNY x DRAKE  MÍA ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/OSUxrSe5GbI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=OSUxrSe5GbI"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "70's",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246571/cover15_e3gktm.webp",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Made For you",
          "Recently played",
          "More of what you like"
        ],
        "songs": [
          {
            "addedAt": getRandomTimeStamp(), "id": "f5omY8jVrSM", "title": "BAD BUNNY x ROSALÍA  LA NOCHE DE ANOCHE ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/f5omY8jVrSM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=f5omY8jVrSM"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "kLpH1nSLJSs", "title": "BAD BUNNY  AMORFODA ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/kLpH1nSLJSs/hqdefault.jpg", "url": "//www.youtube.com/embed?v=kLpH1nSLJSs"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "eDfcyn5jLII", "title": "היי בייב", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/eDfcyn5jLII/hqdefault.jpg", "url": "//www.youtube.com/embed?v=eDfcyn5jLII"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "dGy04XN9Spw", "title": "כנפיים ", "channelTitle": "CocaColaIsrael", "imgUrl": "//i.ytimg.com/vi/dGy04XN9Spw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=dGy04XN9Spw"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "9AvlUb4ObB8", "title": "  י״א 2", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/9AvlUb4ObB8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=9AvlUb4ObB8"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "GIRbXNousaI", "title": " רוק 30", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/GIRbXNousaI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=GIRbXNousaI"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "aFG7MR6ld1M", "title": "סחרחורת ", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/aFG7MR6ld1M/hqdefault.jpg", "url": "//www.youtube.com/embed?v=aFG7MR6ld1M"
            ,

          },
        ],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Just fun",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674246571/cover16_gxladb.webp",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "More of what you like"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "ifpiFzu4c54", "title": "אני", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/ifpiFzu4c54/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ifpiFzu4c54"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "PburljbLfo", "title": "תמיד שלך", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/PburljbLfo/hqdefault.jpg", "url": "//www.youtube.com/embed?v=PburljbLfo"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "AwjhMPbeD0Y", "title": "חצי דפוק", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/AwjhMPbeD0Y/hqdefault.jpg", "url": "//www.youtube.com/embed?v=AwjhMPbeD0Y"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "ckObp0fTNmU", "title": "לבד על המיטה", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/ckObp0fTNmU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ckObp0fTNmU"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "vK_LTSeQYdI", "title": "פילהרמונית של טירוף", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/vK_LTSeQYdI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=vK_LTSeQYdI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "tlkKybWF11c", "title": "חורף באוטו ", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/tlkKybWF11c/hqdefault.jpg", "url": "//www.youtube.com/embed?v=tlkKybWF11c"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "2D5DnahF3JI", "title": "בסוף הכל חולף", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/2D5DnahF3JI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=2D5DnahF3JI"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "fXFLjct5agw", "title": "קאקדילה", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/fXFLjct5agw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=fXFLjct5agw"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "w6vEE4NxlYw", "title": "פרצופים", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/w6vEE4NxlYw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=w6vEE4NxlYw"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "mQiTfvht20I", "title": "תפילה", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/mQiTfvht20I/hqdefault.jpg", "url": "//www.youtube.com/embed?v=mQiTfvht20I"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "xmeCr9QPhkA", "title": "פסקול חיי", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/xmeCr9QPhkA/hqdefault.jpg", "url": "//www.youtube.com/embed?v=xmeCr9QPhkA"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Today's best",
        "imgUrl": "https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy",
          "Recently played",
          "More of what you like"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "L6K90w9O7T0", "title": "עומר אדם  תגידו לה &amp; אהבה מטורפת", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/L6K90w9O7T0/hqdefault.jpg", "url": "//www.youtube.com/embed?v=L6K90w9O7T0"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "YZWd83Z9GlM", "title": "עומר אדם  שדות של תירוצים", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/YZWd83Z9GlM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=YZWd83Z9GlM"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "yjJcnqZqciU", "title": "  לבחור נכון", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/yjJcnqZqciU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=yjJcnqZqciU"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "wwoCnwVG4Ko", "title": "  כל יום כמו נס", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/wwoCnwVG4Ko/hqdefault.jpg", "url": "//www.youtube.com/embed?v=wwoCnwVG4Ko"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "sCJh9YcrL3k", "title": " ושולי רנד  בין קודש לחול", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/sCJh9YcrL3k/hqdefault.jpg", "url": "//www.youtube.com/embed?v=sCJh9YcrL3k"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "PHlXpUPl7g", "title": "  אבא", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/PHlXpUPl7g/hqdefault.jpg", "url": "//www.youtube.com/embed?v=PHlXpUPl7g"
          ,

        },],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "The end",
        "imgUrl": "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
        "tags": [
          "home",
          "Funk",
          "Happy"
        ],
        "songs": [{
          "addedAt": getRandomTimeStamp(), "id": "jeU9Sbq0D0A", "title": "  אור גדול  Amir Dadon  Or Gadol", "channelTitle": "Helicon Music  הליקון", "imgUrl": "//i.ytimg.com/vi/jeU9Sbq0D0A/hqdefault.jpg", "url": "//www.youtube.com/embed?v=jeU9Sbq0D0A"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "EAecWGT_lQ0", "title": "  יש אין סוף", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/EAecWGT_lQ0/hqdefault.jpg", "url": "//www.youtube.com/embed?v=EAecWGT_lQ0"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "45T15SXoxrM", "title": "  הרוח הטובה", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/45T15SXoxrM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=45T15SXoxrM"
          ,

        },
        {
          "addedAt": getRandomTimeStamp(), "id": "lainV5py0Rw", "title": "  בואי נדבר בינינו", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/lainV5py0Rw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=lainV5py0Rw"
          ,

        }],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Rock",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674723861/Rock_anpilw.png",
        "tags": [
          "Search",
          "Funk",
          "Happy"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Hip-Hop",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674723861/Hip-Hop_o8kiea.png",
        "tags": [
          "Search",
          "Funk",
          "Happy"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Pop",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674723861/Pop_vwx3vt.png",
        "tags": [
          "Search",
          "Funk",
          "Happy"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Latin",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674723860/Latin_ng4wub.png",
        "tags": [
          "Search",
          "Funk",
          "Happy"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "New releases",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674723861/New_releases_vhuzn0.png",
        "tags": [
          "Search",
          "Funk",
          "Happy"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Charts",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674723847/Charts_kww67d.png",
        "tags": [
          "Search",
          "Funk",
          "Happy"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Podcasts",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674723847/Podcasts_nso0th.png",
        "tags": [
          "Search",
          "Funk",
          "Happy"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Made For You",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674723847/Made_For_You_i1fiyc.png",
        "tags": [
          "Search",
          "Funk",
          "Happy"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Miley Cyrus",
        "description": "Artist",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809164/miley_nelcj0.jpg",
        "tags": [
          "Pop",
          "artist",
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Ariana Grande",
        "description": "artist",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809164/ariana_ndk1cd.jpg",
        "tags": [
          "Pop",
          "artist"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Katy Perry",
        "description": "artist",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809164/katy_b4kvfa.jpg",
        "tags": [
          "Pop",
          "artist",
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Bruno Mars",
        "description": "artist",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809164/bruno_odwpil.jpg",
        "tags": [
          "Pop",
          "artist",
          "Chill",
          "More of what you like",
          "Recently played"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Sam Smith",
        "description": "artist",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809164/sam_zpeyoi.jpg",
        "tags": [
          "Pop",
          "artist",
          "More of what you like"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Justin Bieber",
        "description": "artist",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809163/justin_gmmn9y.jpg",
        "tags": [
          "Pop",
          "artist"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Harry's House",
        "description": "Harry Styles",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809163/Harrys-House_iqpbg6.webp",
        "tags": [
          "Pop",
          "new releases",
          "Made For you",
          "Chill",
          "More of what you like"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": " האחיות כרקוקלי ",
        "description": "מוזיקה ישראלית עכשווית",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674811971/caracuc_otrt4w.jpg",
        "tags": [
          "Pop",
          "new releases"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Flowers",
        "description": "Single",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809163/flowers_sh8ylp.png",
        "tags": [
          "Pop",
          "new releases",
          "More of what you like"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "פנתרה",
        "description": "החדש של נועה קירל",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674809653/noa_kyd3rq.jpg",
        "tags": [
          "Pop",
          "new releases"
        ],
        "songs": [],

        "createdBy":
        {
          "_id": "spt100",
          "username": 'Playlist',
        }
      },
      {

        "name": "Hila's mix",
        "description": "The best Songs",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674905704/demo_3_h9qnz9.jpg",
        "tags": [
          "Pop",
          "new releases"
        ],
        "songs": [
          {
            "addedAt": getRandomTimeStamp(), "id": "jeU9Sbq0D0A", "title": "  אור גדול  Amir Dadon  Or Gadol", "channelTitle": "Helicon Music  הליקון", "imgUrl": "//i.ytimg.com/vi/jeU9Sbq0D0A/hqdefault.jpg", "url": "//www.youtube.com/embed?v=jeU9Sbq0D0A"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "vK_LTSeQYdI", "title": "פילהרמונית של טירוף", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/vK_LTSeQYdI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=vK_LTSeQYdI"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "f5omY8jVrSM", "title": "BAD BUNNY x ROSALÍA  LA NOCHE DE ANOCHE ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/f5omY8jVrSM/hqdefault.jpg", "url": "//www.youtube.com/embed?v=f5omY8jVrSM"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "YykjpeuMNEk", "title": " Hymn For The Weekend ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/YykjpeuMNEk/hqdefault.jpg", "url": "//www.youtube.com/embed?v=YykjpeuMNEk"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "kLpH1nSLJSs", "title": "BAD BUNNY  AMORFODA ", "channelTitle": "Bad Bunny", "imgUrl": "//i.ytimg.com/vi/kLpH1nSLJSs/hqdefault.jpg", "url": "//www.youtube.com/embed?v=kLpH1nSLJSs"
            ,

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "ckObp0fTNmU", "title": "לבד על המיטה", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/ckObp0fTNmU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ckObp0fTNmU"
            ,

          },
          {
            "id": "QYh6mYIJG2Y", "title": "7 rings ", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/QYh6mYIJG2Y/hqdefault.jpg", "url": "//www.youtube.com/embed?v=QYh6mYIJG2Y",
            "addedAt": getRandomTimeStamp()
          },
          {
            "addedAt": getRandomTimeStamp(), "id": "eDfcyn5jLII", "title": "היי בייב", "channelTitle": "Tuna Official", "imgUrl": "//i.ytimg.com/vi/eDfcyn5jLII/hqdefault.jpg", "url": "//www.youtube.com/embed?v=eDfcyn5jLII"
          },
          {
            "addedAt": getRandomTimeStamp(), "id": "VPRjCeoBqrI", "title": " A Sky Full Of Stars ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/VPRjCeoBqrI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=VPRjCeoBqrI"

          },

          {
            "addedAt": getRandomTimeStamp(), "id": "tlkKybWF11c", "title": "חורף באוטו ", "channelTitle": "עומר אדם", "imgUrl": "//i.ytimg.com/vi/tlkKybWF11c/hqdefault.jpg", "url": "//www.youtube.com/embed?v=tlkKybWF11c"

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "n66HAsqwibg", "title": "A Sky Full Of Stars  Coldplay | Lyrics/Vietsub", "channelTitle": "Radio Cảm Xúc", "imgUrl": "//i.ytimg.com/vi/n66HAsqwibg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=n66HAsqwibg"

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "dGy04XN9Spw", "title": "כנפיים ", "channelTitle": "CocaColaIsrael", "imgUrl": "//i.ytimg.com/vi/dGy04XN9Spw/hqdefault.jpg", "url": "//www.youtube.com/embed?v=dGy04XN9Spw"

          },
          {
            "id": "tcYodQoapMg", "title": "positions", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg", "url": "//www.youtube.com/embed?v=tcYodQoapMg",
            "addedAt": getRandomTimeStamp()
          },
          {
            "id": "h2jvHynuMjI", "title": "Stuck with U", "channelTitle": "JustinBieber", "imgUrl": "//i.ytimg.com/vi/h2jvHynuMjI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=h2jvHynuMjI",
            "addedAt": getRandomTimeStamp()
          },
          {
            "addedAt": getRandomTimeStamp(), "id": "ffxKSjUwKdU", "title": "no tears left to cry ", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/ffxKSjUwKdU/hqdefault.jpg", "url": "//www.youtube.com/embed?v=ffxKSjUwKdU"

          },
          {
            "addedAt": getRandomTimeStamp(), "id": "EAecWGT_lQ0", "title": "  יש אין סוף", "channelTitle": "Amir Dadon  ", "imgUrl": "//i.ytimg.com/vi/EAecWGT_lQ0/hqdefault.jpg", "url": "//www.youtube.com/embed?v=EAecWGT_lQ0"

          },
          {
            "id": "SXiSVQZLje8", "title": "Side To Side", "channelTitle": "ArianaGrandeVevo", "imgUrl": "//i.ytimg.com/vi/SXiSVQZLje8/hqdefault.jpg", "url": "//www.youtube.com/embed?v=SXiSVQZLje8",
            "addedAt": getRandomTimeStamp()
          },
          {
            "addedAt": getRandomTimeStamp(), "id": "QtXby3twMmI", "title": " Adventure Of A Lifetime ", "channelTitle": "Coldplay", "imgUrl": "//i.ytimg.com/vi/QtXby3twMmI/hqdefault.jpg", "url": "//www.youtube.com/embed?v=QtXby3twMmI"

          }
        ],
        "createdBy":
        {
          // _id: '63d54c3c3678fbff42c32f39', //mongo-local
          "_id": '63d590b865061996211bbaaf', // mongo-atlas
          "fullname": 'Hila Shor',
          "username": 'hila.shor'
        }
      },
      {

        "name": "שירים רגועים",
        "description": "לבקרים ושבתות",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674905705/demo_3_i1onhd.png",
        "tags": [
          "Pop",
          "new releases"
        ],
        "songs": [],
        "createdBy":
        {
          // _id: '63d54c3c3678fbff42c32f39',//mongo-local
          "_id": '63d590b865061996211bbaaf', // mongo-atlas
          "fullname": 'Hila Shor',
          "username": 'hila.shor'
        }
      },
      {

        "name": "For car rides",
        "description": "לבקרים ושבתות",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674905706/cover_dq1nmv.png",
        "tags": [
          "Pop",
          "new releases"
        ],
        "songs": [],
        "createdBy":
        {
          // _id: '63d54c3c3678fbff42c32f39', //mongo-local
          "_id": '63d590b865061996211bbaaf', // mongo-atlas
          "fullname": 'Hila Shor',
          "username": 'hila.shor'
        }
      },
      {

        "name": "My favorite",
        "description": "The best songs",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674905708/demo_4_fxxytc.jpg",
        "tags": [
          "Pop",
          "new releases"
        ],
        "songs": [],
        "createdBy":
        {
          // _id: '63d54c3c3678fbff42c32f37', //mongo-local
          "_id": '63d58ff365061996211b25af', // mongo-atlas
          "fullname": 'Inbal Avidov',
          "username": 'inbal.avidov'
        }
      },
      {

        "name": "Techno",
        "description": "",
        "imgUrl": "https://res.cloudinary.com/damrhms1q/image/upload/v1674906764/cover_lul49y.jpg",
        "tags": [
          "Pop",
          "new releases"
        ],
        "songs": [],
        "createdBy":
        {
          // _id: '63d54c3c3678fbff42c32f37',
          "_id": '63d58ff365061996211b25af',
          "fullname": 'Inbal Avidov',
          "username": 'inbal.avidov'
        }
      }

    ])

  } catch (err) {
    console.log('unexpected error', err.stack);
  }

}

(async () => {
  const txt = await seedDB()
  process.exit()
})();

