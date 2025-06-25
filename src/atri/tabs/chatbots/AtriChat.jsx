import { useState } from "react"
import ChatbotIcon from '../../assets/chatbot/messagebuble.svg'
import './../../Atri.css'
import AtriInput from "./Components/AtriInput"
import AtriMessage from "./Components/AtriMessages"

function AtriChat({}) {

    const [ formMove, setFormMove ] = useState(false)
    const [ iconFadeOut, setIconFadeOut ] = useState(false)
    const [ iconFadeOutDelay, setIconFadeOutDelay ] = useState(false)

    
      function handleFormMove() {
        setFormMove(true);
        setIconFadeOutDelay(true);
        setTimeout(() => setIconFadeOut(true), 500);
      }

    const promptSuggestions = [
        "What’s the quickest fix I can apply here for a +10 score gain?",
        "Explain this module’s data like I’m non-technical.",
        "What’s the quickest fix I can apply here for a +10 score gain?",
        "Explain this module’s data like I’m non-technical."
    ]


    return (
        <div className="chat-bot-panel f-col g12">
            {iconFadeOut === false && <div className={`chatbot-icon-wrap ${iconFadeOutDelay ? 'fade' : ""} f-col g16`}>
                <img src={ChatbotIcon} />
                <p>Ask me anything about <br />your site or dashboard</p>
            </div>}
            <div className={`chat-window ${formMove ? 'active' : ''} f-col g24`}>
                <div className="message-window">{formMove && <AtriMessage />}</div>
                <div className="prompt-suggestion-wrap f-row g16">
                    {promptSuggestions.map((text, i) => (
                        <button
                            key={i}
                            className="prompt-suggestion"
                        >
                            {text}
                        </button>
                    ))}
                </div>
                <AtriInput 
                    handleFormMove={handleFormMove}
                />
            </div>
        </div>
    )
}

export default AtriChat
