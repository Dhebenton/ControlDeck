import { useState } from "react"
import AtriPanel from "../atri/components/AtriPanel"
import AtriAI from "../atri/tabs/AtriAI"
import AtriChat from "../atri/tabs/chatbots/AtriChat"
import ConversionInsights from "../atri/tabs/chatbots/ConversionInsights"
import SEOHealthCheck from "../atri/tabs/chatbots/SEOHealthCheck"
import SitePerformance from "../atri/tabs/chatbots/SitePerformance"
import Security from "../security/tabs/Security"
import { useUndoState } from "../UndoContent"
import './Content.css'
import { useEffect } from "react";
import ExportPanel from "./components/sidepanel/ExportPanel"

function Content({}) {
    const { state  } = useUndoState()
    const tab = state.tab
    const panelTab = state.panelTab
    const [ sidePanelOpen, setSidePanelOpen ] = useState(false)
    const [ sidePanelOpening, setSidePanelOpening ] = useState(true)
    const [ atriPanel, setAtriPanel ] = useState(false)
    const [ insightPanel, setInsightPanel ] = useState(false)
    const [ exportPanel, setExportPanel ] = useState(false)

    function handleAtriPanel() {
        setAtriPanel(true);
        setInsightPanel(false);
        setExportPanel(false);
    }

    function handleInsightPanel() {
        setAtriPanel(false);
        setInsightPanel(true);
        setExportPanel(false);
    }

    function handleExportPanel() {
        setAtriPanel(false);
        setInsightPanel(false);
        setExportPanel(true);
    }

    function handleSidePanel() {
        if (sidePanelOpen) {
            setSidePanelOpening(true);
            setTimeout(() => setSidePanelOpen(false), 500)
        } else {
            setSidePanelOpen(true);
            setTimeout(() => setSidePanelOpening(false))
        }
    }

    useEffect(() => {
        setSidePanelOpen(false);
        setSidePanelOpening(true);
    }, [tab, panelTab]);
    
    if (tab === "Dashboard") {
        return (
            <div className="content-wrap"></div>
        );
    }

    if (tab === "Atri AI") {
        return (
            <div className="content-wrap">
                {panelTab === 'Atri AI' && <AtriAI />}
                {panelTab === 'Atri Chat' && <AtriChat />}
                {panelTab === 'Site Performance' && <SitePerformance />}
                {panelTab === 'Conversion Insights' && <ConversionInsights />}
                {panelTab === 'SEO Health Check' && <SEOHealthCheck />}
            </div>
        );
    }

    if (tab === "Security") {
        return (
            <div className="content-sidepanel-wrap f-row a-f-s">
                <Security 
                    handleSidePanel={handleSidePanel}
                    handleAtriPanel={handleAtriPanel}
                    atriPanel={atriPanel}
                    handleInsightPanel={handleInsightPanel}
                    insightPanel={insightPanel}
                    handleExportPanel={handleExportPanel}
                    exportPanel={exportPanel}
                />
                {sidePanelOpen && <div className={`sidepanel-wrap ${sidePanelOpening ? 'opening' : ''}`} >
                    <div className="sidepanel f-col g32">
                       <AtriPanel handleSidePanel={handleSidePanel}/>
                    </div>
                </div>}
            </div>
        );
    }

}

export default Content