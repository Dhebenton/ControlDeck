import AtriIcon from '../assets/atri-summary/atriaiIcon.svg'
import ReloadIcon from '../assets/atri-summary/reloadsmall.svg'
import CopyIcon from '../assets/atri-summary/copy.svg'
import Download from '../assets/atri-summary/setbaseline.svg'
import MessageIcon from '../assets/atri-summary/message.svg'

function AtriSummary({ flex }) {

    return (
        <div className={`atri-summary ${ flex } f-col`}>
            <div className="f-col g16">
                <div className="f-row g8">
                    <img src={AtriIcon} />
                    <p className="atri-summary-heading">Atri Summary</p>
                </div>
                <p className="atri-summary-text">Your site is fully optimized across all core systems. SSL, CDN, minification, and image compression are all active and running smoothly. Current performance scores indicate no action is needed — you're fast, secure, and edge-ready.</p>
            </div>
            <div className="f-row g4">
                <button className='transparent-button'>
                    <img src={ReloadIcon} />
                </button>
                <button className='transparent-button'>
                    <img src={CopyIcon} />
                </button>
                <button className='transparent-button'>
                    <img src={Download} />
                </button>
                <button className='transparent-button'>
                    <img src={MessageIcon} />
                </button>
            </div>
        </div>
    )
}

export default AtriSummary