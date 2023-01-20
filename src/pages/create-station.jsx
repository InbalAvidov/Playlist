import { useNavigate } from "react-router-dom";
import { saveStation } from "../store/station.actions";
import { Station } from "./station";

export function CreateStation() {
  const navigate = useNavigate()

  async function onSaveStation(station) {
    try {
      await saveStation(station)
      navigate('/')
    } catch (err) {
      alert('Cannot Save Station')
    }
  }
  return (
    <Station saveStation={onSaveStation} />
  )
}