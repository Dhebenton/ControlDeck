import { useUndoState } from "../../UndoContent"

import Atri from '../assets/overview/atrichat.svg'
import SitePerformance from '../assets/overview/siteperformance.svg'
import ConversionInsight from '../assets/overview/conversioninsights.svg'
import SEOHealth from '../assets/overview/seohealthcheck.svg'
import BlogGenerator from '../assets/overview/blogwriter.svg'
import MetaDataAssistan from '../assets/overview/metadataassistan.svg'
import InsightReports from '../assets/overview/insightreports.svg'
import Settings from '../assets/overview/settings.svg'



function AtriAI({}) {
    const { state, set } = useUndoState()
    const panelTab = state.panelTab

    const categories = [
        {id: 'Atri Chat', icon: Atri, label: 'Ask anything, anytime get instant answers, insights, and suggestions across all modules.'},
        {id: 'Site Performance', icon: SitePerformance, label: 'Track user behavior, surface drop-offs, and uncover trends, AI monitors and improves performance in real-time.'},
        {id: 'Conversion Insights', icon: ConversionInsight, label: 'Spot friction in your funnel, deploy targeted changes, and lift conversion rates with precision.'},
        {id: 'SEO Health Check', icon: SEOHealth, label: 'Scan for crawl issues, structure gaps, and ranking blockers, then auto fix with prioritized actions.'}
    ]

    const content = [
        {id: 'Blog Generator', icon: BlogGenerator, label: 'Create SEO-ready blog posts with keyword targeting, structured layout, and clean formatting'},
        {id: 'Metadata Assistant', icon: MetaDataAssistan, label: 'Generate titles and descriptions that rank high and stay on brand fast, sharp, reliable'},
        {id: 'Insight Reports', icon: InsightReports, label: 'Build rich, visual reports across modules complete with charts, summaries, and exports'}
    ]

    return (
        <div className="f-col g52">
            <div className="overview-wrap g12">
                <p className="over-heading">Categories</p>
                {categories.map((card) => (
                    <button 
                        key={card.id}
                        className="overview-card f-col a-f-s g12"
                        onClick={() => set({ ...state, panelTab: card.id })}
                    >
                        <img src={card.icon} />
                        <p className="overview-heading">{card.id}</p>
                        <p className="overview-subheading">{card.label}</p>
                    </button>
                ))}
            </div>
            <div className="overview-wrap g12">
                <p className="over-heading">Content Generators</p>
                {content.map((card) => (
                    <button 
                        key={card.id}
                        className="overview-card blue f-col a-f-s g12"
                        onClick={() => set({ ...state, panelTab: card.id })}
                    >
                        <img src={card.icon} />
                        <p className="overview-heading">{card.id}</p>
                        <p className="overview-subheading">{card.label}</p>
                    </button>
                ))}
            </div>
            <div className="overview-wrap g12">
                <p className="over-heading">Settings</p>
                <button className="overview-card purple f-col a-f-s g12" onClick={() => set({ ...state, panelTab: 'Atri Settings' })}>
                    <img src={Settings}/>
                    <p className="overview-heading">Atri Settings</p>
                    <p className="overview-subheading">Fine-tune AI behavior, tone, and output structure to fit your team’s goals and voice.</p>
                </button>
            </div>
        </div>
    )
}

export default AtriAI 