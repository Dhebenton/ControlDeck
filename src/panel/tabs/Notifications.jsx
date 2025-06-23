import { useUndoState } from '../../UndoContent';

import Bell from '../Icons/bell.svg';
import Monitor from '../Icons/monitor.svg';
import Users from '../Icons/users.svg';
import Squares from '../Icons/squaresround.svg';
import Wrench from '../Icons/wrench.svg';
import PaperPlane from '../Icons/plane.svg';
import Gear from '../Icons/gear.svg';

function Notifications() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const events = [
        { id: 'System Alerts', icon: Monitor },
        { id: 'User Events', icon: Users },
        { id: 'Custom Events', icon: Squares },
    ];

    const config = [
        { id: 'Custom Triggers', icon: Wrench },
        { id: 'Delivery Channels', icon: PaperPlane },
    ];

    return (
        <>
            <button className={`panel-tab ${panelTab === 'Notifications' ? 'active' : ''}`} onClick={() => set({ ...state, panelTab: 'Notifications' })}>
                <img src={Bell} />
                Notifications
            </button>
            <div className="f-col g4">
                <p className="panel-heading">Events & Alerts</p>
                {events.map((tab) => (
                    <button
                        key={tab.id}
                        className={`panel-tab ${panelTab === tab.id ? 'active' : ''}`}
                        onClick={() => set({ ...state, panelTab: tab.id })}
                    >
                        <img src={tab.icon} />
                        {tab.id}
                    </button>
                ))}
            </div>
            <div className="f-col g4">
                <p className="panel-heading">Configuration</p>
                {config.map((tab) => (
                    <button
                        key={tab.id}
                        className={`panel-tab ${panelTab === tab.id ? 'active' : ''}`}
                        onClick={() => set({ ...state, panelTab: tab.id })}
                    >
                        <img src={tab.icon} />
                        {tab.id}
                    </button>
                ))}
            </div>
            <div className="f-col g4">
                <p className="panel-heading">Settings</p>
                <button
                    className={`panel-tab ${panelTab === 'Notifications Settings' ? 'active' : ''}`}
                    onClick={() => set({ ...state, panelTab: 'Notifications Settings' })}
                >
                    <img src={Gear} />
                    Notifications Settings
                </button>
            </div>
        </>
    );
}

export default Notifications;
