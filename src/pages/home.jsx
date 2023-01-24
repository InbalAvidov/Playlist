import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useState } from "react"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"
import { login } from '../store/user.action.js'


import { loadStations } from "../store/station.actions"
import { Loader } from "../cmps/loader"
import { FirstSectionStations } from "../cmps/first-section-stations"
import { RestSectionStations } from "../cmps/rest-section-stations"
import { utilService } from "../service/util.service"
import { FastAverageColor } from "fast-average-color"

export function Home() {
    const stations = useSelector((storeState) => storeState.stationModule.stations)
    const player = useSelector(storeState => storeState.playerModule.player)
    // const [colorByImg, setColorByImg] = useState('#ffffff')
    // const user = useSelector((storeState => storeState.userModule.user))
    // const navigate = useNavigate()


    // useEffect(() => {
    //     if (!user) {
    //         Swal.fire({
    //             title: 'You need to Login to add a playlist',
    //             text: "You can also continue as a guest for now",
    //             showDenyButton: true,
    //             showCancelButton: true,
    //             confirmButtonText: 'Login',
    //             denyButtonText: `Continue as guest`,
    //             background: '#ffffff',
    //             color: '#000000',
    //             confirmButtonColor: '#1ed760',
    //             denyButtonColor: '#1ed760',
    //         }).then((result) => {
    //             if (result.isConfirmed) {
    //                 navigate('/login-signup/loginState')
    //             } else if (result.isDenied) {
    //                 login({
    //                     _id: utilService.makeId(),
    //                     username: 'guest',
    //                     imgUrl: "https://robohash.org/set=set3"
    //                 })
    //             }
    //         })
    //     }
    // }, [])

    useEffect(() => {
        loadStations({ page: 'home' })
    }, [])

    // async function setImgEl(url) {
    //     if (!url) return
    //     const fac = new FastAverageColor()
    //     try {
    //         const color = await fac.getColorAsync(url)
    //         setColorByImg(color.rgba)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }


    if (!stations) return <Loader />
    return (<main className="main-home">
        {stations && <div className="home-stations">
            <FirstSectionStations stations={stations.slice(0, 6)} />
            <h2>Made For You</h2>
            <RestSectionStations stations={stations.slice(6, 10)} />
            <h2>Chill</h2>
            <RestSectionStations stations={stations.slice(10, 14)} />
            <h2>Recently played</h2>
            <RestSectionStations stations={stations.slice(14, 18)} />
            <h2>More of what you like</h2>
            <RestSectionStations stations={stations.slice(18, 22)} />
        </div>
        }
    </main >
    )
}