import Chevron from '../assets/chevrons/buttons.svg'

function StatusDropdown({}) {
    return (
        <div>
            <button className="button-main green">
                Live
                <img src={Chevron} className='chevron two' />
            </button>
        </div>
    )
}

export default StatusDropdown
