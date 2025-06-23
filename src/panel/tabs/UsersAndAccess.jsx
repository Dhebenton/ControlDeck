import { useUndoState } from '../../UndoContent';

import User from '../Icons/users&access.svg';
import Avatar from '../Icons/view-user-alex-dev.svg';
import Key from '../Icons/key.svg';
import Bell from '../Icons/bell.svg';
import Monitor from '../Icons/monitor.svg';
import Gear from '../Icons/gear.svg';

function UsersAndAccess() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const identity = [
        { id: 'User Directory', icon: Avatar },
        { id: 'Roles & Permissions', icon: Key }
    ];

    const access = [
        { id: 'Access Requests', icon: Bell },
        { id: 'Payment Methods', icon: Monitor }
    ];

    const settings = [
        { id: 'Users Settings & Limits', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "Users & Access" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Users & Access' })}
            >
                <img src={User} />
                Users & Access
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Identity & Roles</p>
                {identity.map(tab => (
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
                <p className="panel-heading">Access Control</p>
                {access.map(tab => (
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
                {settings.map(tab => (
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
        </>
    );
}

export default UsersAndAccess;
