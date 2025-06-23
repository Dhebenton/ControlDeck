import { useState } from "react"
import Sun from './assets/theme-toggle/sun.svg'
import Moon from './assets/theme-toggle/moon.svg'

function ThemeToggle({}) {
    const [ lightTheme, setLightTheme ] = useState(false)

    function handleTheme() {
        setLightTheme(prev => !prev)
    } 

    return (
        <button onClick={handleTheme} className={`theme-toggle f-row ${lightTheme ? 'light' : ''}`}>
            <img className={`moon ${lightTheme ? 'inactive' : ''}`} src={Moon} />
            <div className="theme-toggle-knob"></div>
            <img className={`sun ${lightTheme ? '' : 'inactive'}`} src={Sun} />
        </button>
    )
}

export default ThemeToggle