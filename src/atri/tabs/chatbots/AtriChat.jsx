import { useState, useRef, useEffect } from "react";
import ChatbotIcon from '../../assets/chatbot/messagebuble.svg';
import './../../Atri.css';
import AtriInput from "./Components/AtriInput";
import ChatBotMessages from "./Components/AtriMessages"; // actual name
import { getChatbotConfig } from './Components/chatbotConfig';
import editIcon from '../../assets/atri-summary/edit.svg'

function AtriChat() {
  const [formMove, setFormMove] = useState(false);
  const [iconFadeOut, setIconFadeOut] = useState(false);
  const [iconFadeOutDelay, setIconFadeOutDelay] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messageEndRef = useRef(null);

  function handleFormMove() {
    setFormMove(true);
    setIconFadeOutDelay(true);
    setTimeout(() => setIconFadeOut(true), 500);
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
            { role: 'system', content: getChatbotConfig("atriai").systemMessage },

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
    "How can I boost my site's speed in under 10 minutes?",
    "What’s the best way to compress images without losing quality?",
    "Explain Core Web Vitals like I'm five.",
    "Why is my CLS score so high and how can I fix it?",
    "What tools can I use to monitor site downtime?",
    "How can I reduce initial server response time?",
    "What’s the difference between First Contentful Paint and Largest Contentful Paint?",
    "Should I use a CDN for a small site?",
    "What’s the impact of unused JavaScript on performance?",
    "Is lazy loading images still recommended in 2025?",
    "How can I make my site feel faster without actual speed improvements?",
    "What's the best strategy for reducing TTFB?",
    "Which font formats load fastest on modern browsers?",
    "What’s a good Lighthouse score to aim for realistically?",
    "Why does my page load slower on mobile?",
    "How do I detect third-party scripts slowing my site?",
    "Can I cache API responses effectively with service workers?",
    "How should I handle broken links at scale?",
    "What's the easiest way to implement a dark mode toggle?",
    "What metrics should I track for ecommerce conversion?",
    "How do I remove unused CSS safely?",
    "What causes layout shifts during load?",
    "Should I prioritize desktop or mobile optimization first?",
    "How do I defer offscreen images?",
    "What's the trade-off between image quality and load speed?",
    "Which analytics platform has the lowest performance impact?",
    "What should I check after migrating to a new domain?",
    "How do I stop bots from hammering my site?",
    "How do I test my site on a slow 3G connection?",
    "What causes a high bounce rate despite fast load times?",
    "How do I A/B test layouts without hurting performance?",
    "What’s the real user impact of third-party widgets?",
    "Can custom fonts be optimized for better LCP?",
    "How do I reduce DOM size on large content pages?",
    "What are common performance mistakes in React apps?",
    "What should I optimize first: JS, images, or fonts?",
    "How do I diagnose memory leaks in the frontend?",
    "Is server-side rendering worth it for SEO and speed?",
    "What’s the difference between lazy load and preloading?",
    "Can hosting alone impact performance scores?",
    "What are the signs of bad cumulative layout shift?",
    "How do I audit performance without using Lighthouse?",
    "Should I inline critical CSS or keep it external?",
    "What's the simplest caching setup for static assets?",
    "What causes LCP to jump randomly across sessions?",
    "How do I make my dashboard feel more responsive?",
    "Which performance metrics matter most for UX?",
    "Why is my Google PageSpeed score inconsistent?",
    "How do I troubleshoot long main-thread tasks?",
    "How should I structure scripts for optimal load order?",
    "Can I still use jQuery without tanking performance?"
    ];

    const promptSuggestions = allPrompts
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="chat-bot-panel f-col g12">
      {!iconFadeOut && (
        <div className={`chatbot-icon-wrap ${iconFadeOutDelay ? 'fade' : ""} f-col g16`}>
          <img src={ChatbotIcon} />
          <p>Ask me anything about <br />your site or dashboard</p>
        </div>
      )}
      <div className={`chat-window ${formMove ? 'active' : ''} f-col g24`}>
        <div className="message-window f-col g36">
          {formMove && <ChatBotMessages messages={messages} loading={loading} />}
          <div ref={messageEndRef} />
        </div>
        <div className="prompt-suggestion-wrap f-row g16">
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

export default AtriChat;
