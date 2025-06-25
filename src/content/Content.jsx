import AtriChat from "../atri/tabs/chatbots/AtriChat"
import Security from "../security/tabs/Security"
import { useUndoState } from "../UndoContent"
import './Content.css'

function Content({}) {
    const { state  } = useUndoState()
    const tab = state.tab
    const panelTab = state.panelTab
    
    if (tab === "Dashboard") {
        return (
            <div className="content-wrap"></div>
        );
    }

    if (tab === "Atri AI") {
        return (
            <div className="content-wrap">
                {panelTab === 'Atri Chat' && <AtriChat />}
            </div>
        );
    }

    if (tab === "Security") {
        return (
            <div className="content-sidepanel-wrap">
                <Security />
            </div>
        );
    }

}

export default Content