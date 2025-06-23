import { useUndoState } from '../../UndoContent';

import Shield from '../Icons/shield.svg';
import ShieldCheck from '../Icons/shieldcheck.svg';
import Lock from '../Icons/lock.svg';
import Key from '../Icons/key.svg';
import Fingerprint from '../Icons/fingerprint.svg';
import LockOpen from '../Icons/lockopen.svg';
import Logs from '../Icons/logs.svg';
import ShieldWarning from '../Icons/shieldwarning.svg';
import Gear from '../Icons/gear.svg';

function Security() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const networkSecurity = [
        { id: 'Firewall Settings', icon: ShieldCheck },
        { id: 'SSL/TLS', icon: Lock },
    ];

    const authentication = [
        { id: 'Permissions', icon: Key },
        { id: 'Access Controls', icon: Fingerprint },
        { id: 'Login Security', icon: LockOpen },
    ];

    const monitoring = [
        { id: 'Audit Logs', icon: Logs },
        { id: 'Threat Detection', icon: ShieldWarning },
    ];

    return (
        <>
            <button className={`panel-tab ${panelTab === 'Security' ? 'active' : ''}`} onClick={() => set({ ...state, panelTab: 'Security' })}>
                <img src={Shield} />
                Security
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Network & Protocol Security</p>
                {networkSecurity.map(tab => (
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
                <p className="panel-heading">Access & Authentication</p>
                {authentication.map(tab => (
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
                <p className="panel-heading">Monitoring & Response</p>
                {monitoring.map(tab => (
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
                    className={`panel-tab ${panelTab === 'Security Overview' ? 'active' : ''}`}
                    onClick={() => set({ ...state, panelTab: 'Security Overview' })}
                >
                    <img src={Gear} />
                    Security Overview
                </button>
            </div>
        </>
    );
}

export default Security;
