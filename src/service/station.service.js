import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const STATION_KEY = 'stationDB'
_createCars()

export const stationService = {
    query,
    get,
    remove,
    save
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

function _createCars() {
    let stations = utilService.loadFromStorage(STATION_KEY)
    if (!stations || !stations.length) {
        stations = [
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
                        "id": "s1001",
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
                        "id": "s1001",
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
            }
        ]
        utilService.saveToStorage(STATION_KEY, stations)
    }
}
