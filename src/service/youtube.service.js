import axios from "axios"


export const YoutubeService = {
    getYoutubeReasults
}

async function getYoutubeReasults(val) {
    const results = []
    try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&maxResults=20&type=video&key=AIzaSyA6WG8zW9hBoHIkuiS2mbS4GQ8zME2jg04&q=${val}`)
        const ytVideos = res.data.items
        ytVideos.map(ytVideo => {
            let title = ytVideo.snippet.title
            if (ytVideo.snippet.title.includes('Trailer')) return
            const song = {
                id: ytVideo.id.videoId,
                title: _cleanTitle(ytVideo.snippet.title),
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
            if(!song.title) return
            results.push(song)
        })
        return results
    } catch (err) {
        return err
    }
}

function _cleanTitle(title) {
    let cleanTitle = title
    if (title.includes('(')) {
        const idx = title.indexOf('(')
        cleanTitle = cleanTitle.slice(0, idx)
    }
    if (title.includes('[')) {
        const idx = title.indexOf('[')
        cleanTitle = cleanTitle.slice(0, idx)
    }
    if (title.includes('-')) {
        const idx = title.indexOf('-')
        cleanTitle = cleanTitle.slice(idx+1)
    }
    // if (title.includes('&#39;')) {
    //     const idx = title.indexOf('-')
    //     return title.slice(idx+1)
    // }
    return cleanTitle
    
}