import { useState } from "react";
import { stationService } from "../service/station.service";
import { uploadService } from "../service/upload.service";
import { SearchSongs } from "./search-page";

export function CreateStation(){
    const [playlistName , setplaylistName] = useState('')
    const station = stationService.getEmptyStation()

    function changePlaylistName({target}){
        const {value} = target
        setplaylistName(value)
    }
    function onAddSong(song){
        station.songs.push(song)
        console.log('station:',station)
    }

    function onSetplaylistName(){
        station.name = playlistName
        console.log('station:',station)
    }

    function onSavePlaylist(){
        if(!station.name || station.songs.length === 0){
            alert('You have to provide name and songs')
            return
        }
        stationService.save(station)
    }
    async function onSelectImg(ev){
        const imgUrl = await uploadService.uploadImg(ev)
        station.imgUrl = imgUrl
    }
    return (<main className="main-create-station">
        <input type="txt" placeholder="Playlist name" value={playlistName} onChange={changePlaylistName} />
        <input type="file" onChange={onSelectImg}/>
        <button onClick={onSetplaylistName}>Ok</button>
        <SearchSongs isCreateStation={true} onAddSong={onAddSong} />
        <button onClick={onSavePlaylist}>Save</button>
    </main>
    )
}