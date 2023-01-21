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
            // if (!ytVideo.snippet.channelTitle.includes('Official') && !ytVideo.snippet.channelTitle.includes('רשמי') && !ytVideo.snippet.title.includes('Official') ) return
            if (ytVideo.snippet.title.includes('Trailer')) return
            // console.log('ytVideo', ytVideo)
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
            results.push(song)
        })
        return results
    } catch (err) {
        return err
    }
}