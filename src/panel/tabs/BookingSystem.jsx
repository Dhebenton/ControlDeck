import { useUndoState } from '../../UndoContent';

import CalendarIcon from '../Icons/calendar.svg';
import Table from '../Icons/table.svg';
import Form from '../Icons/form.svg';
import Clock from '../Icons/clock.svg';
import Palet from '../Icons/pallet.svg';
import Paper from '../Icons/paperwritting.svg';
import Bolt from '../Icons/bolt.svg';
import Bell from '../Icons/bell.svg';
import Users from '../Icons/users.svg';
import Card from '../Icons/card.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function BookingSystem() {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const calendar = [
        { id: 'Calendar View', icon: CalendarIcon },
        { id: 'Appointment Types', icon: Table },
        { id: 'Availability & Slots', icon: Clock },
        { id: 'Calendar Styling', icon: Palet }
    ];

    const automation = [
        { id: 'Drafts & Scheduling', icon: Paper },
        { id: 'Automation & Flows', icon: Bolt },
        { id: 'Booking Notifications', icon: Bell }
    ];

    const clients = [
        { id: 'Client Management', icon: Users },
        { id: 'Payment Settings', icon: Card }
    ];

    const settings = [
        { id: 'System Settings', icon: Gear }
    ];

    return (
        <>
            <button
                className={`panel-tab ${panelTab === "Booking System" ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Booking System' })}
            >
                <img src={CalendarIcon} />
                Booking System
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Calendar</p>
                {calendar.map((tab) => (
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
                <p className="panel-heading">Automation</p>
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
                <p className="panel-heading">Clients & Payments</p>
                {clients.map((tab) => (
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

export default BookingSystem;

