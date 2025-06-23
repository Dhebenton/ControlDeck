import { useUndoState } from '../../UndoContent'

import AnalyticsIcon from '../Icons/analytics.svg'
import Globe from '../Icons/globe.svg'
import Page from '../Icons/page.svg'
import Clock from '../Icons/clock.svg'
import Users from '../Icons/users.svg'
import Cursor from '../Icons/cursor.svg'
import Money from '../Icons/money.svg'
import Gear from '../Icons/gear.svg'

function Analytics() {
    const { state, set } = useUndoState()
    const panelTab = state.panelTab

    const siteAnalytics = [
        { id: 'Traffic Source', icon: Globe },
        { id: 'Pages', icon: Page },
        { id: 'Real Time', icon: Clock }
    ]

    const users = [
        { id: 'Audience', icon: Users },
        { id: 'Behaviours', icon: Cursor },
        { id: 'Conversions', icon: Money }
    ]

    return (
        <>
            <button
                className={`panel-tab ${panelTab === 'Analytics' ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Analytics' })}
            >
                <img src={AnalyticsIcon} />
                Analytics
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Site Analytics</p>
                {siteAnalytics.map(tab => (
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
                <p className="panel-heading">Users</p>
                {users.map(tab => (
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
                <button
                    className={`panel-tab ${panelTab === 'Analytics Settings' ? 'active' : ''}`}
                    onClick={() => set({ ...state, panelTab: 'Analytics Settings' })}
                >
                    <img src={Gear} />
                    Analytics Settings
                </button>
            </div>
        </>
    )
}

export default Analytics
