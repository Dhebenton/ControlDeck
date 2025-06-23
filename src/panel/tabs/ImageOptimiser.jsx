import { useUndoState } from '../../UndoContent';

import ImageIcon from '../Icons/image.svg';
import Manager from '../Icons/squaresround.svg';
import Log from '../Icons/logs.svg';
import Cloud from '../Icons/cloud.svg';
import Pause from '../Icons/pause.svg';
import Wrench from '../Icons/wrench.svg';
import Gear from '../Icons/gear.svg';
import Hub from '../Icons/integrationshub.svg';

function ImageOptimiser() {
    const { state, set } = useUndoState();

    const monitoring = [
        { id: 'Image Library', icon: Manager },
        { id: 'Optimisation Logs', icon: Log },
    ];

    const delivery = [
        { id: 'CDN Delivery Toggle', icon: Cloud },
        { id: 'Lazy Load Settings', icon: Pause },
        { id: 'Compression Settings', icon: Wrench },
    ];

    const settings = [
        { id: 'Optimisation Settings', icon: Gear },
    ];

    return (
        <>
            <div className="f-col g4">
                <button
                    className={`panel-tab ${state.panelTab === 'Image Optimiser' ? 'active' : ''}`}
                    onClick={() => set({ ...state, panelTab: 'Image Optimiser' })}
                >
                    <img src={ImageIcon} />
                    Image Optimiser
                </button>
            </div>

            <div className="f-col g4">
                <p className="panel-heading">Monitoring</p>
                {monitoring.map(item => (
                    <button
                        key={item.id}
                        className={`panel-tab ${state.panelTab === item.id ? 'active' : ''}`}
                        onClick={() => set({ ...state, panelTab: item.id })}
                    >
                        <img src={item.icon} />
                        {item.id}
                    </button>
                ))}
            </div>

            <div className="f-col g4">
                <p className="panel-heading">Delivery & Performance</p>
                {delivery.map(item => (
                    <button
                        key={item.id}
                        className={`panel-tab ${state.panelTab === item.id ? 'active' : ''}`}
                        onClick={() => set({ ...state, panelTab: item.id })}
                    >
                        <img src={item.icon} />
                        {item.id}
                    </button>
                ))}
            </div>

            <div className="f-col g4">
                <p className="panel-heading">Settings</p>
                {settings.map(item => (
                    <button
                        key={item.id}
                        className={`panel-tab ${state.panelTab === item.id ? 'active' : ''}`}
                        onClick={() => set({ ...state, panelTab: item.id })}
                    >
                        <img src={item.icon} />
                        {item.id}
                    </button>
                ))}
            </div>

            <div className="f-col g4">
                <button
                    className="panel-tab back-to"
                    onClick={() => set({ ...state, panelTab: 'Integrations Hub' })}
                >
                    <img src={Hub} />
                    Back To Hub
                </button>
            </div>
        </>
    );
}

export default ImageOptimiser;
