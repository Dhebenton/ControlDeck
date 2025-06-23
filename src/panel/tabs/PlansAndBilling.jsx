import { useUndoState } from '../../UndoContent';

import Rocket from '../Icons/plans.svg';
import Wrench from '../Icons/wrench.svg';
import History from '../Icons/receipt.svg';
import Card from '../Icons/card.svg';
import Pie from '../Icons/analytics.svg';
import Graph from '../Icons/chart.svg';

function PlansAndBilling() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const subscription = [
        { id: 'Subscription Controls', icon: Wrench }
    ];

    const billing = [
        { id: 'Billing History', icon: History },
        { id: 'Payment Methods', icon: Card }
    ];

    const usage = [
        { id: 'Usage & Limits', icon: Pie },
        { id: 'Scaling Configurations', icon: Graph }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "Plans & Billing" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Plans & Billing' })}
            >
                <img src={Rocket} />
                Plans & Billing
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Subscription Controls</p>
                {subscription.map(tab => (
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
                <p className="panel-heading">Billing & Payments</p>
                {billing.map(tab => (
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
                <p className="panel-heading">Usage & Scaling</p>
                {usage.map(tab => (
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

export default PlansAndBilling;
