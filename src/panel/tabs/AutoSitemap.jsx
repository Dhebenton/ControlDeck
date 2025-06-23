import { useUndoState } from '../../UndoContent';

import Globe from '../Icons/globe.svg';
import Map from '../Icons/map.svg';
import Upload from '../Icons/traydown.svg';
import RSS from '../Icons/rrs.svg';
import Clock from '../Icons/clock.svg';
import Block from '../Icons/nosign.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function AutoSitemap() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const controls = [
        { id: 'Sitemap Preview', icon: Map },
        { id: 'Manual Submission', icon: Upload },
        { id: 'Search Engine Ping', icon: RSS }
    ];

    const automation = [
        { id: 'Auto-Update Settings', icon: Clock },
        { id: 'URL Exclusions', icon: Block }
    ];

    const settings = [
        { id: 'Sitemap Settings', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "Auto Sitemap" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Auto Sitemap' })}
            >
                <img src={Globe} />
                Auto Sitemap
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Controls & Submissions</p>
                {controls.map((tab) => (
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
                <p className="panel-heading">Automation & Filters</p>
                {automation.map((tab) => (
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

export default AutoSitemap;
