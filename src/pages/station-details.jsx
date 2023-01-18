import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from 'react-router-dom'

import { loadStations, loadStationById } from "../store/station.actions"

export function StationDetails(){

  const currStations = useSelector((storeState) => storeState.stationModule.currStation)
  console.log('currStations',currStations)
  const params = useParams()
  console.log(params.id)

  useEffect(()=>{
    loadStationById(params.id)
  },[])

  return (
    <section className="station-details grid">

      <div className="details-header flex">
          <img src={currStations.songs[0].imgUrl}></img>
      </div>
    </section>
  )

}