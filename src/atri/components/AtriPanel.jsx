import AtriInput from "../tabs/chatbots/Components/AtriInput"
import Shield from '../assets/chatbot/shield.svg'
import { useUndoState } from "../../UndoContent"
import Atri from '../assets/atri-summary/atri-sidepanel.svg'
import ClosePanelIcon from '../../assets/buttons/closenav.svg'

function AtriPanel({ open, opening, handleSidePanel}) {

    const { state } = useUndoState()
    const panelTab = state.panelTab
    const tab = state.tab

    const icon = {
        'Security' : Shield
    }

    return (
        <>
            <div className="sidepanel-top-block f-row g8">
                <img src={Atri} />
                <p>Atri</p>
                <div className="flex f-row j-f-e">
                    <button className="transparent-button" onClick={handleSidePanel}>
                        <img src={ClosePanelIcon} className="flip-h"/>
                    </button>
                </div>
            </div>
            <div className="atri-sidepanel-message-window flex f-col g36">
                <div className="sidepanel-atri-icon-wrap f-col g8 ">
                    <img src={Shield}/>
                    <p>Ask me anything about your site or dashboard.</p>
                </div>
            </div>
            <AtriInput />
        </>
    )
}

export default AtriPanel