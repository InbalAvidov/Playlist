import { useEffect, useState } from "react"

import defaultPhoto from '../assets/img/header.png'

export function EditModal({ station, onUploadImg, closeEditor , imgUrl }) {
    const [stationName, setStationName] = useState(null)
    const [stationDescription, setStationDescription] = useState(null)

    useEffect(() => {
        setStationDescription(station.descripition || '')
        setStationName(station.name || '')
    }, [station._id])

    function onCloseEditor(ev, isCancel) {
        ev.stopPropagation()
        if (!isCancel) {
            station.imgUrl = imgUrl
            station.name = stationName
            station.description = stationDescription
        }
        closeEditor()
    }

    function onChangeName({ target }) {
        const { value } = target
        setStationName(value)
    }

    function onChangeDescription({ target }) {
        const { value } = target
        setStationDescription(value)
    }

    

    return (
        <div className='modal-editor'>
            <div className='header'>
                <h1>Edit details</h1>
                <button onClick={(event) => onCloseEditor(event, true)}  >
                    <svg fill='white' role='img' height='18' width='18' aria-hidden='true' className='x-icon Svg-sc-ytk21e-0 uPxdw mOLTJ2mxkzHJj6Y9_na_' viewBox='0 0 24 24' data-encore-id='icon'><path d='M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z'></path></svg>
                </button>
            </div>
            <div className='edit-container'>
                <div className='input-img-container'>
                    <img src={imgUrl ? imgUrl : defaultPhoto} />
                    <input type='file' onChange={onUploadImg} />
                </div>
                <div className='text-input'>
                    <input
                        type='text'
                        name='name'
                        className='input-title'
                        placeholder='playlist name'
                        value={stationName}
                        onChange={onChangeName}
                    />
                    <textarea
                        name='description'
                        className='input-desc'
                        placeholder='Add an optinal description'
                        value={stationDescription}
                        onChange={onChangeDescription}
                    />
                </div>
            </div>
            <div className='save-btn-area'>
                <button className='save-btn' onClick={onCloseEditor}>Save</button>
            </div>
        </div>
    )
}