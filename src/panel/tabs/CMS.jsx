import { useUndoState } from '../../UndoContent';

import CMSIcon from '../Icons/cms.svg';
import Manager from '../Icons/squaresround.svg';
import Wrench from '../Icons/wrench.svg';
import Image from '../Icons/image.svg';
import Calendar from '../Icons/calendar.svg';
import Layers from '../Icons/squares.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function CMS() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const structure = [
        { id: 'Content Manager', icon: Manager },
        { id: 'Custom Fields', icon: Wrench },
        { id: 'Media Library', icon: Image }
    ];

    const workflow = [
        { id: 'Drafts & Scheduling', icon: Calendar },
        { id: 'Version History', icon: Layers }
    ];

    const settings = [
        { id: 'CMS Integrations', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === 'CMS' ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'CMS' })}
            >
                <img src={CMSIcon} />
                CMS
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Content Structure</p>
                {structure.map(tab => (
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
                <p className="panel-heading">Content Workflow</p>
                {workflow.map(tab => (
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

            <button
                className={`panel-tab back-to ${panelTab === 'Back To Hub' ? 'active' : ''}`}
                onClick={() => set({ ...state, tab: 'Integrations Hub', panelTab: 'Integrations Hub' })}
            >
                <img src={Hub} />
                Back To Hub
            </button>
        </>
    );
}

export default CMS;
