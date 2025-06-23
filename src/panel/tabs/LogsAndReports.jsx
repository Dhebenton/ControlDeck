import { useUndoState } from '../../UndoContent';

import Folder from '../Icons/folder.svg';
import UserGroup from '../Icons/users.svg';
import FileDoc from '../Icons/paperwritting.svg';
import Upload from '../Icons/cloudup.svg';
import Search from '../Icons/glassincircle.svg';
import Shield from '../Icons/shield.svg';
import Briefcase from '../Icons/brief.svg';
import Wrench from '../Icons/wrench.svg';
import Gear from '../Icons/gear.svg';

function LogsAndReports() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const core = [
        { id: 'System Logs', icon: UserGroup },
        { id: 'Deployment Logs', icon: FileDoc },
        { id: 'Uptime Reports', icon: Upload }
    ];

    const security = [
        { id: 'Audit Trail', icon: Search },
        { id: 'Security Logs', icon: Shield }
    ];

    const reports = [
        { id: 'Custom Reports', icon: Briefcase },
        { id: 'Reports Configuration', icon: Wrench }
    ];

    const settings = [
        { id: 'Users Settings & Limits', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "Logs & Reports" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Logs & Reports' })}
            >
                <img src={Folder} />
                Logs & Reports
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Core Logs</p>
                {core.map(tab => (
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
                <p className="panel-heading">Security & Compliance</p>
                {security.map(tab => (
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
                <p className="panel-heading">Reporting</p>
                {reports.map(tab => (
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

export default LogsAndReports;
