import { useUndoState } from '../../UndoContent';

import Cookie from '../Icons/cookies.svg';
import Layers from '../Icons/squares.svg';
import Globe from '../Icons/globe.svg';
import Code from '../Icons/codebrackets.svg';
import Archive from '../Icons/logs.svg';
import Palet from '../Icons/pallet.svg';
import Wrench from '../Icons/wrench.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function CookiesManager() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const monitoring = [
        { id: 'Cookie Categories', icon: Layers },
        { id: 'Geo-based Consent Rules', icon: Globe },
        { id: 'Third-party Scripts Control', icon: Code },
        { id: 'Consent Logs', icon: Archive }
    ];

    const banner = [
        { id: 'Consent Banner Editor', icon: Palet },
        { id: 'Previous Edits', icon: Wrench }
    ];

    const settings = [
        { id: 'Cookies Settings', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "Cookies Manager" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Cookies Manager' })}
            >
                <img src={Cookie} />
                Cookies Manager
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Monitoring</p>
                {monitoring.map((tab) => (
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
                <p className="panel-heading">Banner Configuration</p>
                {banner.map((tab) => (
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

            <button
                onClick={() => set({ ...state, tab: 'Integrations Hub', panelTab: 'Integrations Hub' })}
                className="panel-tab back-to"
            >
                <img src={Hub} />
                Back To Hub
            </button>
        </>
    );
}

export default CookiesManager;
