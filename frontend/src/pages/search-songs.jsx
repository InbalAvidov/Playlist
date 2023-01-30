import { useEffect, useRef } from 'react'
import { useState } from 'react'

import { YoutubeService } from '../service/youtube.service'
import { NavLink } from 'react-router-dom'

import { utilService } from '../service/util.service'
import { setSong } from '../store/player.action'
import { Loader } from '../cmps/loader'
import { loadStations } from '../store/station.actions'
import { useSelector } from 'react-redux'
import { StationSearchResults } from '../cmps/station-search-result'
import { SearchPageResults } from '../cmps/search-page-results'

export function SearchSongs({ onAddSong, isForStation, songs }) {
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
            const songsId = songs.map(song => song.id)
            const fitResults = results.filter(result => !songsId.includes(result.id))
            setSongsBySearch(fitResults)
        } catch (err) {
            console.log('err:', err)
        }
    }

    function cleanSearch() {
        setSearch('')
        setSongsBySearch(null)
    }

    async function addSong(song) {
        try{
            await onAddSong(song)
            const newResults = songsBySearch.filter(result => result.id !== song.id)
            setSongsBySearch([...newResults])
        }catch(err){
            console.log('err:',err)
        }
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

            {search.length > 0 ?
                //  songsBySearch ?
                isForStation ? (
                    songsBySearch ?
                        <StationSearchResults onSetSong={onSetSong} addSong={addSong} songsBySearch={songsBySearch} />
                        :
                        <StationSearchResults onSetSong={onSetSong} addSong={addSong} songsBySearch={null} />
                )
                    :
                    (
                        songsBySearch ?
                            <SearchPageResults songsBySearch={songsBySearch} />
                            :
                            <Loader />
                    )
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