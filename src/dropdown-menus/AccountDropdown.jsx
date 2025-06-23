import ProfilePicture from './assests/profilepicture.png'
import Chevron from '../assets/chevrons/account.svg'

function AccountDropdown({}) {
    return (
        <div className="dropdown-wrap">
            <div className="account-toggle f-row g8">
                <img src={ProfilePicture} />
                <p>Account</p>
                <img src={Chevron} className='chevron one'/>
            </div>
        </div>
    )
}

export default AccountDropdown