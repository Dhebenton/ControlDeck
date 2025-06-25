import AtriIcon from '../../assets/buttons/atri.svg'
import Export from '../../assets/buttons/export.svg'
import Insights from '../../assets/buttons/insight.svg'
import WebsiteImage from '../assets/website-image.png'
import '../Security.css'
import { useState } from 'react'
import securityData from '../../data/securtiyData'
import SmallLineChart from '../components/SmallLineChart'
import ArrowRight from '../../assets/buttons/arrowright.svg'
import SSLIcon from '../assets/square-icons/ssl.svg'
import FirewallIcon from '../assets/square-icons/firewall.svg'
import DDoSIcon from '../assets/square-icons/ddos.svg'
import useUndo from 'use-undo'
import { useUndoState } from '../../UndoContent'
import SecurityScoreSpeedometre from '../components/SecurityScoreSpeedometre'
import AtriSummary from '../../atri/components/AtriSummary'

function Security({}) {
    const { state, set } = useUndoState()
    const panelTab = state.panelTab

    const [ autoScan, setAutoScan ] = useState(true)
    const [ threatAlerts, setThreatAlerts ] = useState(true)

    const threatsTotal = securityData.threatsBlocked.reduce((sum, item) => sum + item.value, 0);
    const firewallTotal = securityData.firewallRules.reduce((sum, item) => sum + item.value, 0);
    const loginsTotal = securityData.failedLogins.reduce((sum, item) => sum + item.value, 0);
    const twoFactorTotal = securityData.twoFactorChallenges.reduce((sum, item) => sum + item.value, 0);

    function handleAutoScan() {
        setAutoScan(prev => !prev)
    }

    function handleThreatAlerts() {
        setThreatAlerts(prev => !prev)
    }

    return  (
        <div className='content f-col g52'>
            <div className="f-row spread">
                <p className="atri-tab-heading">All systems secure. No threats detected. SSL valid. 2FA active. 1 cert expires in 26 days.</p>
                <div className="f-row g4">
                    <button className="transparent-button">
                        <img src={AtriIcon} />
                    </button>
                    <button className="transparent-button">
                        <img src={Export} />
                    </button>
                    <button className="transparent-button">
                        <img src={Insights} />
                    </button>
                </div>
            </div>
            <div className='f-col g24'>
                <div className='card f-wrap a-st f-row g32'>
                    <div className='card f-row img'>
                        <img src={WebsiteImage} className='website-image' />
                    </div>
                    <div className='flex f-col g24'>
                        <div className='card mw-380 f-col g24 p16'>
                            <div className='info-card-metrics-wrap top f-row spread g20 p-b8'>
                                <div className='f-row g20'>
                                    <div className={`toggle ${autoScan ? '' : 'inactive'} f-row g12`}>
                                        <button className='status-toggle' onClick={handleAutoScan}>
                                            <div className='status-toggle-knob'></div>
                                        </button>
                                        <p>Auto Scan</p>
                                    </div>
                                    <div className={`toggle ${threatAlerts ? '' : 'inactive'} f-row g12`}>
                                        <button className='status-toggle' onClick={handleThreatAlerts}>
                                            <div className='status-toggle-knob'></div>
                                        </button>
                                        <p>Threat Alerts</p>
                                    </div>
                                </div>
                                <div className='f-row g12'>
                                    <button className='button-main small' >
                                        View Logs
                                    </button>
                                    <button className="button-main small">
                                        Run Manual Scan
                                    </button>
                                </div>
                            </div>
                            <div className="info-card-metrics-wrap f-row g24">
                                <div className="info-card-metric f-col g8">
                                    <p className="small-heading">Domain</p>
                                    <div className="info-label-tag-wrap f-row g12">
                                        <p className="card-label">goldline.com</p>
                                        <p className="label-tag">SSL Active</p>
                                    </div>
                                </div>
                                <div className="info-card-metric f-col g8">
                                    <p className="small-heading">2FA Enforcement</p>
                                    <div className="info-label-tag-wrap f-row g12">
                                        <p className="card-label">Enabled for Admins</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-card-metrics-wrap f-row g24">
                                <div className="info-card-metric f-col g8">
                                    <p className="small-heading">Last Scan</p>
                                    <div className="info-label-tag-wrap f-row g12">
                                        <p className="card-label">2 hours ago by Dhebenton</p>
                                    </div>
                                </div>
                                <div className="info-card-metric f-col g8">
                                    <p className="small-heading">Firewall</p>
                                    <div className="info-label-tag-wrap f-row g12">
                                        <p className="card-label">12 active rules </p>
                                        <p className="label-tag">No recent breaches</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card p16 f-col g36">
                            <p className="card-label">Key Metrics</p>
                            <div className="f-col g24">
                                <div className="f-wrap f-row g40">
                                    <div className="small-chart-wrap f-row g16">
                                        <div className="f-col g8">
                                            <p className="small-heading">Threats Blocked</p>
                                            <p className="card-label f-s16">{threatsTotal}</p>
                                        </div>
                                        <SmallLineChart tooltipLabel={"Blocked"} data={securityData.threatsBlocked}/>
                                    </div>
                                    <div className="small-chart-wrap f-row g16">
                                        <div className="f-col g8">
                                            <p className="small-heading">Firewall Rule Triggers</p>
                                            <p className="card-label f-s16">{firewallTotal}</p>
                                        </div>
                                        <SmallLineChart tooltipLabel={"Triggers"} data={securityData.firewallRules}/>
                                    </div>
                                </div>
                                <div className="f-wrap f-row g40">
                                    <div className="small-chart-wrap f-row g16">
                                        <div className="f-col g8">
                                            <p className="small-heading">Failed Logins</p>
                                            <p className="card-label f-s16">{loginsTotal}</p>
                                        </div>
                                        <SmallLineChart tooltipLabel={"Attempts"} data={securityData.failedLogins}/>
                                    </div>
                                    <div className="small-chart-wrap f-row g16">
                                        <div className="f-col g8">
                                            <p className="small-heading">2FA Challenges</p>
                                            <p className="card-label f-s16">{twoFactorTotal}</p>
                                        </div>
                                        <SmallLineChart tooltipLabel={"Challenges"} data={securityData.twoFactorChallenges}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-row f-wrap a-st g24">
                    <div className='flex f-col g24'>
                        <div className='card indicator' onClick={() => set({ ...state, panelTab: 'SSL/TLS' })}>
                            <div className='f-row spread'>
                                <p className="card-label">SSL</p>
                                <button className='transparent-button'>
                                    <img src={ArrowRight} />
                                </button>
                            </div>
                            <div className='card-indicator-wrap f-col g12'>
                                <div className='card-indicator-circle one'></div>
                                <div className='card-indicator-circle two'></div>
                                <div className='card-indicator-circle three'></div>
                                <div className='card-indicator-circle four'></div>
                                <div className='card-indicator-circle five'></div>
                                <img src={SSLIcon} className='card-indicator-icon'/>
                                <p className="card-label">SSL Active</p>
                            </div>
                        </div>
                        <div className='card indicator' onClick={() => set({ ...state, panelTab: 'Firewall Settings' })}>
                            <div className='f-row spread'>
                                <p className="card-label">Firewall</p>
                                <button className='transparent-button'>
                                    <img src={ArrowRight} />
                                </button>
                            </div>
                            <div className='card-indicator-wrap f-col g12'>
                                <div className='card-indicator-circle one'></div>
                                <div className='card-indicator-circle two'></div>
                                <div className='card-indicator-circle three'></div>
                                <div className='card-indicator-circle four'></div>
                                <div className='card-indicator-circle five'></div>
                                <img src={FirewallIcon} className='card-indicator-icon'/>
                                <p className="card-label">SSL Active</p>
                            </div>
                        </div>
                        <div className='card indicator' onClick={() => set({ ...state, panelTab: 'DDoS Protection' })}>
                            <div className='f-row spread'>
                                <p className="card-label">Firewall</p>
                                <button className='transparent-button'>
                                    <img src={ArrowRight} />
                                </button>
                            </div>
                            <div className='card-indicator-wrap f-col g12'>
                                <div className='card-indicator-circle one'></div>
                                <div className='card-indicator-circle two'></div>
                                <div className='card-indicator-circle three'></div>
                                <div className='card-indicator-circle four'></div>
                                <div className='card-indicator-circle five'></div>
                                <img src={DDoSIcon} className='card-indicator-icon'/>
                                <p className="card-label">DDoS Protection</p>
                            </div>
                        </div>
                    </div>
                    <div className="card f-col g36 mw-500">
                        <p className="card-label">Security Score</p>
                        <div className='flex f-col g52'>
                            <SecurityScoreSpeedometre score={76} />
                            <AtriSummary />
                        </div>
                    </div>
                    <div className="card f-col g36 mw-500">
                        <p className="card-label">Security Score</p>
                        <div className='flex f-col g52'>
                            <SecurityScoreSpeedometre score={76} />
                            <AtriSummary />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Security