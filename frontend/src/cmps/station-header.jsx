import { useState } from 'react'
import { useSelector } from 'react-redux'

import Swal from 'sweetalert2'

import { setSong, togglePlay } from '../store/player.action'
import { loadCurrStation } from '../store/station.actions'
import { loadUsers, updateLikeStation } from '../store/user.action'
import defaultPhoto from '../assets/img/header.png'
import upload from '../assets/img/upload.png'
import { useEffect } from 'react'
import { showErrorMsg, showSuccessMsg } from '../service/event-bus.service'
import { ShareModal } from './share-modal'
import { EditModal } from './edit-modal'

export function StationHeader({ station, onSelectImg, saveChanges, deleteStation, isLikedSongsPage }) {
    const user = useSelector((storeState => storeState.userModule.user))
    const users = useSelector((storeState => storeState.userModule.users))
    const color = useSelector((storeState => storeState.stationModule.color))
    const currStation = useSelector(storeState => storeState.stationModule.currStation)
    const isPlaying = useSelector(storeState => storeState.playerModule.isPlaying)
    const [isEdit, setIsEdit] = useState(false)
    const [imgUrl, setImgUrl] = useState(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isShareModal, setIsShareModal] = useState(false)

    useEffect(() => {
        loadUsers()
    }, [])

    useEffect(() => {
        setImgUrl(station.imgUrl || defaultPhoto)
    }, [station._id])


    async function onUploadImg(ev) {
        try {
            const imgUrl = await onSelectImg(ev)
            setImgUrl(imgUrl)
        } catch (err) {
            console.log('err:', err)
        }
    }

    function onOpenEditor(ev) {
        ev.stopPropagation()
        if (isLikedSongsPage) return
        setIsEdit(true)
        setIsMenuOpen(false)
    }

    function closeEditor() {
        setIsEdit(false)
        setIsShareModal(false)
        saveChanges()
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
            text: 'You won\'t be able to revert this!',
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
        const { id, imgUrl, title, channelTitle, addedAt } = firstSong
        const songToStore =
        {
            id,
            imgUrl,
            title,
            channelTitle,
            addedAt
        }
        setSong(songToStore)
        loadCurrStation(station._id)
    }

    async function toggleLike(ev) {
        ev.stopPropagation()
        try {
            await updateLikeStation(station)
            if (user?.likedStations.find(({ _id }) => _id === station._id)) {
                showSuccessMsg(`${station.name} wad removed from your library`)
            } else {
                showSuccessMsg(`${station.name} wad added to your library`)
            }
        } catch (err) {
            showErrorMsg('Had problem with Like station')
        }
    }

    function onPauseStation(ev) {
        ev.stopPropagation()
        togglePlay(!isPlaying)

    }

    function onShareStation(ev) {
        ev.stopPropagation()
        setIsShareModal(true)
    }

    async function onCloseShare(share) {
        setIsShareModal(false)
        const selectedUser = users.find(user => user.fullname === share)
        const userId = selectedUser._id
        station.shareWith = [userId]
        station.shareBy = [userId]
        try {
            await saveChanges()
            showSuccessMsg(`The playlist is now shared with ${selectedUser.fullname} `)
        } catch (err) {
            showErrorMsg('Had problem with share station')
        }
    }
    return (
        <section className='station-header' onClick={onOpenEditor}>
            <div className='clr-container' style={{ backgroundColor: `${isLikedSongsPage ? 'rgb(80, 56, 160)' : color}` }}>
                <div className={`station-details ${isLikedSongsPage ? 'liked-songs-station' : ''}`}>
                    {station.imgUrl ?
                        <div className='img-container' onClick={onOpenEditor}
                            style={{
                                backgroundImage: `url('${station.imgUrl}')`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                width: '230px', height: '230px',
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                            }}>
                        </div>
                        :
                        station.songs.length > 0
                            ?
                            <div class='song-img' style={{
                                width: '230px',
                                height: '230px',
                                overflow: 'hidden',
                            }}>
                                <img src={station.songs[0].imgUrl} style={{ width: '390px', height: '390px', marginTop: '-80px', marginLeft: '-100px' }} />
                            </div>
                            :
                            <div
                                onClick={onOpenEditor} className='upload-img-container'
                                onMouseMove={() => setImgUrl(upload)}
                                onMouseLeave={() => setImgUrl(defaultPhoto)}
                            >
                                <img src={imgUrl} />
                            </div>
                    }
                    <div className='info-container'>
                        <p className='station'>playlist</p>
                        <h1>{station.name}</h1>
                        {station.description && <h3>{station.description}</h3>}
                        <p><span>{station.createdBy ? station.createdBy.username : user.username} </span>
                            • {station.songs.length + ' '}
                            songs</p>
                    </div>
                </div>
            </div>

            <div className='station-options' style={{ backgroundColor: `${isLikedSongsPage ? 'rgb(80, 56, 160)' : color}` }} >
                <div className={`clr-container-gradient`}></div>
                {station?._id === currStation?._id && isPlaying
                    ?
                    <button className='green-play-pause-btn pause' onClick={(event) => onPauseStation(event)}>
                        <svg role='img' height='24' width='24' aria-hidden='true' viewBox='0 0 24 24' data-encore-id='icon' class='Svg-sc-ytk21e-0 uPxdw'><path d='M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z'></path></svg>
                    </button>
                    :
                    <button className='green-play-pause-btn' onClick={(event) => onPlayStation(event, station)}>
                        <svg role='img' height='24' width='24' aria-hidden='true' viewBox='0 0 24 24' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z'></path></svg>
                    </button>
                }
                {
                    station.createdBy._id !== user?._id &&
                    <div>
                        {user?.likedStations.find(({ _id }) => _id === station._id) &&
                            !isLikedSongsPage
                            ?
                            <svg onClick={(event) => toggleLike(event)} fill='#1ed760' role='img' height='32' width='32' aria-hidden='true' viewBox='0 0 24 24' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M8.667 1.912a6.257 6.257 0 00-7.462 7.677c.24.906.683 1.747 1.295 2.457l7.955 9.482a2.015 2.015 0 003.09 0l7.956-9.482a6.188 6.188 0 001.382-5.234l-.49.097.49-.099a6.303 6.303 0 00-5.162-4.98h-.002a6.24 6.24 0 00-5.295 1.65.623.623 0 01-.848 0 6.257 6.257 0 00-2.91-1.568z'></path></svg>
                            :
                            <svg onClick={(event) => toggleLike(event)} fill='white' opacity={'0.5'} role='img' height='32' width='32' aria-hidden='true' viewBox='0 0 24 24' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z'></path></svg>}
                    </div>
                }
                {station.createdBy.username !== 'Playlist' &&
                    <div className='share' onClick={(event) => onShareStation(event)}>
                        <span>+</span>
                        <svg fill='white' opacity={'0.5'} role='img' height='26' width='26' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' ><path d='M6.233.371a4.388 4.388 0 015.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 00.201 1.13l2.209 1.275a4.75 4.75 0 012.375 4.114V16H.382v-1.143a4.75 4.75 0 012.375-4.113l2.209-1.275a.75.75 0 00.201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 01.904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 00-2.13.937 2.85 2.85 0 00-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 01-.603 3.39l-2.209 1.275A3.25 3.25 0 001.902 14.5h12.196a3.25 3.25 0 00-1.605-2.457l-2.209-1.275a2.25 2.25 0 01-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 00-.588-1.022A2.888 2.888 0 008 1.5z'></path></svg>
                    </div>}
                {!isLikedSongsPage &&
                    <div className='station-menu-btn'>
                        <svg fill='white' opacity={'0.5'} onClick={onToggleMenu} role='img' height='32' width='32' aria-hidden='true' viewBox='0 0 24 24' data-encore-id='icon' className='Svg-sc-ytk21e-0 uPxdw'><path d='M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path></svg>
                        <div className={isMenuOpen ? 'station-menu' : 'station-menu close'}>
                            <p onClick={onDeleteStation}>Delete</p>
                            <p onClick={onOpenEditor}>Edit</p>
                        </div>
                    </div>
                }

            </div>
            {isShareModal &&
                <ShareModal
                    setIsShareModal={setIsShareModal} users={users} user={user} onCloseShare={onCloseShare}
                />
            }
            {
                isEdit && <EditModal closeEditor={closeEditor} imgUrl={imgUrl} onUploadImg={onUploadImg} station={station} />
            }
            {
                isEdit &&
                <main onClick={closeEditor} className='app-modal-editor'></main>
            }
            {
                isShareModal &&
                <main onClick={closeEditor} className='app-modal-editor'></main>
            }
        </section>
    )
}