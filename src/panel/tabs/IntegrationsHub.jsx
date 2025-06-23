import { useUndoState } from '../../UndoContent';

import Integrations from '../Icons/integrationshub.svg';
import CMS from '../Icons/cms.svg';
import Calendar from '../Icons/calendar.svg';
import Image from '../Icons/image.svg';
import Cookies from '../Icons/cookies.svg';
import Form from '../Icons/form.svg';
import Card from '../Icons/card.svg';
import Chatbot from '../Icons/chatbot.svg';
import Globe from '../Icons/globe.svg';
import Gear from '../Icons/gear.svg';
import IntergrationsAdd from '../Icons/square-add.svg';

function IntegrationsHub() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const integrations = [
        { id: 'CMS', icon: CMS },
        { id: 'Booking System', icon: Calendar },
        { id: 'Image Optimiser', icon: Image },
        { id: 'Cookies Manager', icon: Cookies },
        { id: 'Smart Forms', icon: Form },
        { id: 'Stripe', icon: Card },
        { id: 'AI Chatbot', icon: Chatbot },
        { id: 'Auto Sitemap', icon: Globe },
    ];

    const settings = [
        { id: 'Manage Integrations', icon: IntergrationsAdd },
        { id: 'Integrations Settings', icon: Gear },
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === 'Integrations Hub' ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Integrations Hub' })}
            >
                <img src={Integrations} />
                Integrations Hub
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Integrations</p>
                {integrations.map(tab => (
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

export default IntegrationsHub;
