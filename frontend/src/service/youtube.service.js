import axios from "axios"

const API_KEY = 'AIzaSyA6WG8zW9hBoHIkuiS2mbS4GQ8zME2jg04'


export const YoutubeService = {
    getYoutubeReasults,
    getSongDuration
}

async function getYoutubeReasults(val) {
    const results = []
    try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&maxResults=20&type=video&key=${API_KEY}&q=${val}`)
        const ytVideos = res.data.items
        ytVideos.map(ytVideo => {
            if (ytVideo.snippet.title.includes('Trailer')) return
            const song = {
                id: ytVideo.id.videoId,
                title: _cleanTitle(ytVideo.snippet.title),
                channelTitle: ytVideo.snippet.channelTitle,
                imgUrl: ytVideo.snippet.thumbnails.high.url,
                addedBy: {
                    "_id": "u101",
                    "fullname": "Puki Ben David",
                    "imgUrl": "https://robohash.org/set=set3"
                },
                addedAt: Date.now()
            }
            if (!song.title) return
            results.push(song)
        })
        return results
    } catch (err) {
        return err
    }
}

async function getSongDuration(songId) {
    const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${songId}&part=contentDetails&key=${API_KEY}`)
    const videoDuration = res.data.items[0].contentDetails.duration
    const min = videoDuration.slice(2, videoDuration.indexOf('M'))
    let sec = videoDuration.slice(videoDuration.indexOf('M') + 1, videoDuration.indexOf('S'))
    sec = sec.padStart(2, '0')
    const duration = `${min}:${sec}`
    return duration
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
        cleanTitle = cleanTitle.slice(idx + 1)
    }
    return cleanTitle

}
