import SearchIcon from './assets/icons/sea.svg'
import CloudUp from './assets/tabs/cldup.svg'
import Bin from './assets/tabs/bin.svg'
import SquaresRound from './assets/tabs/thsqr.svg'
import Power from './assets/tabs/pow.svg'
import Home from './assets/tabs/hom.svg'
import Logs from './assets/tabs/log.svg'
import Bell from './assets/tabs/bel.svg'
import Gear from './assets/tabs/ger.svg'
import Card from './assets/tabs/car.svg'
import Chart from './assets/tabs/cha.svg'
import Squares from './assets/tabs/squa.svg'
import Cpu from './assets/tabs/cpu.svg'
import UserCircle from './assets/tabs/usec.svg'
import UserAdd from './assets/tabs/usad.svg'
import Book from './assets/tabs/bok.svg'
import MessageDots from './assets/tabs/mesd.svg'
import CodeLine from './assets/tabs/codl.svg'

import Esc from './assets/icons/esc.svg'
import Up from './assets/icons/up.svg'
import Down from './assets/icons/down.svg'
import Enter from './assets/icons/enter.svg'

import { useEffect, useRef } from 'react';

function Search({ searchAnimation, handleSearchOpen}) {
    const tabRefs = useRef([]);

    const sections = [
    {
        heading: 'Actions',
        items: [
        { id: 'Deploy Site', icon: CloudUp },
        { id: 'Clear cache', icon: Bin },
        { id: 'Create backup', icon: SquaresRound },
        { id: 'Toggle maintenance mode', icon: Power }
        ]
    },
    {
        heading: 'Navigation',
        items: [
        { id: 'Go to Dashboard', icon: Home },
        { id: 'Open Logs', icon: Logs },
        { id: 'View Notifications', icon: Bell },
        { id: 'Open Site Settings', icon: Gear }
        ]
    },
    {
        heading: 'Integrations',
        items: [
        { id: 'Stripe – Billing Logs', icon: Card },
        { id: 'Analytics – Real-Time', icon: Chart }
        ]
    },
    {
        heading: 'Recent Activity',
        items: [
        { id: 'Viewed: Resource Usage', icon: Squares },
        { id: 'Restored from Backup', icon: Cpu }
        ]
    },
    {
        heading: 'Users & Access',
        items: [
        { id: 'View User: Alex Dev', icon: UserCircle },
        { id: 'Invite User', icon: UserAdd }
        ]
    },
    {
        heading: 'Help & Support',
        items: [
        { id: 'Help Documentation', icon: Book },
        { id: 'Contact Support', icon: MessageDots },
        { id: 'Keyboard Shortcuts', icon: CodeLine }
        ]
    }
    ];

      useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleSearchOpen();
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const buttons = tabRefs.current;
        const index = buttons.findIndex((btn) => btn === document.activeElement);

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = index < 0 ? 0 : (index + 1) % buttons.length;
          buttons[next]?.focus();
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = index < 0 ? buttons.length - 1 : (index - 1 + buttons.length) % buttons.length;
          buttons[prev]?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSearchOpen]);

    let tabIndex = 0;

    return (
        <>
            <div onClick={handleSearchOpen} className={`search-background-blur ${searchAnimation ? 'animate' : ''}`}></div>
            <div className={`search-menu f-col ${searchAnimation ? 'animate' : ''}`}>
                <div className="search-input-wrap f-row g8">
                    <img src={SearchIcon} />
                    <input autoFocus placeholder='Type a command or search' className="search-input" />
                </div>
                <div className="search-block f-col">
                    <div className="search-tab-wrap f-col">
                        {sections.map(({ heading, items }) => (
                            <div key={heading} className='search-tab-col f-col g8'>
                                <p className='search-tab-heading'>{heading}</p>
                                {items.map(({ id, icon }) => (
                                <button
                                    key={id}
                                    className="search-tab f-row g12"
                                    ref={(el) => (tabRefs.current[tabIndex++] = el)}
                                >
                                    <img src={icon} alt={id} />
                                    {id}
                                </button>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="search-bottom f-row spread">
                        <div className="f-row g6">
                            <img src={Esc} />
                             <p>To Close</p>
                        </div>
                        <div className="f-row g20">
                            <div className="f-row g6">
                                <div className="f-row g2">
                                    <img src={Up} />
                                    <img src={Down} />
                                </div>
                                <p>To Navigate</p>
                            </div>
                            <div className="f-row g6">
                                <img src={Enter} />
                                <p>To Select</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search