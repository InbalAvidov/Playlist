import { DragDropContext, Droppable } from 'react-beautiful-dnd'

import { SongPreview } from '../cmps/song-preview'


export function SearchPageResults({songsBySearch}) {
    return (
        <div className='search-results-main'>
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
    )
}