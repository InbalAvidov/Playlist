import { useRef } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowL } from '@fortawesome/free-solid-svg-icons'


export function Search() {
    const [search, setSearch] = useState('')
    const [res, setRes] = useState([])
    const getRes = useRef(debounce(getResults, 700))
    const navigate = useNavigate()

    function debounce(func, timeout = 700) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        }
    }

    function handleChange({ target }) {
        const { value } = target
        if (value === '') setRes([])
        setSearch(value)
        getRes.current(value)
    }

    function getResults(val) {
        const results = []
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&maxResults=20&type=video&key=AIzaSyC-eUmSLJiWa-4c0NO17ogFFVaGMll8ngg&q=${val}`)
            .then(res => res.data.items)
            .then(ytVideos => ytVideos.map(ytVideo => {
                console.log('ytVideo:',ytVideo)
                // if (!ytVideo.snippet.channelTitle.includes('Official') && !ytVideo.snippet.channelTitle.includes('רשמי') && !ytVideo.snippet.title.includes('Official') ) return
                if (ytVideo.snippet.title.includes('Trailer')) return
                const song = {
                    id: ytVideo.id.videoId,
                    title: ytVideo.snippet.title,
                    channelTitle: ytVideo.snippet.channelTitle,
                    imgUrl: ytVideo.snippet.thumbnails.high.url,
                    url: `https://www.youtube.com/embed?v=${ytVideo.id.videoId}`,
                    addedBy: {
                        "_id": "u101",
                        "fullname": "Puki Ben David",
                        "imgUrl": "https://robohash.org/set=set3"
                    },
                    addedAt: new Date()
                }
                console.log('song:',song)
                results.push(song)
                setRes(results)
            }))
    }
    return (
        <main className="main-search">
            <button className="back-btn" onClick={()=>navigate(-1)}>❮</button>
            <input className="main-input-search" type='txt' value={search} placeholder='What do you want to listen to?' onChange={handleChange} />
            {res.length> 0 && <div className="search-results">
                {res.map(res=><div className="search-result" key={res.id}>
                    <img src={res.imgUrl} />
                    <div className="song-details">
                    <h4>{res.title} </h4>
                    <p>{res.channelTitle}</p>
                    </div>
                    </div>
                )}
                </div>}
        </main>
    )
}