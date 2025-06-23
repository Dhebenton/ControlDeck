import AccountDropdown from "../dropdown-menus/AccountDropdown"
import NotificationsDropdown from "../dropdown-menus/NotificationsDropdown"
import SearchBar from "../search/Searchbar"
import Tabs from "./Tabs"
import ThemeToggle from "./ThemeToggle"
import './Navigation.css'
import Gear from '../assets/buttons/gear.svg'
import CloseNav from '../assets/buttons/closenav.svg'
import Palet from '../assets/buttons/pallet.svg'
import { useState } from "react"


function Navigation({ searchOpen, searchAnimation, handleSearchOpen }) {
    const [ navigationClosed, setNavigationClosed] = useState(false)
    const [ navigationOpening, setNavigationOpening ] = useState(false)

    function handleClose() {
        if (navigationClosed) {
            setNavigationClosed(false);
            setNavigationOpening(true)
            setTimeout(() => setNavigationOpening(false), 400)
        } else {
            setNavigationClosed(true)
        }
    }
    
    return (
        <div className={`navigation ${navigationClosed ? 'closed' : ''} ${navigationOpening ? 'opening' : ''} f-col g52`}>
            <div className="navigation-block f-row j-f-e g4">
                <AccountDropdown />
                <NotificationsDropdown />
                <button className="transparent-button" onClick={handleClose}>
                    <img id="navcloseicon" src={CloseNav} />
                </button>
            </div>
            <SearchBar 
                searchOpen={searchOpen}
                searchAnimation={searchAnimation}
                handleSearchOpen={handleSearchOpen}
            />
            <Tabs />
            <div className="navigation-block last f-row j-f-e g4">
                <ThemeToggle />
                <button id="edit-ui-button" className="button-main icon">
                    <img src={Palet}/>
                </button>
                <button id="settings-button" className="button-main icon">
                    <img src={Gear} />
                </button>
            </div>
        </div>
    )
}

export default Navigation