import { useUndoState } from '../UndoContent'

import Dashboard from './icons/home.svg'
import Gear from './icons/gear.svg'

function MenuIcon({}) {
    const { state } = useUndoState();
    const panelTab = state.panelTab;

    const icon = {
        'Dashboard' : Dashboard,
        'Dashboard Settings' : Gear
    };

    return <img className='menu-icon' src={ icon[panelTab] } />
}

export default MenuIcon