import { useUndoState } from '../../UndoContent';

import StripeIcon from '../Icons/card.svg';
import Tag from '../Icons/tag.svg';
import Cart from '../Icons/cart.svg';
import Users from '../Icons/users.svg';
import Shield from '../Icons/shieldcheck.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function Stripe() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const commerce = [
        { id: 'Products & Pricing', icon: Tag },
        { id: 'Checkout Settings', icon: Cart }
    ];

    const ops = [
        { id: 'Customer Management', icon: Users },
        { id: 'Security & Compliance', icon: Shield }
    ];

    const settings = [
        { id: 'Stripe Settings', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === 'Stripe' ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Stripe' })}
            >
                <img src={StripeIcon} />
                Stripe
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Commerce Configuration</p>
                {commerce.map((tab) => (
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
                <p className="panel-heading">Operations & Compliance</p>
                {ops.map((tab) => (
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

export default Stripe;
