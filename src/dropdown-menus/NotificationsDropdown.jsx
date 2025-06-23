import Bell from '../assets/buttons/bell.svg'
import './Dropdown.css'

function NotificationsDropdown({}) {
    return (
        <div className="dropdown-wrap">
            <button className="transparent-button">
                <img src={Bell} />
            </button>
        </div>
    )
}

export default NotificationsDropdown