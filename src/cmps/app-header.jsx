import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from "react-router-dom";
export function AppHeader() {
    const navigate = useNavigate()

    return (
        <div className="app-header">
            <div className="back-btn" onClick={() => navigate(-1)}>
                <button>❮</button>
            </div>
            <div className="user">
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon><span>PukiBenDavid</span>
            </div>
        </div>
    )
}