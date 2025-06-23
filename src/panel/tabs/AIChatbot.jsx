import { useUndoState } from '../../UndoContent';

import Bot from '../Icons/chatbot.svg';
import Dialog from '../Icons/chatbubbles.svg';
import Sparkles from '../Icons/sparkles.svg';
import Bolt from '../Icons/bolt.svg';
import Palet from '../Icons/pallet.svg';
import Wrench from '../Icons/wrench.svg';
import Archive from '../Icons/logs.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function AIChatbot() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const logic = [
        { id: 'Conversation Flow Builder', icon: Dialog },
        { id: 'Training Phrases', icon: Sparkles },
        { id: 'Triggers & Responses', icon: Bolt }
    ];

    const interfaceSection = [
        { id: 'Chat Panel Editor', icon: Palet },
        { id: 'Channel Settings', icon: Wrench },
        { id: 'Chat Logs', icon: Archive }
    ];

    const settings = [
        { id: 'Chatbot Settings', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "AI Chatbot" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'AI Chatbot' })}
            >
                <img src={Bot} />
                AI Chatbot
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Logic & Training</p>
                {logic.map((tab) => (
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
                <p className="panel-heading">Interface & Channels</p>
                {interfaceSection.map((tab) => (
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

export default AIChatbot;
