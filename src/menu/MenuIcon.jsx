import { useUndoState } from '../UndoContent'

import Dashboard from './icons/home.svg'
import Gear from './icons/gear.svg'
import Atri from './icons/atri.svg'
import ChatBubble from './icons/messagebubble.svg'
import Chart from './icons/chart.svg'
import Funnel from './icons/funnel.svg'
import Glass from './icons/magnifyingglass.svg'
import Blog from './icons/blog.svg'
import GlassCircle from './icons/glassincircle.svg'
import Brief from './icons/brief.svg'
import Shield from './icons/shield.svg'
import ShieldCheck from './icons/shieldcheck.svg'
import Lock from './icons/lock.svg'
import Bolt from './icons/bolt.svg'
import Key from './icons/key.svg'
import FingerPrint from './icons/fingerprint.svg'
import LockOpen from './icons/lockopen.svg'
import Logs from './icons/logs.svg'
import ShieldWarning from './icons/shieldwarning.svg'

function MenuIcon({}) {
    const { state } = useUndoState();
    const panelTab = state.panelTab;

    const icon = {
        'Dashboard' : Dashboard,
        'Dashboard Settings' : Gear,
        'Atri AI' : Atri,
        'Atri Chat' : ChatBubble,
        'Site Performance' : Chart,
        'Conversion Insights' : Funnel,
        'SEO Health Check' : Glass,
        'Blog Generator' : Blog,
        'Metadata Assistant' : GlassCircle,
        'Insight Reports' : Brief,
        'Atri Settings' : Gear,
        'Security' : Shield,
        'Firewall Settings' : ShieldCheck,
        'SSL/TLS' : Lock,
        'DDoS Protection' : Bolt,
        'Permissions' : Key,
        'Access Controls' : FingerPrint,
        'Login Security' : LockOpen,
        'Audit Logs' : Logs,
        'Threat Detection' : ShieldWarning,
        'Security Overview' :Gear,
    };

    return <img className='menu-icon' src={ icon[panelTab] } />
}

export default MenuIcon