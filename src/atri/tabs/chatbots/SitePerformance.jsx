import { useState, useRef, useEffect } from "react";
import ChatbotIcon from '../../assets/chatbot/chart.svg';
import './../../Atri.css';
import AtriInput from "./Components/AtriInput";
import ChatBotMessages from "./Components/AtriMessages";
import { getChatbotConfig } from './Components/chatbotConfig';

function SitePerformance({ type = "sitePerformance" }) {
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
    "Why is my website loading slowly today?",
    "What’s causing high Time to First Byte (TTFB)?",
    "How do I reduce server response time?",
    "What are the top three speed issues on my site right now?",
    "Is my largest contentful paint (LCP) too high?",
    "What’s the easiest way to fix render-blocking resources?",
    "Which JavaScript files are slowing me down?",
    "Can you show a breakdown of load times by asset?",
    "Why does my page score worse on mobile?",
    "Are there unused CSS rules inflating my bundle?",
    "How do I enable text compression?",
    "What are the top causes of layout shift on my homepage?",
    "Is my font loading method optimal?",
    "Should I preload any specific assets?",
    "How can I reduce DOM complexity on product pages?",
    "What’s the impact of my third-party scripts?",
    "Is image lazy loading working properly?",
    "How much does my hero image affect performance?",
    "Should I switch image formats to WebP or AVIF?",
    "What’s the real difference between FCP and LCP?",
    "How does my Core Web Vitals score look today?",
    "Is there a memory leak in any frontend script?",
    "How often is my cache invalidated?",
    "What are the longest main-thread tasks right now?",
    "Is my CDN configured correctly for asset delivery?",
    "Are my resources compressed using Brotli or Gzip?",
    "How do I eliminate unnecessary reflows during load?",
    "What does my performance look like over a slow 3G connection?",
    "Why is my site’s interactivity delayed after load?",
    "Can you show me heatmaps of loading patterns?",
    "Is the site responsive across all viewports?",
    "How do I defer non-critical JavaScript?",
    "Are service workers caching efficiently?",
    "What’s causing the most JavaScript execution time?",
    "Should I self-host or externally load fonts?",
    "Can we reduce client-side re-renders?",
    "Which images are unoptimized above the fold?",
    "Is there excessive recursion in any scripts?",
    "Why does the LCP fluctuate by session?",
    "What’s my current Lighthouse score breakdown?",
    "Are any analytics scripts degrading performance?",
    "Is the page visually complete before interaction?",
    "Do I have cumulative layout shift during interaction?",
    "What’s the CPU usage during load spikes?",
    "Can you highlight performance bottlenecks by section?",
    "Should I switch to server-side rendering?",
    "Do I need a different hosting provider for better speed?",
    "Are my scripts executed in optimal order?",
    "Can I safely delay third-party widget loading?",
    "Is my HTML structure contributing to slow rendering?",
    "Should I inline critical CSS or keep it external?"
    ];


  const promptSuggestions = allPrompts.sort(() => 0.5 - Math.random()).slice(0, 4);

  return (
    <div className="chat-bot-panel f-col g12">
      {!iconFadeOut && (
        <div className={`chatbot-icon-wrap ${iconFadeOutDelay ? 'fade' : ""} f-col g16`}>
          <img src={ChatbotIcon} />
          <p>Ask Anything About Your <br />Site’s Speed and Stability</p>
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

export default SitePerformance;
