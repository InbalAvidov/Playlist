import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useSelector } from "react-redux"
import { confirmAlert } from 'react-confirm-alert';
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
        setIsEdit(true)
        setIsMenuOpen(false)
    }
    function onCloseEditor(ev) {
        ev.stopPropagation()
        setIsEdit(false)
        if (station._id) saveChanges()
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

    // async function onUploadImg(ev) {
    //     const imgUrl = await onSelectImg(ev)
    //     handleChange("imgUrl", imgUrl)
    //     setImgUrl(imgUrl)
    // }

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
            background: '#222222',
            color: '#ffffff',
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
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        width: "200px", height: "200px"
                    }}>
                </div>
                :
                <div onClick={onOpenEditor} className="upload-img-container">
                    <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                    <span>Upload Image</span>
                </div>
            }
            <div className="info-container">
                <p className="station">playlist</p>
                <h1>{station.name ? station.name : "My Playlist"}</h1>
                {station.description && <h3>{station.description}</h3>}
                <p>{station.createdBy.fullname ? station.createdBy.fullname : user.fullname}</p>
            </div>
            {!station._id && <button className="done-btn" onClick={onDone}>Done</button>}
            {user._id === station.createdBy._id && station._id &&
                <div className="station-menu-container">
                    <button className="station-menu-btn" onClick={onToggleMenu}> •••</button>
                    <div className={isMenuOpen ? "station-menu" : "station-menu close"}>
                        <p onClick={onDeleteStation}>Delete</p>
                        <p onClick={onOpenEditor}>Edit</p>
                    </div>
                </div>}

            {isEdit &&
                <div className="modal-editor">
                    <h1>Edit details</h1>
                    <div className="edit-container">
                        <div className="input-img-container">
                            <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
                            <span>Upload Image</span>
                            <input type="file" hidden />
                        </div>
                        <div className="title-desc">
                            <input className="input-title" type="text" placeholder="playlist name" onChange={onChangeName} value={station.name ? station.name : stationName} name="name" />
                            <textarea className="input-desc" placeholder="Add an optinal description" value={station.description ? station.description : stationDescription} onChange={onChangeDescription} name="description">
                            </textarea>
                            <button className="modal-done-btn" onClick={onCloseEditor}>Done</button>
                        </div>
                    </div>
                </div>
            }
            {isEdit &&
                <main onClick={onCloseEditor} className="app-modal-editor">
                </main>
            }
        </section>
    )
}