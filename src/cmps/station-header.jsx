import { useState } from "react"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"

import Swal from 'sweetalert2'


export function StationHeader({ station, onSelectImg, handleChange, onSaveStation, saveChanges, deleteStation }) {
    const user = useSelector((storeState => storeState.userModule.user))
    const [imgUrl, setImgUrl] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [stationName, setStationName] = useState("")
    const [stationDescription, setStationDescription] = useState("")

    function onOpenEditor(ev) {
        ev.stopPropagation()
        if (station.tags.includes('home')) return
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
        console.log('StationHeader.onUploadImg', imgUrl)
        handleChange("imgUrl", imgUrl)
        setImgUrl(imgUrl)
    }

    function onDone(ev) {
        ev.stopPropagation()
        onSaveStation()
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

    return (
        <section className="station-header" onClick={onOpenEditor}>
            {station.imgUrl || station.songs.length > 0 ?
                <div className="img-container" onClick={onOpenEditor}
                    style={{
                        backgroundImage: `url("${station.imgUrl ? station.imgUrl : station.songs[0].imgUrl}")`,
                        // url
                        // : 
                        // "http://res.cloudinary.com/damrhms1q/image/upload/v1674456887/liked-songs_uco4xm.png"
                      
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
                <p><span>{station.createdBy ? station.createdBy.fullname : user.fullname} </span>
                 • {station.songs.length + ' '} 
                 songs</p>
            </div>
            {user && user._id === station.createdBy?._id && station._id &&
                <div className="station-menu-container">
                    <button className="station-menu-btn" onClick={onToggleMenu}> •••</button>
                    <div className={isMenuOpen ? "station-menu" : "station-menu close"}>
                        <p onClick={onDeleteStation}>Delete</p>
                        <p onClick={onOpenEditor}>Edit</p>
                    </div>
                </div>}

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
            {!station._id && <button className="done-btn" onClick={onDone}>Done</button>}

        </section>
    )
}