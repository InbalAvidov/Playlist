import { useEffect, useRef } from 'react'
import { useState } from 'react'

import { YoutubeService } from '../service/youtube.service'
import { NavLink } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { utilService } from '../service/util.service'
import { setSong } from '../store/player.action'
import { Loader } from '../cmps/loader'
import { SongPreview } from '../cmps/song-preview'
import { loadStations } from '../store/station.actions'
import { useSelector } from 'react-redux'

export function SearchSongs({ onAddSong, isForStation, scroll }) {
    const stations = useSelector((storeState) => storeState.stationModule.stations)
    const [searchStations, setSearchStations] = useState(null)
    const [search, setSearch] = useState('')
    const [songsBySearch, setSongsBySearch] = useState(null)
    const searchSongs = useRef(utilService.debounce(getSearchReasults, 700))

    useEffect(() => {
        if (isForStation) return
        loadStations()
        loadSearchStations()
    }, [])

    useEffect(() => {
        if (!stations) return
        loadSearchStations()
    }, [stations])


    async function loadSearchStations() {
        const searchStations = stations.filter(station => station.tags.includes('Search'))
        setSearchStations(searchStations)
    }

    function handleChange({ target }) {
        const { value } = target
        setSearch(value)
        searchSongs.current(value)
    }

    async function getSearchReasults(val) {
        if (val.length === 0) {
            setSongsBySearch(null)
            return
        }
        try {
            const results = await YoutubeService.getYoutubeReasults(val)
            setSongsBySearch(results)
        } catch (err) {
            console.log('err:', err)
        }
    }

    function cleanSearch() {
        setSearch('')
        setSongsBySearch(null)
    }

    function addSong(song) {
        onAddSong(song)
    }

    function onSetSong(song) {
        const songToStore =
        {
            id: song.id,
            imgUrl: song.imgUrl,
            title: song.title,
            channelTitle: song.channelTitle
        }
        setSong(songToStore)
    }

    if (!searchStations && !isForStation) return <Loader />
    return (
        <main className={`main-search ${isForStation ? '' : 'padding'}`} >
            <div className={`search-container ${isForStation ? 'station' : 'main-page'}`}>
                <svg fill={isForStation ? 'grey' : 'black'} role='img' height={isForStation ? '20' : '24'} width={isForStation ? '20' : '24'} aria-hidden='true' className='Svg-sc-ytk21e-0 uPxdw search-icon' viewBox='0 0 24 24' data-encore-id='icon'><path d='M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z'></path></svg>
                <input className='search-input'
                    type='txt' value={search}
                    placeholder={isForStation ? 'Search for songs' : 'What do you want to listen to?'}
                    onChange={handleChange}
                />
                {search.length > 0 && <svg fill={isForStation ? 'grey' : 'black'} onClick={cleanSearch} role='img' height={isForStation ? '20' : '24'} width={isForStation ? '20' : '24'} aria-hidden='true' className='x-icon Svg-sc-ytk21e-0 uPxdw mOLTJ2mxkzHJj6Y9_na_' viewBox='0 0 24 24' data-encore-id='icon'><path d='M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z'></path></svg>}
            </div>

            {
                songsBySearch
                    ?
                    isForStation ?
                        <div className='search-results-station'>
                            {songsBySearch.map(song => <div className='search-result' key={song.id}>
                                <div onClick={() => onSetSong(song)} className='song-img' style={{
                                    width: '45px',
                                    height: '45px',
                                    overflow: 'hidden',
                                }}>
                                    <img src={song.imgUrl} style={{ width: '100px', height: '65px', marginTop: '-10px', marginLeft: '-25px' }} />
                                    <svg fill='white' role='img' height='10' width='10' aria-hidden='true' viewBox='0 0 16 16' data-encore-id='icon' className='play-pause Svg-sc-ytk21e-0 uPxdw'><path d='M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z'></path></svg>
                                </div>
                                <div className='song-details'>
                                    <h4>{song.title} </h4>
                                    <p>{song.channelTitle}</p>
                                </div>
                                {isForStation && <button className='add-song-btn' onClick={() => addSong(song)}>Add</button>}
                            </div>
                            )}
                        </div>
                        :
                        <div className='search-results-main'>
                            {/* <SongList station={songsBySearch} /> */}
                            <div className='top-result'>
                                <h1>Top result</h1>
                                <div className='top-result-preview'>
                                    <div class='song-img' style={{
                                        width: '120px',
                                        height: '120px',
                                        overflow: 'hidden',
                                    }}>
                                        <img src={songsBySearch[0].imgUrl} style={{ width: '260px', height: '220px', marginTop: '-60px', marginLeft: '-100px' }} />
                                    </div>
                                    <h4>{songsBySearch[0].title} </h4>
                                    <p>{songsBySearch[0].channelTitle}</p>
                                </div>
                            </div>
                            <div className='more-results'>
                                <h1>Songs</h1>
                                <div className='results'>
                                    <DragDropContext >
                                        <Droppable droppableId='droppable'>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                >
                                                    {songsBySearch.slice(0, 10).map((song, idx) => (
                                                        <SongPreview song={song} idx={idx} isSearchPage={true} />
                                                    ))}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>
                                </div>
                            </div>
                        </div>
                    :
                    !isForStation &&
                    <div className='genres'>
                        <h1>Browse all</h1>
                        <div className='ganres-section'>
                            {searchStations.map(station => <NavLink to={`/genre/${station.name}`}>
                                <img key={station._id} src={station.imgUrl} />
                            </NavLink>
                            )}
                        </div>
                    </div>
            }
        </main >
    )
}