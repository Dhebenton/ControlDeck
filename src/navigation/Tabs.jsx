import { useUndoState } from "../UndoContent" 
import Dashboard from './assets/tab/dsh.svg'
import Atri from './assets/tab/atr.svg'
import Analytics from './assets/tab/ana.svg'
import Performance from './assets/tab/per.svg'
import Notifications from './assets/tab/not.svg'
import Security from './assets/tab/sec.svg'
import Intergrations from './assets/tab/int.svg'
import Backups from './assets/tab/bac.svg'
import Configuration from './assets/tab/conf.svg'
import Plans from './assets/tab/pls.svg'
import Users from './assets/tab/use.svg'
import Logs from './assets/tab/log.svg'

function Tabs({}) {
  const { state, set } = useUndoState();
  const tab = state.tab || "Dashboard";
  const panelTab = state.panelTab || "Dashboard"

  const tabs = [
    { id: "Dashboard", icon: Dashboard, set: "Dashboard" },
    { id: "Atri AI", icon: Atri, set: "Atri AI" },
    { id: "Analytics", icon: Analytics, set: "Analytics" },
    { id: "Performance", icon: Performance, set: "Performance" },
    { id: "Notifications", icon: Notifications, set: "Notifications" },
    { id: "Security", icon: Security, set: "Security"  },
    { id: "Integrations Hub", icon: Intergrations, set: "Integrations Hub" },
    { id: "Backups & Restore", icon: Backups, set: "Backups & Restore" },
    { id: "Configurations", icon: Configuration, set: "Configurations" },
    { id: "Plans & Billing", icon: Plans, set: "Plans & Billing" },
    { id: "Users & Access", icon: Users, set: "Users & Access" },
    { id: "Logs & Reports", icon: Logs, set: "Logs & Reports" }
  ];

  return (
    <div className="f-col g6">
      {tabs.map((tabs) => (
        <button
          key={tabs.id}
          className={`tab ${tab === tabs.id ? 'active' : ''}`}
          onClick={() => set({ ...state, tab: tabs.id, panelTab: tabs.set })}
        >
          <img src={tabs.icon} alt={tabs.id} />
          <p>{tabs.id}</p>
        </button>
      ))}
    </div>
  );
}

export default Tabs
