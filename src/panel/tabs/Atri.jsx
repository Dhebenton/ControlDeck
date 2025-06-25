import { useUndoState } from '../../UndoContent';

import AtriAI from '../Icons/atri.svg'
import ChatBubble from '../Icons/messagebubble.svg'
import Chart from '../Icons/chart.svg'
import Funnel from '../Icons/funnel.svg'
import Glass from '../Icons/magnifyingglass.svg'
import Blog from '../Icons/blog.svg'
import GlassCircle from '../Icons/glassincircle.svg'
import Brief from '../Icons/brief.svg'
import Gear from '../Icons/gear.svg'

function Atri({}) {
    const { state, set } = useUndoState();
    const panelTab = state.panelTab;

    const categories = [
        {id: 'Atri Chat', icon: ChatBubble},
        {id: "Site Performance", icon: Chart},
        {id: "Conversion Insights", icon: Funnel},
        {id: "SEO Health Check", icon: Glass}
    ]

    const content = [
        {id: "Blog Generator", icon: Blog},
        {id: "Metadata Assistant", icon: GlassCircle},
        {id: "Insight Reports", icon: Brief}
    ]

    return (
        <>
            <button className={`panel-tab ${panelTab === "Atri AI" ? 'active' : ''}`} onClick={() => set({ ...state, panelTab: 'Atri AI' })}>
                <img src={AtriAI} />
                Atri AI
            </button>
            <div className="f-col g4">
                <p className="panel-heading">Categories</p>
                {categories.map((tab) => (
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
                <p className="panel-heading">Categories</p>
                {content.map((tab) => (
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
                <button className={`panel-tab ${panelTab === "Atri Settings" ? 'active' : ''}`} onClick={() => set({ ...state, panelTab: 'Atri Settings' })}>
                    <img src={Gear} />
                    Atri Settings
                </button>
            </div>
        </>
    )

}

export default Atri