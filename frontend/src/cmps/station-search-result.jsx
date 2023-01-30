import { Loader } from "./loader";

export function StationSearchResults({ onSetSong, addSong, songsBySearch }) {
    return (
        <div className='search-results-station'>
            {songsBySearch ?
                songsBySearch.map(song => <div className='search-result' key={song.id}>
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
                    <button className='add-song-btn' onClick={() => addSong(song)}>Add</button>
                </div>
                )
                :
                <Loader className={'for-station'} />}
        </div>
    )
}