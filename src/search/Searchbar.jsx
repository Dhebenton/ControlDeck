import Search from './assets/icons/sea.svg'
import Ctrl from './assets/icons/ctrl.svg'
import K from './assets/icons/k.svg'
import './Search.css'
import { useEffect } from 'react';

function SearchBar({ handleSearchOpen }) {

    useEffect(() => {
        const handleKeyCombo = (e) => {
            if (e.ctrlKey && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                handleSearchOpen();
            }
        };

        window.addEventListener('keydown', handleKeyCombo);
        return () => window.removeEventListener('keydown', handleKeyCombo);
    }, [handleSearchOpen]);

    return (
        <button className="search-bar f-row j-f-s g8" onClick={handleSearchOpen}>
            <img src={Search} />
            <p>Search</p>
            <div className="s-key-icons f-row g4">
                <img src={Ctrl} />
                <img src={K} />
            </div>
        </button>
    )
}

export default SearchBar