import { useState, useRef, useEffect } from "react";
import ChatbotIcon from '../../assets/chatbot/funnel.svg';
import './../../Atri.css';
import AtriInput from "./Components/AtriInput";
import ChatBotMessages from "./Components/AtriMessages";
import { getChatbotConfig } from './Components/chatbotConfig';

function ConversionInsights({ type = "conversionInsights" }) {
  const config = getChatbotConfig(type);

  const [formMove, setFormMove] = useState(false);
  const [iconFadeOut, setIconFadeOut] = useState(false);
  const [iconFadeOutDelay, setIconFadeOutDelay] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);
  const [hideSuggestions, setHideSuggestions] = useState(false);
  const [fadeSuggestions, setFadeSuggestions] = useState(false);

  function handleFormMove() {
    setFormMove(true);
    setIconFadeOutDelay(true);
    setTimeout(() => setIconFadeOut(true), 500);
    setFadeSuggestions(true);
    setTimeout(() => setHideSuggestions(true), 300);
  }

  async function handleSubmit(userPrompt) {
    const trimmed = userPrompt.trim();
    if (!trimmed) return;

    const userMessage = { role: 'user', content: trimmed };
    setMessages(prev => [...prev, userMessage, { role: 'assistant', content: '' }]);
    setLoading(true);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: config.systemMessage },
            ...messages,
            userMessage
          ]
        })
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let fullMessage = '';

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value);
        const lines = chunk.split("\n").filter(line => line.startsWith("data: "));

        for (const line of lines) {
          const text = line.replace("data: ", "");
          if (text === "[DONE]") {
            setLoading(false);
            return;
          }

          fullMessage += text;

          setMessages(prev => {
            const updated = [...prev];
            const lastIdx = updated.length - 1;
            if (updated[lastIdx].role === 'assistant') {
              updated[lastIdx] = { ...updated[lastIdx], content: fullMessage };
            }
            return updated;
          });
        }
      }
    } catch (err) {
      console.error("Streaming error:", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

    const allPrompts = [
    "Why are users dropping off at the checkout stage?",
    "What’s the average conversion rate for my product pages?",
    "Which call-to-action is performing best right now?",
    "How can I improve conversion on mobile devices?",
    "Are my forms too long or confusing?",
    "Where do most users exit during the sign-up flow?",
    "What’s the impact of page load speed on my conversion rate?",
    "Should I change the CTA text on my homepage?",
    "How do I reduce cart abandonment?",
    "What elements get the most clicks on landing pages?",
    "Are any distractions hurting my lead generation?",
    "Is my pricing page converting effectively?",
    "What’s my bounce rate for ad traffic vs organic?",
    "Which traffic source converts the best?",
    "How does user scroll depth correlate with conversions?",
    "What’s the average session duration before a conversion?",
    "Are there friction points in my onboarding flow?",
    "What can I simplify in the checkout process?",
    "Do return visitors convert better than new ones?",
    "How do I test headline effectiveness?",
    "Should I use exit-intent popups to recover conversions?",
    "What’s the click-through rate on my main CTA?",
    "Are my testimonials placed in optimal locations?",
    "How many users interact with the demo button?",
    "Is my value proposition above the fold strong enough?",
    "How do mobile and desktop users behave differently?",
    "What percentage of users complete multi-step forms?",
    "Which A/B test variant performed better last week?",
    "How do I track micro-conversions effectively?",
    "Do product images impact conversion rate?",
    "How much trust do my pages convey to new visitors?",
    "What’s the conversion impact of user reviews?",
    "Where are users hesitating or pausing?",
    "What’s my conversion rate by device type?",
    "How often do users click but not convert?",
    "Is my offer being seen or skipped?",
    "What’s the most common user journey to conversion?",
    "How can I better segment high-intent users?",
    "Are users seeing my key selling points?",
    "Is my funnel too long or complex?",
    "How often do users abandon mid-scroll?",
    "What’s causing friction on my pricing page?",
    "Are my lead magnets converting effectively?",
    "Should I test shorter vs longer sales pages?",
    "How does urgency messaging affect signups?",
    "Is my navigation helping or hurting conversions?",
    "Do users interact with my FAQs before converting?",
    "What’s the ROI of my last email campaign?",
    "Are coupon users more or less likely to convert?",
    "How does personalization affect conversion behavior?"
    ];



  const promptSuggestions = allPrompts.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="chat-bot-panel f-col g12">
      {!iconFadeOut && (
        <div className={`chatbot-icon-wrap ${iconFadeOutDelay ? 'fade' : ""} f-col g16`}>
          <img src={ChatbotIcon} />
          <p>Ask anything about your <br />site's conversion performance</p>
        </div>
      )}
      <div className={`chat-window ${formMove ? 'active' : ''} f-col g24`}>
        <div className="message-window f-col g36">
          {formMove && <ChatBotMessages atriType={type} messages={messages} loading={loading} />}
          <div ref={messageEndRef} />
        </div>
        {!hideSuggestions && (
          <div className={`prompt-suggestion-wrap f-row g16 ${fadeSuggestions ? 'fade-out' : ''}`}>
            {promptSuggestions.map((text, i) => (
              <button
                key={i}
                className="prompt-suggestion"
                onClick={() => {
                  handleFormMove();
                  handleSubmit(text);
                }}
              >
                {text}
              </button>
            ))}
          </div>
        )}
        <AtriInput
          handleFormMove={handleFormMove}
          input={input}
          setInput={setInput}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ConversionInsights;
