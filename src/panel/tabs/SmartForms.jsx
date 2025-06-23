import { useUndoState } from '../../UndoContent';

import FormIcon from '../Icons/form.svg';
import Box from '../Icons/logs.svg';
import Chat from '../Icons/chatbubbles.svg';
import Manager from '../Icons/squaresround.svg';
import Bolt from '../Icons/bolt.svg';
import Palet from '../Icons/pallet.svg';
import Check from '../Icons/check.svg';
import Flask from '../Icons/beaker.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function SmartForms() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const responses = [
        { id: 'Submission Logs', icon: Box },
        { id: 'Auto-Responses', icon: Chat }
    ];

    const management = [
        { id: 'Form Manager', icon: Manager },
        { id: 'Intergrations', icon: Bolt }
    ];

    const builder = [
        { id: 'Form Builder', icon: Palet },
        { id: 'Validation Rules', icon: Check },
        { id: 'Conditional Logic', icon: Flask }
    ];

    const settings = [
        { id: 'Smart Forms Settings', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === 'Smart Forms' ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Smart Forms' })}
            >
                <img src={FormIcon} />
                Smart Forms
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Responses</p>
                {responses.map((tab) => (
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
                <p className="panel-heading">Management</p>
                {management.map((tab) => (
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
                <p className="panel-heading">Builder</p>
                {builder.map((tab) => (
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

export default SmartForms;
