import { useNavigate } from "react-router-dom";
import { stationService } from "../service/station.service";
import { Station } from "./station";

export function CreateStation(){
    const navigate = useNavigate()

      async function onSaveStation(station) {
        try{
          const newStation = await stationService.save(station)
          navigate('/')
        } catch(err){
            alert('Cannot Save Station')
        }
      }
    return (
        <Station saveStation={onSaveStation}/>
         )
}