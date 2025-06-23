import { useState } from 'react'
import './App.css'
import Navigation from './navigation/Navigation'
import Search from './search/Search'
import Panel from './panel/Panel'
import Menu from './menu/Menu'

function App() {
  const [ searchOpen, setSearchOpen ] = useState(false) 
  const [ searchAnimation, setSearchAnimation ] = useState(true)
  const [ panelClosed, setPanelClosed ] = useState(false)
  const [ menuClosed, setMenuClosed ] = useState(true)

  function handlePanelClose() {
    if (panelClosed) {
      setMenuClosed(true) 
      setTimeout(() => setPanelClosed(false), 300)
    } else {
      setPanelClosed(true);
      setTimeout(() => setMenuClosed(false), 400)
    }
  }

  function handleSearchOpen() {
    if (searchOpen) {
      setSearchAnimation(true)
      setTimeout(() => setSearchOpen(false), 300)
    } else {
      setSearchOpen(true);
      setTimeout(() => setSearchAnimation(false), 1)
    }
  }

  return (
    <>
      {searchOpen && <Search 
        searchOpen={searchOpen}
        searchAnimation={searchAnimation}
        handleSearchOpen={handleSearchOpen}
      />}
      <Navigation 
        searchOpen={searchOpen}
        searchAnimation={searchAnimation}
        handleSearchOpen={handleSearchOpen}
      />
      <div className="dashboard-whole-wrap f-row">
        <Panel 
          panelClosed={panelClosed}
          handlePanelClose={handlePanelClose}
        />
        <div className='dashboard-menu-wrap f-col'>
            <Menu 
              menuClosed={menuClosed}
              handlePanelClose={handlePanelClose}
            />
        </div>
      </div>
    </>
  )
}

export default App
