import { useUndoState } from "../UndoContent";
import { useEffect } from "react";

import OpenPanel from "../assets/buttons/closepanel.svg";
import MenuIcon from "./MenuIcon";
import FullScreen from "../assets/buttons/fullscreen.svg";
import ReloadIcon from "../assets/buttons/reload.svg";
import "./Menu.css";
import StatusDropdown from "../dropdown-menus/StatusDropdown";

function Menu({menuClosed, handlePanelClose }) {
  const { state, undo, redo } = useUndoState();
  const panelTab = state.panelTab;

    useEffect(() => {
    function handleKeyDown(e) {
        const key = e.key.toLowerCase();
        if ((e.ctrlKey || e.metaKey) && key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
            redo();
        } else {
            undo();
        }
        }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    }, [undo, redo]);


  return (
    <div className="menu f-row j-f-e g8">
      <div className="menu-block f-row">
        <div className={`menu-button-wrap ${menuClosed ? 'closed' : ''} f-row j-f-e`}>
          <button className="transparent-button" onClick={handlePanelClose}>
            <img src={OpenPanel} />
          </button>
        </div>
        <MenuIcon />
        <p className="menu-heading">{panelTab}</p>
      </div>
      <button className="button-main icon">
        <img src={FullScreen} />
      </button>
      <button className="button-main icon">
        <img src={ReloadIcon} />
      </button>
      <button className="button-main" onClick={undo}>
        Go Back
      </button>
      <button className="button-main">Editor</button>
      <StatusDropdown />
    </div>
  );
}

export default Menu;
