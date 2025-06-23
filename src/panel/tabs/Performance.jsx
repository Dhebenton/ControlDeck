import { useUndoState } from '../../UndoContent'

import Bolt from '../Icons/bolt.svg'
import Speed from '../Icons/speed.svg'
import Chart from '../Icons/chart.svg'
import Warning from '../Icons/warning.svg'
import Clock from '../Icons/clock.svg'
import CPU from '../Icons/cpu.svg'
import Gear from '../Icons/gear.svg'

function Performance() {
    const { state, set } = useUndoState()
    const panelTab = state.panelTab

    const diagnostics = [
        { id: 'Speed Test', icon: Speed },
        { id: 'Core Web Vitals', icon: Chart },
        { id: 'Load Bottlenecks', icon: Warning }
    ]

    const monitoring = [
        { id: 'Uptime Monitoring', icon: Clock },
        { id: 'Resource Usage', icon: CPU }
    ]

    return (
        <>
            <button
                className={`panel-tab ${panelTab === 'Performance' ? 'active' : ''}`}
                onClick={() => set({ ...state, panelTab: 'Performance' })}
            >
                <img src={Bolt} />
                Performance
            </button>

            <div className="f-col g4">
                <p className="panel-heading">Diagnostics</p>
                {diagnostics.map(tab => (
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
                <p className="panel-heading">Monitoring</p>
                {monitoring.map(tab => (
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
                    className={`panel-tab ${panelTab === 'Performance Settings' ? 'active' : ''}`}
                    onClick={() => set({ ...state, panelTab: 'Performance Settings' })}
                >
                    <img src={Gear} />
                    Performance Settings
                </button>
            </div>
        </>
    )
}

export default Performance
