import { useUndoState } from "../UndoContent";
import './Panel.css';
import ClosePanel from '../assets/buttons/closepanel.svg';

import Dashboard from "./tabs/Dashboard";
import Atri from "./tabs/Atri";
import Analytics from "./tabs/Analytics";
import Performance from "./tabs/Performance";
import Notifications from "./tabs/Notifications";
import Security from "./tabs/Security";
import IntegrationsHub from "./tabs/IntegrationsHub";
import CMS from './tabs/CMS'
import ImageOptimiser from "./tabs/ImageOptimiser";
import BookingSystem from "./tabs/BookingSystem";
import CookiesManager from "./tabs/CookiesManager";
import SmartForms from "./tabs/SmartForms";
import Stripe from "./tabs/Stripe";
import AIChatbot from './tabs/AIChatbot'
import AutoSitemap from "./tabs/AutoSitemap";
import BackupsRestore from "./tabs/BackupsAndRestore";
import Configurations from "./tabs/Configurations";
import PlansAndBilling from "./tabs/PlansAndBilling";
import UsersAndAccess from "./tabs/UsersAndAccess";
import LogsAndReports from "./tabs/LogsAndReports";

function Panel({ panelClosed, handlePanelClose }) {
    const { state } = useUndoState();
    const tab = state.tab;
    const panelTab = state.panelTab

    return (
        <div className={`panel ${panelClosed ? 'closed' : ''} f-col g40 a-f-e`}>
            <div className="panel-block f-row spread">
                <p>{tab === "Integrations Hub" ? panelTab : tab}</p>
                <button className="transparent-button" onClick={handlePanelClose}>
                    <img src={ClosePanel} alt="Close panel" />
                </button>
            </div>
            <div className="panel-tab-wrap f-col g32">
                {tab === "Dashboard" && <Dashboard />}
                {tab === "Atri AI" && <Atri />}
                {tab === "Analytics" && <Analytics />}
                {tab === "Performance" && <Performance />}
                {tab === "Notifications" && <Notifications />}
                {tab === "Security" && <Security />}
                {tab === "Integrations Hub" &&
                    [
                        "Integrations Hub",
                        "Manage Integrations",
                        "Integrations Settings"
                    ]
                    .includes(panelTab) &&
                    <IntegrationsHub />
                }
                {tab === "Integrations Hub" &&
                [
                    "CMS",
                    "Content Manager",
                    "Custom Fields",
                    "Media Library",
                    "Drafts & Scheduling",
                    "Version History",
                    "CMS Integrations"
                ].includes(panelTab) &&
                    <CMS />
                }
                {tab === "Integrations Hub" &&
                    [
                        "Image Optimiser",
                        "Image Library",
                        "Optimisation Logs",
                        "CDN Delivery Toggle",
                        "Lazy Load Settings",
                        "Compression Settings",
                        "Optimisation Settings"
                    ].includes(panelTab) &&
                    <ImageOptimiser />
                }
                {tab === "Integrations Hub" &&
                    [
                        "Booking System",
                        "Calendar View",
                        "Appointment Types",
                        "Availability & Slots",
                        "Calendar Styling",
                        "Drafts & Scheduling",
                        "Automation & Flows",
                        "Booking Notifications",
                        "Client Management",
                        "Payment Settings",
                        "System Settings"
                    ].includes(panelTab) &&
                    <BookingSystem />
                }
                {tab === "Integrations Hub" &&
                    [
                        "Cookies Manager",
                        "Cookie Categories",
                        "Geo-based Consent Rules",
                        "Third-party Scripts Control",
                        "Consent Logs",
                        "Consent Banner Editor",
                        "Previous Edits",
                        "Cookies Settings"
                    ].includes(panelTab) &&
                    <CookiesManager />
                }
                {tab === "Integrations Hub" &&
                    [
                        "Smart Forms",
                        "Submission Logs",
                        "Auto-Responses",
                        "Form Manager",
                        "Intergrations",
                        "Form Builder",
                        "Validation Rules",
                        "Conditional Logic",
                        "Smart Forms Settings"
                    ].includes(panelTab) &&
                    <SmartForms />
                }
                {tab === "Integrations Hub" &&
                    [
                        "Stripe",
                        "Products & Pricing",
                        "Checkout Settings",
                        "Customer Management",
                        "Security & Compliance",
                        "Stripe Settings"
                    ].includes(panelTab) &&
                    <Stripe />
                }
                {tab === "Integrations Hub" &&
                    [
                        "AI Chatbot",
                        "Conversation Flow Builder",
                        "Training Phrases",
                        "Triggers & Responses",
                        "Chat Panel Editor",
                        "Channel Settings",
                        "Chat Logs",
                        "Chatbot Settings"
                    ].includes(panelTab) &&
                    <AIChatbot />
                }
                {tab === "Integrations Hub" &&
                    [
                        "Auto Sitemap",
                        "Sitemap Preview",
                        "Manual Submission",
                        "Search Engine Ping",
                        "Auto-Update Settings",
                        "URL Exclusions",
                        "Sitemap Settings"
                    ].includes(panelTab) &&
                    <AutoSitemap />
                }
                {tab === "Backups & Restore" && <BackupsRestore />}
                {tab === "Configurations" && <Configurations />}
                {tab === "Plans & Billing" && <PlansAndBilling />}
                {tab === "Users & Access" && <UsersAndAccess />}
                {tab === "Logs & Reports" && <LogsAndReports />}
            </div>
        </div>
    );
}

export default Panel;
