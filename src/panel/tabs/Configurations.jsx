import { useUndoState } from '../../UndoContent';

import Config from '../Icons/globe.svg';
import Upload from '../Icons/cloudup.svg';
import Terminal from '../Icons/codeline.svg';
import Chain from '../Icons/Link.svg';
import Search from '../Icons/glassincircle.svg';
import Table from '../Icons/table.svg';
import Stack from '../Icons/squaresround.svg';
import Brackets from '../Icons/codebrackets.svg';
import Gear from '../Icons/gear.svg';

function Configurations() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const deployment = [
        { id: 'Deployment Settings', icon: Upload },
        { id: 'Environment Variables', icon: Terminal },
        { id: 'Domain Settings', icon: Chain }
    ];

    const behaviour = [
        { id: 'Site Metadata', icon: Search },
        { id: 'Custom Headers', icon: Table },
        { id: 'Cache Control', icon: Stack }
    ];

    const system = [
        { id: 'Advanced', icon: Brackets },
        { id: 'Configurations Settings', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "Configurations" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Configurations' })}
            >
                <img src={Config} />
                Configurations
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Deployment & Runtime</p>
                {deployment.map(tab => (
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
                <p className="panel-heading">Site Behaviour & Metadata</p>
                {behaviour.map(tab => (
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
                <p className="panel-heading">System-Level & Settings</p>
                {system.map(tab => (
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

export default Configurations;
