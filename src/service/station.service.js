import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STATION_KEY = 'stationDB'
const stationJson = [
  {
    "_id": "5cksxjas89xjsa8xjsa8jxs09",
    "name": "Funky",
    "imgUrl" :"http://res.cloudinary.com/damrhms1q/image/upload/v1674073376/beach_pgibpw.jpg",
    "tags": [
      "Funk",
      "Happy"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [
      {
        " _id": "5cksxjas89xjsa8xjsa8jld3",
        "fullname": "Inbal Avidov"
      },
      {
        " _id": "5cksxjas89xjsa8xjsa8jjj7",
        "fullname": "Omri Hazan"
      }
    ],
    "songs": [
      {
        "id": "mUkfiLjooxs",
        "title": "Talk is cheap",
        "url": "https://www.youtube.com/embed?v=aQZDyyIyQMA&list=RDaQZDyyIyQMA&start_radio=1",
        "imgUrl": "https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": 162521765262
      },
      {
        "id": "mUkfiLjooxs",
        "title": "Talk is cheap",
        "url": "https://www.youtube.com/embed?v=aQZDyyIyQMA&list=RDaQZDyyIyQMA&start_radio=1",
        "imgUrl": "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        }
      }
    ],
    "msgs": [
      {
        "id": "m101",
        "from": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "txt": "hello?"
      }
    ]
  },
  {
    "_id": "5cksxjas89xjsa8xjsa8jxs09",
    "name": "Funky",
    "tags": [
      "Funk",
      "Happy"
    ],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [
      {
        " _id": "5cksxjas89xjsa8xjsa8jld3",
        "fullname": "Inbal Avidov"
      },
      {
        " _id": "5cksxjas89xjsa8xjsa8jjj7",
        "fullname": "Omri Hazan"
      }
    ],
    "songs": [
      {
        "id": "mUkfiLjooxs",
        "title": "Talk is cheap",
        "url": "https://www.youtube.com/embed?v=aQZDyyIyQMA&list=RDaQZDyyIyQMA&start_radio=1",
        "imgUrl": "https://i.ytimg.com/vi/4_iC0MyIykM/mqdefault.jpg",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": 162521765262
      },
      {
        "id": "mUkfiLjooxs",
        "title": "Talk is cheap",
        "url": "https://www.youtube.com/embed?v=aQZDyyIyQMA&list=RDaQZDyyIyQMA&start_radio=1",
        "imgUrl": "https://i.ytimg.com/vi/mUkfiLjooxs/mqdefault.jpg",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        }
      }
    ],
    "msgs": [
      {
        "id": "m101",
        "from": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "txt": "hello?"
      }
    ]
  },
  {
    "_id": "Quel9sFIyZJSlVNGI9UQoYTnj",
    "name": "<3",
    "tags": [],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [
      {
        "id": "YQHsXMglC9A",
        "title": "Adele - Hello",
        "channelTitle": "AdeleVEVO",
        "imgUrl": "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=YQHsXMglC9A",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:34:31.847Z"
      }
    ],
    "msgs": []
  },
  {
    "_id": "Quel9sFIyZJSlVNGI9UQoYTnj",
    "name": "<3",
    "tags": [],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [
      {
        "id": "YQHsXMglC9A",
        "title": "Adele - Hello",
        "channelTitle": "AdeleVEVO",
        "imgUrl": "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=YQHsXMglC9A",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:34:31.847Z"
      }
    ],
    "msgs": []
  },
  {
    "_id": "Xbsr5hs2XgMfxp4NBR7VEd6k1",
    "name": "עומר אדם",
    "tags": [],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [
      {
        "id": "ifpiFzu4c54",
        "title": "עומר אדם - אני  (Prod by. Moshe &amp; Ofek)",
        "channelTitle": "עומר אדם - הערוץ הרשמי",
        "imgUrl": "https://i.ytimg.com/vi/ifpiFzu4c54/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=ifpiFzu4c54",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:10.928Z"
      },
      {
        "id": "PburljbL-fo",
        "title": "עומר אדם – תמיד שלך (Prod By. Tamar Yahalomy &amp; Yonatan Kalimi)",
        "channelTitle": "עומר אדם - הערוץ הרשמי",
        "imgUrl": "https://i.ytimg.com/vi/PburljbL-fo/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=PburljbL-fo",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:10.928Z"
      },
      {
        "id": "ckObp0fTNmU",
        "title": "עומר אדם - לבד על המיטה (Prod By Gil Vain &amp; Tal Castiel)",
        "channelTitle": "עומר אדם - הערוץ הרשמי",
        "imgUrl": "https://i.ytimg.com/vi/ckObp0fTNmU/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=ckObp0fTNmU",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:10.928Z"
      },
      {
        "id": "vK_LTSeQYdI",
        "title": "עומר אדם - פילהרמונית של טירוף",
        "channelTitle": "עומר אדם - הערוץ הרשמי",
        "imgUrl": "https://i.ytimg.com/vi/vK_LTSeQYdI/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=vK_LTSeQYdI",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:10.928Z"
      }
    ],
    "msgs": []
  },
  {
    "_id": "Xbsr5hs2XgMfxp4NBR7VEd6k1",
    "name": "עומר אדם",
    "tags": [],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [
      {
        "id": "ifpiFzu4c54",
        "title": "עומר אדם - אני  (Prod by. Moshe &amp; Ofek)",
        "channelTitle": "עומר אדם - הערוץ הרשמי",
        "imgUrl": "https://i.ytimg.com/vi/ifpiFzu4c54/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=ifpiFzu4c54",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:10.928Z"
      },
      {
        "id": "PburljbL-fo",
        "title": "עומר אדם – תמיד שלך (Prod By. Tamar Yahalomy &amp; Yonatan Kalimi)",
        "channelTitle": "עומר אדם - הערוץ הרשמי",
        "imgUrl": "https://i.ytimg.com/vi/PburljbL-fo/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=PburljbL-fo",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:10.928Z"
      },
      {
        "id": "ckObp0fTNmU",
        "title": "עומר אדם - לבד על המיטה (Prod By Gil Vain &amp; Tal Castiel)",
        "channelTitle": "עומר אדם - הערוץ הרשמי",
        "imgUrl": "https://i.ytimg.com/vi/ckObp0fTNmU/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=ckObp0fTNmU",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:10.928Z"
      },
      {
        "id": "vK_LTSeQYdI",
        "title": "עומר אדם - פילהרמונית של טירוף",
        "channelTitle": "עומר אדם - הערוץ הרשמי",
        "imgUrl": "https://i.ytimg.com/vi/vK_LTSeQYdI/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=vK_LTSeQYdI",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:10.928Z"
      }
    ],
    "msgs": []
  },
  {
    "_id": "yCA7I2QWvuCIVAoQy4lSdXrFH",
    "name": "שישי",
    "tags": [],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [
      {
        "id": "YTQKcYNG0y8",
        "title": "עדן מניווב - יום שישי (מארח את פרינס &amp; באלישג)",
        "channelTitle": "Eden Manaiov",
        "imgUrl": "https://i.ytimg.com/vi/YTQKcYNG0y8/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=YTQKcYNG0y8",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:41.431Z"
      },
      {
        "id": "CRlNR8mdXK0",
        "title": "אושר כהן - חמישי שישי (Prod. By Navi)",
        "channelTitle": "Osher Cohen Music",
        "imgUrl": "https://i.ytimg.com/vi/CRlNR8mdXK0/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=CRlNR8mdXK0",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:41.431Z"
      },
      {
        "id": "onGX_Q0okcQ",
        "title": "הדג נחש עם יצחק קלפטר - יום שישי (קליפ רשמי)",
        "channelTitle": "הדג נחש",
        "imgUrl": "https://i.ytimg.com/vi/onGX_Q0okcQ/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=onGX_Q0okcQ",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:41.431Z"
      },
      {
        "id": "05HUmYOjIPA",
        "title": "אייל גולן שישי בצהריים Eyal Golan",
        "channelTitle": "EyalGolanOfficial",
        "imgUrl": "https://i.ytimg.com/vi/05HUmYOjIPA/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=05HUmYOjIPA",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:41.431Z"
      }
    ],
    "msgs": []
  },
  {
    "_id": "yCA7I2QWvuCIVAoQy4lSdXrFH",
    "name": "שישי",
    "tags": [],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [
      {
        "id": "YTQKcYNG0y8",
        "title": "עדן מניווב - יום שישי (מארח את פרינס &amp; באלישג)",
        "channelTitle": "Eden Manaiov",
        "imgUrl": "https://i.ytimg.com/vi/YTQKcYNG0y8/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=YTQKcYNG0y8",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:41.431Z"
      },
      {
        "id": "CRlNR8mdXK0",
        "title": "אושר כהן - חמישי שישי (Prod. By Navi)",
        "channelTitle": "Osher Cohen Music",
        "imgUrl": "https://i.ytimg.com/vi/CRlNR8mdXK0/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=CRlNR8mdXK0",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:41.431Z"
      },
      {
        "id": "onGX_Q0okcQ",
        "title": "הדג נחש עם יצחק קלפטר - יום שישי (קליפ רשמי)",
        "channelTitle": "הדג נחש",
        "imgUrl": "https://i.ytimg.com/vi/onGX_Q0okcQ/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=onGX_Q0okcQ",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:41.431Z"
      },
      {
        "id": "05HUmYOjIPA",
        "title": "אייל גולן שישי בצהריים Eyal Golan",
        "channelTitle": "EyalGolanOfficial",
        "imgUrl": "https://i.ytimg.com/vi/05HUmYOjIPA/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=05HUmYOjIPA",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:50:41.431Z"
      }
    ],
    "msgs": []
  },
  {
    "_id": "77EdSbGktiJCqxXup4rMykXTi",
    "name": "omri",
    "tags": [],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [
      {
        "id": "ferZnZ0_rSM",
        "title": "Anderson .Paak &amp; The Free Nationals: NPR Music Tiny Desk Concert",
        "channelTitle": "NPR Music",
        "imgUrl": "https://i.ytimg.com/vi/ferZnZ0_rSM/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=ferZnZ0_rSM",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:51:33.319Z"
      },
      {
        "id": "-OqrcUvrbRY",
        "title": "Anderson .Paak - Come Down (Official Video)",
        "channelTitle": "Anderson Paak",
        "imgUrl": "https://i.ytimg.com/vi/-OqrcUvrbRY/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=-OqrcUvrbRY",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:51:33.319Z"
      },
      {
        "id": "LqM5Fa3iE90",
        "title": "Anderson .Paak feat. Rick Ross - CUT EM IN (Official Video)",
        "channelTitle": "Anderson Paak",
        "imgUrl": "https://i.ytimg.com/vi/LqM5Fa3iE90/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=LqM5Fa3iE90",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:51:33.319Z"
      },
      {
        "id": "O5mcLhuUfG0",
        "title": "Anderson .Paak - Heart Don&#39;t Stand a Chance",
        "channelTitle": "Anderson Paak",
        "imgUrl": "https://i.ytimg.com/vi/O5mcLhuUfG0/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=O5mcLhuUfG0",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:51:33.319Z"
      },
      {
        "id": "TgItkJCm09c",
        "title": "Anderson .Paak - Lockdown",
        "channelTitle": "Anderson Paak",
        "imgUrl": "https://i.ytimg.com/vi/TgItkJCm09c/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=TgItkJCm09c",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:51:33.319Z"
      }
    ],
    "msgs": []
  },
  {
    "_id": "nGrShJa3YqCRusjR8B4W8OOg8",
    "name": "morning",
    "tags": [],
    "createdBy": {
      "_id": "u101",
      "fullname": "Puki Ben David",
      "imgUrl": "https://robohash.org/set=set3"
    },
    "likedByUsers": [],
    "songs": [
      {
        "id": "RQtLvvRgxsw",
        "title": "Morning songs 🍂 Chill songs when you want to feel motivated and relaxed ~ Chill music playlist",
        "channelTitle": "Chill Vibes",
        "imgUrl": "https://i.ytimg.com/vi/RQtLvvRgxsw/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=RQtLvvRgxsw",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:52:17.600Z"
      },
      {
        "id": "SSuCyZlksrI",
        "title": "Morning Coffee ☕ Happy Music to Start Your Day - Relaxing Chillout House | The Good Life No.18",
        "channelTitle": "Sensual Musique",
        "imgUrl": "https://i.ytimg.com/vi/SSuCyZlksrI/hqdefault.jpg",
        "url": "https://www.youtube.com/embed?v=SSuCyZlksrI",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:52:17.600Z"
      },
      {
        "id": "ZmKAtQj9jqs",
        "title": "WEDNESDAY MORNING JAZZ: Cozy Jazz &amp; Bossa Nova January to Study, Work and Relax",
        "channelTitle": "Cafe Music BGM channel",
        "imgUrl": "https://i.ytimg.com/vi/ZmKAtQj9jqs/hqdefault_live.jpg",
        "url": "https://www.youtube.com/embed?v=ZmKAtQj9jqs",
        "addedBy": {
          "_id": "u101",
          "fullname": "Puki Ben David",
          "imgUrl": "https://robohash.org/set=set3"
        },
        "addedAt": "2023-01-18T17:52:17.600Z"
      }
    ],
    "msgs": []
  }
]
_createStations()

export const stationService = {
    query,
    get,
    remove,
    save,
    getEmptyStation
}

function query() {
    return storageService.query(STATION_KEY)
    // .then(stations => {
    //     if (filterBy.txt) {
    //         const regex = new RegExp(filterBy.txt, 'i')
    //         stations = stations.filter(station => regex.test(station.vendor))
    //     }
    //     if (filterBy.minSpeed) {
    //         stations = stations.filter(station => station.maxSpeed >= filterBy.minSpeed)
    //     }
    // return stations
}

function get(stationId) {
    return storageService.get(STATION_KEY, stationId)

}

function remove(stationId) {
    return storageService.remove(STATION_KEY, stationId)
}

function save(station) {
    if (station._id) {
        return storageService.put(STATION_KEY, station)
    } else {
        return storageService.post(STATION_KEY, station)
    }
}

function getEmptyStation(){
    return  {
        "_id": "",
        "name": "",
        "tags": [],
        "createdBy": { //loggedinUser
            "_id": "u101",
            "fullname": "Puki Ben David",
            "imgUrl": "https://robohash.org/set=set3"
        },
        "likedByUsers": [],
        "songs": [],
        "msgs": []
    }
}

function _createStations() {
    let stations = utilService.loadFromStorage(STATION_KEY)
    if (!stations || !stations.length) {
        stations = stationJson
        utilService.saveToStorage(STATION_KEY, stations)
    }
}

