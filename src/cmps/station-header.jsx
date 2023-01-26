import { useState } from "react"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"

import Swal from 'sweetalert2'
import { setSong } from "../store/player.action"
import { loadCurrStation, setColor } from "../store/station.actions"
import { updateLikeStation } from '../store/user.action'
import { useEffect } from "react"
import { utilService } from "../service/util.service"


export function StationHeader({ station, onSelectImg, handleChange, saveChanges, deleteStation, isLikedSongsPage }) {
    const user = useSelector((storeState => storeState.userModule.user))
    const color = useSelector((storeState => storeState.stationModule.color))
    const [imgUrl, setImgUrl] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [stationName, setStationName] = useState("")
    const [stationDescription, setStationDescription] = useState("")

    function onOpenEditor(ev) {
        ev.stopPropagation()
        if (station.tags.includes('home') || isLikedSongsPage) return
        setIsEdit(true)
        setIsMenuOpen(false)
    }

    function onCloseEditor(ev) {
        ev.stopPropagation()
        setIsEdit(false)
        saveChanges()
    }

    function onChangeName({ target }) {
        const { value, name: field } = target
        setStationName(value)
        handleChange(field, value)
    }

    function onChangeDescription({ target }) {
        const { value, name: field } = target
        setStationDescription(value)
        handleChange(field, value)
    }

    async function onUploadImg(ev) {
        const imgUrl = await onSelectImg(ev)
        const clr = await utilService.getMainColor(imgUrl)
        setColor(clr)
        handleChange("imgUrl", imgUrl)
        setImgUrl(imgUrl)
    }

    function onToggleMenu(ev) {
        ev.stopPropagation()
        setIsMenuOpen(!isMenuOpen)
    }

    function onDeleteStation(ev) {
        ev.stopPropagation()
        setIsMenuOpen(false)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            background: '#ffffff',
            color: '#000000',
            confirmButtonColor: '#1ed760',
            cancelButtonColor: '#000000',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteStation(station._id)
            }
        })
    }

    function onPlayStation(ev, station) {
        ev.stopPropagation()
        const firstSong = station.songs[0]
        const songToStore =
        {
            id: firstSong.id,
            imgUrl: firstSong.imgUrl,
            title: firstSong.title,
            artist: firstSong.channelTitle,
            addedAt : firstSong.addedAt
        }
        setSong(songToStore)
        loadCurrStation(station._id)
    }

    async function toggleLike() {
        await updateLikeStation(station)
    }
    return (
        <section className="station-header" onClick={onOpenEditor}>
            <div className='clr-container' style={{ backgroundColor: `${isLikedSongsPage ? 'rgb(80, 56, 160)' : color}` }}>
                <div className={`station-details ${isLikedSongsPage ? 'liked-songs-station' : ''}`}>
                    {station.imgUrl || station.songs.length > 0 ?
                        <div className="img-container" onClick={onOpenEditor}
                            style={{
                                backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs[0].imgUrl}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                width: "230px", height: "230px"
                            }}>
                        </div>
                        :
                        <div onClick={onOpenEditor} className="upload-img-container">
                            <FontAwesomeIcon icon={faImage} />
                            <span>Upload Image</span>
                        </div>
                    }
                    <div className="info-container">
                        <p className="station">playlist</p>
                        <h1>{station.name ? station.name : "My Playlist"}</h1>
                        {station.description && <h3>{station.description}</h3>}
                        <p><span>{station.createdBy ? station.createdBy.username : user.username} </span>
                            • {station.songs.length + ' '}
                            songs</p>
                    </div>
                </div>
            </div>

            <div className="station-options" style={{ backgroundColor: `${isLikedSongsPage ? 'rgb(80, 56, 160)' : color}` }} >
                <div className={`clr-container-gradient`}></div>
                <button className='green-play-pause-btn' onClick={(event) => onPlayStation(event, station)}>
                    <svg role="img" height="28" width="28" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="play-pause Svg-sc-ytk21e-0 uPxdw"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                </button>
                {
                    user.likedStations.find(({ _id }) => _id === station._id) && !isLikedSongsPage
                        ?
                        <svg onClick={toggleLike} fill="#1ed760" role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M8.667 1.912a6.257 6.257 0 00-7.462 7.677c.24.906.683 1.747 1.295 2.457l7.955 9.482a2.015 2.015 0 003.09 0l7.956-9.482a6.188 6.188 0 001.382-5.234l-.49.097.49-.099a6.303 6.303 0 00-5.162-4.98h-.002a6.24 6.24 0 00-5.295 1.65.623.623 0 01-.848 0 6.257 6.257 0 00-2.91-1.568z"></path></svg>
                        :
                        <svg onClick={toggleLike} fill="white" opacity={'0.5'} role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z"></path></svg>
                }
                {!isLikedSongsPage &&
                    <div className="station-menu-btn">
                        <svg fill="white" opacity={'0.5'} onClick={onToggleMenu} role="img" height="32" width="32" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" className="Svg-sc-ytk21e-0 uPxdw"><path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                        <div className={isMenuOpen ? "station-menu" : "station-menu close"}>
                            <p onClick={onDeleteStation}>Delete</p>
                            <p onClick={onOpenEditor}>Edit</p>
                        </div>
                    </div>
                }
            </div>

            {isEdit && <div className="modal-editor">
                <h1>Edit details</h1>
                <div className="edit-container">
                    <div className="input-img-container">
                        <FontAwesomeIcon icon={faImage} />
                        <span>Upload Image</span>
                        <input type="file" onChange={onUploadImg} />
                    </div>
                    <div className="title-desc">
                        <input
                            type="text"
                            name="name"
                            className="input-title"
                            placeholder="playlist name"
                            value={station.name ? station.name : stationName}
                            onChange={onChangeName}
                        />
                        <textarea
                            name="description"
                            className="input-desc"
                            placeholder="Add an optinal description"
                            value={station.description ? station.description : stationDescription}
                            onChange={onChangeDescription}
                        />
                        <button className="modal-done-btn" onClick={onCloseEditor}>Done</button>
                    </div>
                </div>
            </div>
            }
            {isEdit &&
                <main onClick={onCloseEditor} className="app-modal-editor" />
            }
        </section>
    )
}