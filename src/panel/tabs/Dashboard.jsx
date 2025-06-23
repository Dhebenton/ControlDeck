import { useUndoState } from '../../UndoContent';

import Home from '../Icons/home.svg'
import Gear from '../Icons/gear.svg'


function Dashboard({}) {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    return (
        <>
            <button className={`panel-tab ${panelTab === "Dashboard" ? 'active' : ''}`} onClick={() => set({ ...state, panelTab: 'Dashboard' })}>
                <img src={Home} />
                Dashboard
            </button>
            <div className="f-col g4">
                <p className="panel-heading">Settings</p>
                <button className={`panel-tab ${panelTab === "Dashboard Settings" ? 'active' : ''}`} onClick={() => set({ ...state, panelTab: 'Dashboard Settings' })}>
                    <img src={Gear} />
                    Dashboard Settings
                </button>
            </div>
        </>
    )
}

export default Dashboard