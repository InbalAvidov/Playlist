import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { utilService } from "../service/util.service";

import { saveStation } from "../store/station.actions";
import { login } from "../store/user.action";
import { Station } from "./station";



export function CreateStation() {
  const user = useSelector((storeState => storeState.userModule.user))
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      Swal.fire({
        title: 'You need to Login to add a playlist',
        text: "You can also continue as a guest for now",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Login',
        denyButtonText: `Continue as guest`,
        background: '#ffffff',
        color: '#000000',
        confirmButtonColor: '#1ed760',
        denyButtonColor: '#1ed760',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login-signup/loginState')
        } else if (result.isDenied) {
          login({
            _id: utilService.makeId(),
            username: 'guest',
            imgUrl: "https://robohash.org/set=set3"
          })
        }
      })
    }
  }, [])

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