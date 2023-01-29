import { useEffect } from "react"
import { useState } from "react"

export function ShareModal({ setIsShareModal, users, user, onCloseShare }) {
    const [share, setShare] = useState('')

    useEffect(()=>{
        setShare('')
    },[])

    return (
        <div className='modal-editor' onClick={ev => ev.stopPropagation()}>
            <div className='header'>
                <h1>Share with friends</h1>
                <button onClick={() => setIsShareModal(false)}  >
                    <svg fill='white' role='img' height='18' width='18' aria-hidden='true' className='x-icon Svg-sc-ytk21e-0 uPxdw mOLTJ2mxkzHJj6Y9_na_' viewBox='0 0 24 24' data-encore-id='icon'><path d='M3.293 3.293a1 1 0 011.414 0L12 10.586l7.293-7.293a1 1 0 111.414 1.414L13.414 12l7.293 7.293a1 1 0 01-1.414 1.414L12 13.414l-7.293 7.293a1 1 0 01-1.414-1.414L10.586 12 3.293 4.707a1 1 0 010-1.414z'></path></svg>
                </button>
            </div>
            <div className='edit-container share-modal' onClick={(event) => event.stopPropagation}>
                <div className='text-input'>
                    <input type='text' list='users' placeholder='Who do you want to share with' value={share} onChange={(event) => setShare(event.target.value)} />
                    <datalist id='users' onChange={(event) => setShare(event.target.value)}>
                        {user ?
                            users.filter(currUser => currUser._id !== user._id && currUser.fullname !== 'Guest').map(user => (
                                <option>{user.fullname}</option>
                            ))
                            :
                            users.map(user => (<option>{user.fullname}</option>))
                        }
                    </datalist>
                </div>
            </div>
            <div className='save-btn-area'>
                <button className='save-btn' onClick={()=>onCloseShare(share)}>Save</button>
            </div>
        </div>
    )
}