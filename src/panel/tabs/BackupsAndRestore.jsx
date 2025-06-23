import { useUndoState } from '../../UndoContent';

import Backup from '../Icons/squaresround.svg';
import Upload from '../Icons/traydown.svg';
import Calendar from '../Icons/calendar.svg';
import Layers from '../Icons/squares.svg';
import Archive from '../Icons/logs.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function BackupsRestore() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const backupActions = [
        { id: 'Manual Backup', icon: Upload },
        { id: 'Backup Schedule', icon: Calendar }
    ];

    const recovery = [
        { id: 'Restore Points', icon: Layers },
        { id: 'Backup Logs', icon: Archive }
    ];

    const settings = [
        { id: 'Backup Settings', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "Backups & Restore" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Backups & Restore' })}
            >
                <img src={Backup} />
                Backups & Restore
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Backup Actions</p>
                {backupActions.map((tab) => (
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
                <p className="panel-heading">Recovery & History</p>
                {recovery.map((tab) => (
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
                {settings.map((tab) => (
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

export default BackupsRestore;
